---
title: "Empfehlungssysteme und Matrixzerlegungen (German)"
date: '2023-06-13'
---

# Empfehlungssysteme und Matrixzerlegungen

## Matrixbasierte Empfehlungssysteme

Heutzutage besitzen nahezu alle großen Firmen riesige Mengen an
Nutzerdaten (z.B. Amazon: Nutzer $\mapsto$ gekaufte Produkte
$\in \{0,1\}$, TikTok: Nutzer $\mapsto$ relative Betrachtungsdauer eines
Videos $\in [0,1]$, Netflix: User $\mapsto$ Bewertung eines Films
$\in \{1,\dots,5\}$, $\dots$). Recommendation Systeme (RS) für genaue
Vorhersage über das zu erwartende Userverhalten sind daher enorm wichtig
(siehe Netflix Challenge (Bell and Koren 2007)) und ein essentieller
Teil der sogenannten “Data Science”.

RS können explizite Merkmale (Genre, Produktkategorie, $\dots$)
verwenden, was man typerweise als *content filtering* bezeichnet. Im
Gegensatz hierzu gibt es das *collaborative filtering*, das Beziehungen
zwischen Usern oder Objekten zusammenhängend (kollaborativ) bewertet,
z.B. aufgrund vorherigen Interaktionen und dadurch Vorhersagen erstellt.
Da dies keine explizite Erstellung von Merkmalen benötigt, können so
auch komplexere Zusammenhänge erfasst werden (z.B. Einkommen, was nicht
direkt aus Bewertungen ersichtlicht ist (Zhou, Kannan, and Prasanna
2020)). (Koren, Bell, and Volinsky 2009)

### Matrixzerlegungs-Modelle (MZ-Modelle)

Ein erfolgreicher Ansatz für collaborative filtering sind MZs. Diese
sind den sogenannten *latent factor models* zugeordert, da sie die
User/Item Relationen mit latenten Faktoren beschreiben, die man nicht
direkt messen sondern nur indirekt inferieren kann (lt. lateo $\mapsto$
verborgen sein).

Sei $f$ die Dimension des latent factor space, dann sei jedes Item
$i \in \mathcal{I}$ mit einem Vektor $\boldsymbol{q}_i \in \mathbb{R}^f$
und jeder User $u \in \mathcal{U}$ mit einem Vektor
$\boldsymbol{p}_u \in \mathbb{R}^f$ assoziert. Das resultierende
Skalarprodukt misst dann die Bewertung (rating $r$) eines Users $u$ für
das Item $i$ nach
$$

  r_{ui} := \langle \boldsymbol{p}_u , \boldsymbol{q}_i \rangle
  .
$$
 Sortieren wir alle Bewertungen in die Bewertungsmatrix
$\boldsymbol{R} \in \mathbb{R}^{|\mathcal{U}| \times |\mathcal{I}|}$ mit
$R_{ui} := r_{ui}$ ein, so ergibt sich


$$
\boldsymbol{R} = \boldsymbol{P}^T \boldsymbol{Q}
  \quad \textnormal{ mit }
  \boldsymbol{P} =
  \begin{pmatrix}
  \boldsymbol{p}_{u_1} & \boldsymbol{p}_{u_2} & \dots
  \end{pmatrix}
$$
und
$$
\boldsymbol{Q} =
  \begin{pmatrix}
  \boldsymbol{q}_{i_1} & \boldsymbol{q}_{i_2} & \dots
  \end{pmatrix}
  $$

Ziel ist es nun, die Einträge von $\boldsymbol{P}$ und $\boldsymbol{Q}$
so zu wählen, dass die Faktorisierung die Matrix $\boldsymbol{R}$
bestmöglich abbildet. Wären alle Einträge von $\boldsymbol{R}$ bekannt,
könnte man eine Singulärwertzerlegung (SVD) durchführen und nur die
ersten $f$ signifikantesten Rang-1 Terme behalten, mehr dazu später. Die
SVD ist nur ein Beispiel von Matrixzerlegungen, siehe (Stewart 2000). es
gibt z.B. noch die
Cholesky: $\boldsymbol{A} = \boldsymbol{L}^T \boldsymbol{D} \boldsymbol{L}$;
pivoted LU
(ger: LR): $\boldsymbol{P}^T \boldsymbol{A} \boldsymbol{Q}= \boldsymbol{L} \boldsymbol{U}$;
QR: $\boldsymbol{A} = \boldsymbol{Q} \boldsymbol{R}$;
Spektral: $\boldsymbol{A} = \boldsymbol{U} \boldsymbol{T} \boldsymbol{U}^{-1}$.

In der Praxis sind allerdings nicht alle Einträge der Ratingsmatrix
$\boldsymbol{R}$ bekannt. Ganz im Gegenteil, es gibt z.B. viel mehr
Produkte als ein User kaufen bzw. bewerten könnte. Daher können wir
SVD-basierte Ansätze nicht anwenden. Jedoch wollen wir trotzdem eine
approximative Zerlegung finden, die Aufgaben folgender Form löst

$$
\begin{aligned}
  \boldsymbol{R}
  := \begin{pmatrix}
    1 & 2 & 3\\
    2 & \textcolor{red}{?} & 4
  \end{pmatrix}
  \approx
  \begin{pmatrix}
    1 & 2 & 3\\
    2 & \textcolor{red}{3} & 4
  \end{pmatrix}
  \\
  =
  \begin{pmatrix}
    1 & 0 \\
    1 & 1
  \end{pmatrix}
  \begin{pmatrix}
    1 & 2 & 3 \\
    1 & 1 & 1
  \end{pmatrix}
  :=
  \boldsymbol{P}^T \boldsymbol{Q}
\end{aligned}
$$
 und somit Vorhersagen für die
fehlenden Werte ($\textcolor{red}{?} = 3$) liefert.

### Formulierung als Optimierungsproblem

Nehmen wir nun an, dass $\boldsymbol{P}$ und $\boldsymbol{Q}$ bekannt
sind, dann lässt sich das Rating vorraussagen mit

$$
\tilde{r}_{ui} = \langle \boldsymbol{p}_u , \boldsymbol{q}_i \rangle
  .
$$
 Sei nun $\kappa$ die Menge aller Paare $(u,i)$, für die ein Rating
$r_{ui}$ bekannt ist. Dies ist das Trainingsset der Größe
$|\kappa| = N$. Dann ist der Vorhersagefehler
$e_{ui} := \tilde{r}_{ui} - r_{ui}$. Um alle Fehler zu minimieren wird
dann das Minimierungsproblem

$$
\min_{\boldsymbol{P},\boldsymbol{Q}} \sum_{(u,i) \in \kappa} e_{ui}^2
  =:
  \min_{\boldsymbol{x}} N L(\boldsymbol{x})
  ,
$$
 in der die alternative Notation die Loss Funktion
$L(\boldsymbol{x}) = \tfrac{1}{N} \sum_{(u,i) \in \kappa} e_{ui}^2$
(Mean Sqaured Error, MSE) in Abhängigkeit aller Parameter
$\boldsymbol{x}$ minimiert (Strang et al. 2019, 4:p359). Statt dem
quadratierten Fehlers $e_{ui}^2$, könnte man auch die Absolutbeträge
$|e_{ui}|$ minimieren. Die Wahl der Loss Funktion ist sehr stark vom
Problem abhängig, in Klassifizierungsaufgaben wird sogar ein diskreter
0-1-Loss verwendet
(z.B. $e^{\textnormal{(0-1)}}_{ui} := 0 \textnormal{ wenn } \tilde{r}_{ui} = r_{ui}, 1 \textnormal{ sonst}$).

### Regularisierung

In der Praxis, passiert es oft, dass Daten aus dem Trainingssset sehr
gut vorhergesagt werden (sehr kleiner Felher $e_{ui}$), das Modell für
neue Datenpunkte jedoch “komische” Weter vorraussagt. Man kann dies
beobachten, wenn man nicht alle bekannten Daten ins Traingsset mit
aufnimmt sondern einige Daten als Testsset zur Validierung verwendet.
Dieses Phänomen wird als *Overfitting* bezeichnet und tritt vorallem bei
Modellen auf, in denen es mehr Optimierungsparameter als Daten gibt (bei
uns z.B. wenn es mehr Einträge in $\boldsymbol{P},\boldsymbol{Q}$ gibt
als es bekannte Bewertungen in $\boldsymbol{R}$ gibt).

Man kann dem Overfitting entgegenwirken, indem man eine Regularisierung
ins Minimierungsproblem einbaut, die hohe Modellkomplexität (z.B. viele
Nicht-Null Einträge in $\boldsymbol{P},\boldsymbol{Q}$) bestraft. Oft
wird die $\ell_2$-Regularisierung (Strang et al. 2019, 4:p412) verwendet
und das regularisierte Minimierungsproblem lautet

$$

  \min_{\boldsymbol{P},\boldsymbol{Q}} \sum_{(u,i) \in \kappa} e_{ui}^2 + \lambda \left( ||\boldsymbol{p}_u||^2_2 + ||\boldsymbol{q}_i||^2_2 \right)
  ,
$$
 bei dem $\lambda \in \mathbb{R}$ zu wählen ist. Andere
Regularisierungen sind ebenfalls möglich ($\ell_1$-Reg., diskretisierte
Sobolev-style $H^1$-Reg. mit Einbeziehung von Ableitungstermen,
$\dots$).

### Gradient Descent (GD)

In der Praxis ist das Optimierungsproblem hoch-dimensional und nicht
konvex (sprich partielle Ableitung gleich Null setzen bringt uns nicht
viel). Um das Problem zu lösen, könnten wir das Gradientenverfahren
einsetzen. Für ein allgemeines Minimierungsproblem der Funktion
$L(\boldsymbol{x})$, werden zuerst Statwerte $\boldsymbol{x}_0$ für alle
Parameter vorgegeben und dann
$$

  \boldsymbol{x}_{k+1} = \boldsymbol{x}_k - \eta_k \boldsymbol{\nabla} L(\boldsymbol{x}_k)
  ,
$$
 so lange iteriert, bis keine Änderung mehr auftritt (Gradient
verschwindet). Anschaulich werden die Parameter in genau der Richtung
verändert, die die größte Minimierung des Fehler zur Folge hat. Die
Schrittweite $\eta_k$ kann variabel sein und wird (je nach Kontext) auch
als *learning rate* bezeichnet. Die Berechnung des Gradienten pro
Schritt ist aber sehr oft sehr teuer. Außerdem führt die Bedingung
$\boldsymbol{\nabla}L = \boldsymbol{0}$ auf ganz viele Minima und es
wurde beobachtet, dass andere Algorithmen besser “generalisierende”
Resultate finden (sprich: ungesehene Daten werden besser vorrausgesagt).

### Stochastic Gradient Descent (SGD)

Ein solcher Algorithmus ist SGD. Hier wird angenommen, dass der Loss
geschrieben werden kann als
$L(\boldsymbol{x}) = \sum_{i=1}^N l_i(\boldsymbol{x})$ (separierte
Anteile der einzelnen Datenpunkte/Samples). In seiner ursprünglichen
Form, approximiert der Algorithmus den vollen Gradienten durch einen
Gradienten an nur einem Datenpunkt. Die Iterationsvorschrift wird dann ersetzt durch:

1.  Permutiere Indices im Traingsset

2.  $\boldsymbol{x}_{k+1} = \boldsymbol{x}_{k} - \eta_k \boldsymbol{\nabla} l_i(\boldsymbol{x}_k)$

Für unser Beispiel der MZ wird die Optimierung mit SGD dann nur für
einen bestimmten Eintrag $r_{ui}$ durchgeführt, was dann zum Update

$$
\boldsymbol{q}_i \leftarrow \boldsymbol{q}_i + \eta (e_{ui} \boldsymbol{p}_u - \lambda \boldsymbol{q}_i)
  ,
$$
$$
\boldsymbol{p}_u \leftarrow \boldsymbol{p}_u + \eta (e_{ui} \boldsymbol{q}_i - \lambda \boldsymbol{p}_u)
$$
 Die Tatsache, dass SGD letztlich ein gut generalisierendes
Resultat liefert ist aktuelle Forschung. Außerdem wurde die Komplexität
der Gradientenberechnung erheblich reduziert. Eine weitere Variante des
SGD betrachtet pro Schritt nicht nur einen Datenpunkt, sondern einen
(zufälligen) Minibatch (ger: Charge) bestehend aus $B$ Datenpunkten und
berechnet dann in jedem Schritt
$\boldsymbol{x}_{k+1} = \boldsymbol{x}_{k} - \eta_k \tfrac{1}{B} \sum_{i=1}^B \boldsymbol{\nabla} l_i(\boldsymbol{x}_k)$.
Dies ist ebenfalls sehr effizient, da moderne Computerarchitekturen
Berechnungen auch gleichzeitig auf mehreren Daten ausführen können
(vectorization).

##### Hyperparameter

Die Minibatchgröße $B$ sowie die Learning Rate $\eta_k$, die Modellgröße
(z.B. unsere latent factor space dimension $f$), der
Regularisierungsparameter $\lambda$ müssen im Vorfeld sorgfältig
ausgewählt werden. Da all diese Parameter nicht Teil der eigentlichen
Optimierung sind sondern nur die Rahmenbedingen setzen, werden diese
auch als *Hyperparameter* bezeichnet (vorallem im machine learning /
artifical intelligence (AI) Kontext). Die Wahl ist erst einmal gar nicht
so klar und wird im Kontext von “Hyperparameter optimization”
untersucht.

### Alternating Least Squares (ALS)

Im Fall der Suche nach einer MZ, kann man auch das alternatierende Least
Squares Verfahren anwenden. Da sowohl $\boldsymbol{p}_u$ und
$\boldsymbol{q}_i$ Unbekannte sind,
ist das Problem nicht konvex. Allerdings kann man abwechselnd jeweils
eine Menge der beiden als konstant fixieren. Für feste
$\boldsymbol{p}_u$, ist das Optimierungsproblem dann nämlich konvex und
kann optimal für alle $\boldsymbol{q}_i$ gleichzeitig gelöst werden.
Danach werden alle $\boldsymbol{q}_i$ fixiert und nach allen
$\boldsymbol{p}_u$ gelöst und so weiter. Diese Vorschrift garantiert die
Reduzierung des Fehlers in jedem Schritt und führt ebenfalls zu einer
sehr guten Lösung. Vorteile des ALS Verfahrens sind, z.B., die gute
Parallelisierbarkeit denn alle $\boldsymbol{p}_u$ können unabhängig
voneinander gelöst werden in einem Schritt.

### Modellverbesserungen

Natürlich kann man das RS Modell noch beliebig erweitern. Eine
Möglichkeit ist, noch Bias-Terme einzufügen. Das
Vorhersagemodell (Koren, Bell, and Volinsky 2009) dafür wäre dann

$$
\tilde{r}_{ui} = \mu + b_i + b_u + \langle \boldsymbol{p}_u , \boldsymbol{q}_i \rangle
$$

mit dem global average $\mu$, User Bias $b_u$ (User bewertet immer
$+0.5$), item bias $b_i$ (Titanic wurde $+1.0$ mehr bewertet als
Durchschnitt).

## Singulärwertzerlegung (SVD)

Eine deterministische Matrixzerlegung für Matrizen ohne fehlende Werte
ist die SVD und es gilt (Dahmen and Reusken 2006, p144):

**Satz 1.1**. Zu jeder Matrix
$\boldsymbol{A} \in \mathbb{R}^{m \times n}$ existieren orthogonale
Matrizen $\boldsymbol{U} \in \mathbb{R}^{m \times m}$,
$\boldsymbol{V} \in \mathbb{R}^{n \times n}$ und eine Diagonalmatriz

$$
\boldsymbol{\Sigma} := \operatorname{diag}{(\sigma_1,\dots,\sigma_p)} \in \mathbb{R}^{m \times n}
    ,\quad
    p = \min{(m,n)}
    ,
$$
 mit
$$
\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_p \ge 0
    ,
$$
 so dass

$$
\boldsymbol{U}^T \boldsymbol{A} \boldsymbol{V} = \boldsymbol{\Sigma}
    .
$$


Man kann dies (für quadratische Matrizen mit $n=m$) nutzen um eine
bestmögliche Rang-$r$ Zerlegung zu finden, in dem man folgende Summe
nach $r$-Termen abbricht:

$$
\boldsymbol{A} = \boldsymbol{U} \boldsymbol{\Sigma} \boldsymbol{V}^T = \sum_{i=1}^n \boldsymbol{u}_i \sigma_i \boldsymbol{v}_i^T
  .
$$
 Die resultierende Matrix

$$
\boldsymbol{\tilde{A}} := \sum_{i=1}^r \boldsymbol{u}_i \sigma_i \boldsymbol{v}_i^T
$$

ist eine Approximation von $\boldsymbol{A}$ und es gilt in der Frobenius
Norm:

$$
{\|\boldsymbol{A} - \boldsymbol{\tilde{A}}\|}_{\textnormal{F}}^2 = \sum_{k=r+1}^n \sigma_k^2
  ,
$$
 was sehr gut ist, wenn $\sigma_{r+1}$ bereits klein ist.
Anwendungen dieser Low-Rank Approximation liegen beispielsweise in der
Bildkomprimierung

**Beispiel 1.2**. Betrachte die Rang-2 Approximation von

$$
\begin{aligned}
    \boldsymbol{A}
    &=
    \begin{pmatrix}
      125.733 & 154.665 & 125.733 \\
      154.665 & 255.0   & 154.665 \\
      125.733 & 154.665 & 125.733
    \end{pmatrix}
    \\
    &\approx
    \begin{pmatrix}
      -0.4979 &  0.502 \\
      -0.7099 & -0.704 \\
      -0.4979 &  0.502
    \end{pmatrix}
    \\ & \cdot
    \operatorname{diag}{( 471.969,34.4956)}
    \\ & \cdot
    {\begin{pmatrix}
      -0.497 &  0.502 \\
      -0.709 & -0.704 \\
      -0.497 &  0.502
    \end{pmatrix}}^T
    .

\end{aligned}
$$
 Die Approximation macht in diesem Fall sogar keinen
Fehler da ein Singulärwert Null ist. Die Matrix könnte als Bild eines
Gaussian Filters betrachtet werden.

## Referenzen

- Bell, Robert M, and Yehuda Koren. 2007. “Lessons from the Netflix Prize
Challenge.” *Acm Sigkdd Explorations Newsletter* 9 (2): 75–79.
- Dahmen, Wolfgang, and Arnold Reusken. 2006. *Numerik für Ingenieure Und
Natu
- Koren, Yehuda, Robert Bell, and Chris Volinsky. 2009. “Matrix
Factorization Techniques for Recommender Systems.” *Computer* 42 (8):
30–37.
- Stewart, G. W. 2000. “The Decompositional Approach to Matrix
Computation.” *Computing in Science & Engineering* 2 (1): 50–59.
<https://doi.org/10.1109/5992.814658>.
- Strang, Gilbert et al. 2019. *Linear Algebra and Learning from Data*.
Vol. 4. Wellesley-Cambridge Press Cambridge.
- Zhou, Shijie, Rajgopal Kannan, and Viktor K Prasanna. 2020.
“Accelerating Stochastic Gradient Descent Based Matrix Factorization on
FPGA.” *IEEE Transactions on Parallel and Distributed Systems* 31 (8):
1897–1911.


