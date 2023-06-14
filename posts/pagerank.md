---
title: "Analyse des Google PageRank Algorithmus (GER)"
date: '2023-05-09'
---

<!-- pandoc --citeproc --bibliography=bib.bib -s SuppMaterial.tex -o output.md -t gfm -->
<!-- Test -->

# Analyse des Google PageRank Algorithmus

## Grundlagen

Im Folgenden betrachten wir den mathematischen Hintergrund zu Googles
PageRank Algorithmus. Dazu sei das Internet mit $n$ Webseiten
beschrieben durch einen *gerichteten einfachen Graph mit Schleifen*
$G = (V,E)$, wobei

1.  $V$ die Menge aller Ecken (Webseiten) ist;

2.  $E \subseteq \left\{(x,y) \ \middle|\ (x,y) \in V^2 \right\}$ die
    Menge aller gerichteter Kanten (Links) ist.

<div id="bsp:graph" class="bsp">

**Beispiel 1.1**. Der Graph $G = (V,E)$ mit
$$
\begin{aligned}
    V &= \{A,B,C,D\}
    \\
    E &= \{ (A,B), (A,C), (B,C), (B,D),
    \\
    & \quad (C,A), (D,B), (D,C) \}

\end{aligned}
$$
 ergibt das folgendes Internetmodell:

<div class="center">

<Image
  className="w-40 m-0 h-auto inline-block"
  src="/internet-graph.jpg"
  width={1}
  height={1}
  alt="3rd-order Lagrangian basis function on simplex #8"
  sizes="160px"
/>

</div>

</div>

<div class="dfn">

**Definition 1.2** (Adjazenzmatrix). Zum Internetgraph definieren wir
$\boldsymbol{A} \in {\{0,1\}}^{n \times n}$ mit
$$
A_{ij} :=
    \begin{cases}
      1 & \textnormal{es existiert Kante } j \textnormal{ nach } i
      \\
      0 & \textnormal{sonst}
    \end{cases}
    .
$$


</div>

<div class="bsp">

**Beispiel 1.3**. Zum Graph von
<a href="#bsp:graph" data-reference-type="ref"
data-reference="bsp:graph">1.1</a> ergibt sich
$$
\boldsymbol{A} =
    \begin{pmatrix}
      0 & 0 & 1 & 0 \\
      1 & 0 & 0 & 1 \\
      1 & 1 & 0 & 1 \\
      0 & 1 & 0 & 0 \\
    \end{pmatrix}
    .
$$


</div>

<div id="def:linkmatrix" class="dfn">

**Definition 1.4** (Linkmatrix). Die Linkmatrix
$\boldsymbol{U} \in {[0,1]}^{n \times n}$ enthält die
Wahrscheinlichkeiten, dass ein Internetbenuzter von Webseite $j$ einen
Link zur Webseite $i$ aufruft unter der “random surfer” Annahme. Daher
sei
$$
U_{ij} :=
    \begin{cases}
      \frac{A_{ij}}{s_j} & s_j \neq 0 \\
      A_{ij} & s_j = 0 \\
    \end{cases}
$$
mit der
$$
j\textnormal{-ten Spaltensumme }
    s_j := \sum_{i=1}^n A_{ij}
$$

</div>

<div class="bsp">

**Beispiel 1.5**. Zum Graph von
<a href="#bsp:graph" data-reference-type="ref"
data-reference="bsp:graph">1.1</a> ergibt sich
$$
\boldsymbol{U} =
    \begin{pmatrix}
      0 &        0        & 1 & 0        \\
      \tfrac12 & 0        & 0 & \tfrac12 \\
      \tfrac12 & \tfrac12 & 0 & \tfrac12 \\
      0 &        \tfrac12 & 0 & 0        \\
    \end{pmatrix}
    .
$$


</div>

Sofern jede Webseite mindestens einen Link enthält (d.h. keine
Nullspalte in $\boldsymbol{U}$), haben die Linkmatrizen aus
<a href="#def:linkmatrix" data-reference-type="ref"
data-reference="def:linkmatrix">1.4</a> eine besondere Eigenschaft.

<div id="def:column-stochastic" class="dfn">

**Definition 1.6** (Spaltenstochastische Matrix). Eine quadratische
Matrix heißt spaltenstochastisch wenn alle ihre Einträge nichtnegativ
sind und alle Spaltensummen $1$ sind.

</div>

<div class="bem">

**Bemerkung 1.7**. Man kann “dangling nodes” (Nullspalten in
$\boldsymbol{U}$) beheben indem man die entsprechende Spalte der Matrix
$\boldsymbol{U}$ mit dem Vektor $\boldsymbol{s} = {(1/n,\dots,1/n)}^T$
ersetzt. Diese Modifikation nehmen wir ab jetzt an un bezeichnen die
modifizierte Linkmatrix mit $\boldsymbol{\tilde{U}}$. Die Matrix
$\boldsymbol{\tilde{U}}$ ist dann immer spalten-stochastisch ist.

</div>

<div class="dfn">

**Definition 1.8**. Ein Vektor $\boldsymbol{x} \in \mathbb{R}^n$ heißt
Wahrscheinlichkeitsvektor wenn $x_i \ge 0$ für alle
$i \in \{1,\dots,n\}$ gilt und
${\|\boldsymbol{x}\|}_1 := \sum_{i=1}^n |x_i| = 1$.

</div>

Die Idee von Google war nun die Sortierung von Webseiten anhand der
Wahrscheinlichkeiten, dass ein zufälliger User die Webseite besucht.
Daher wird die folgende Dynamik simuliert.

<div class="dfn">

**Definition 1.9** (PageRank Algorithmus). Ausgehend von einem
Startwahrscheinlichkeitsvektor
$\boldsymbol{x}_0 \in \mathbb{R}^n, {\|\boldsymbol{x}_0\|}_1 = 1$,
simuliere die Verteilung nach $k$ Schritten anhand des folgenden
(Markov) Prozesses

<div id="eq:markov">

$$
    \boldsymbol{x}_{k+1} = \boldsymbol{\tilde{U}} \boldsymbol{x}_k
    .
$$

</div>

</div>

Die Wichtigkeit von Webseiten wird dann mit dem entsprechenden Eintrag
vom im *PageRank Vektor* gemessen, der als stationäre Verteilung des
Prozesses <a href="#eq:markov" data-reference-type="eqref"
data-reference="eq:markov">[eq:markov]</a> definiert ist.

<div class="dfn">

**Definition 1.10**. Wir nennen
$\boldsymbol{x}^* := \lim_{k \to \infty} \boldsymbol{x}_k$ unter dem
Prozess <a href="#eq:markov" data-reference-type="eqref"
data-reference="eq:markov">[eq:markov]</a> den PageRank Vektor.

</div>

<div class="bem">

**Bemerkung 1.11**. Sofern ein PageRank Vektor exisitert, gilt

$$
\boldsymbol{\tilde{U}} \boldsymbol{x}^*
    =
    \boldsymbol{\tilde{U}} \left( \lim_{k \to \infty} \boldsymbol{\tilde{U}}^k \boldsymbol{x}_0 \right)
    =
    \lim_{k \to \infty} \boldsymbol{\tilde{U}}^{k+1} \boldsymbol{x}_0
    =
    \boldsymbol{x}^*
$$
 sodass $\boldsymbol{x}^*$ ein Eigenvektor zum
Eigenwert $1$ ist.

</div>

Es stellen sich nun folgende Fragen:

1.  Existiert ein $\boldsymbol{x}^*$ überhaupt?

2.  Ist $\boldsymbol{x}^*$ ein Wahrscheinlichkeitsvektor?

3.  Ist $\boldsymbol{x}^*$ eindeutig?

4.  Konvergiert der Prozess immer zu einem $\boldsymbol{x}^*$?

Zur Existenz eines PageRank Vektor haben wir folgendes Lemma.

<div id="lem:eigenwert-eins" class="lem">

**Lemma 1.12**. Jede spaltenstochastische Matrix
$\tilde{\boldsymbol{U}}$ hat den Eigenwert $1$.

</div>

**Beweis:** Da $\tilde{\boldsymbol{U}}$ spaltenstochastisch ist, ist die
transponierte Matrix $\tilde{\boldsymbol{U}}^T$ zeilenstochastisch. Mit
dem Vektor $\boldsymbol{e} = {(1,\dots,1)}^T \in \mathbb{R}$ gilt daher

$$
\tilde{\boldsymbol{U}}^T \boldsymbol{e} = \boldsymbol{e} = 1 \boldsymbol{e}
    ,
$$
 und somit ist $1$ ein Eigenwert für $\tilde{\boldsymbol{U}}^T$
und somit auch für $\tilde{\boldsymbol{U}}$. $\square$

Sei nun
$V_1(\tilde{\boldsymbol{U}}) := \left\{ \boldsymbol{x} \in \mathbb{R}^n \ \middle|\ \boldsymbol{M} \boldsymbol{x} = \boldsymbol{x} \right\}$
der Eigenraum zum Eigenwert $1$. Für die Eindeutigkeit des Rankings,
möchten wir $\dim V_1(\tilde{U}) = 1$. Wir betrachten aber folgende
Beispiele:

<div class="bsp">

**Beispiel 1.13**.
$$
\boldsymbol{U}
    =
    \begin{pmatrix}
      0 & 1 & 0 & 0 & 0 \\
      1 & 0 & 0 & 0 & 0 \\
      0 & 0 & 0 & 1 & \frac{1}{2} \\
      0 & 0 & 1 & 0 & \frac{1}{2} \\
      0 & 0 & 0 & 0 & 0
    \end{pmatrix}
$$
 Hier ist $V_1(\boldsymbol{U})$ zweidimensional und
eine möglichen Basis von $V_1(\boldsymbol{U})$ (d.h. Eigenvektoren zum
Eigenwert $1$) ist gegeben durch $\boldsymbol{b}_1={(1/2,1/2,0,0,0)}^T$
und $\boldsymbol{b}_2={(0,0,1/2,1/2,0)}^T$ denn
$\boldsymbol{U} \boldsymbol{b}_1 = \boldsymbol{b}_1$ und
$\boldsymbol{U}_2 \boldsymbol{b}_2 = \boldsymbol{b}_2$. Aber auch jede
Linearkombination, z.B.,
$\tfrac34 \boldsymbol{b}_1 + \tfrac14 \boldsymbol{b}_2 \in V_1(\boldsymbol{U})$.
Dies ist nicht gut für ein eindeutiges Ranking. Außerdem konvergiert der
PageRank Algorithmus nicht für alle $\boldsymbol{x}_0$, denn mit
z.B. $\boldsymbol{x}_0 = {(1,0,0,0,0)}^T$ gilt

$$
\begin{aligned}
\boldsymbol{x}_1 = \boldsymbol{U} \boldsymbol{x}_0 = {(0,1,0,0,0)}^T
    ,\\
    \boldsymbol{x}_2 = \boldsymbol{U} \boldsymbol{x}_1 = {(1,0,0,0,0)}^T = \boldsymbol{x}_0
    ,\\
    \boldsymbol{x}_3 = \boldsymbol{x}_1
    ,\\
    \textnormal{usw.}
\end{aligned}
$$


</div>

Um all diese Probleme zu verhindern und alle vorherigen Fragen mit “ja”
zu beantworten, erfordert es noch eine Modifikation der Linkmatrix.

## Analyse der Google Matrix

<div class="dfn">

**Definition 1.14** (Google Matrix). Sei $m \in [0,1]$ und
$\boldsymbol{S} \in \mathbb{R}^{n \times n}$ die Matrix mit Einträgen
$S_{ij} =\tfrac{1}{n}$ für alle $1 \le i,j \le n$. Wir nennen die Matrix
$\boldsymbol{M} \in {[0,1]}^{n \times n}$ mit

$$
\boldsymbol{M} := (1-m) \tilde{\boldsymbol{U}} + m \boldsymbol{S}
$$

die Googlematrix.

</div>

<div class="bem">

**Bemerkung 1.15**.

1)  *Im ursprünglichen Artikel wurde $m=0.15$ benutzt.*

2)  *Für $m > 0$ ist die Matrix $\boldsymbol{M}$ positiv im folgenden
    Sinne.*

</div>

<div class="dfn">

**Definition 1.16** (Positivität von Matrizen). Eine Matrix ist
$\boldsymbol{M}$ ist positiv wenn $M_{ij} > 0$ für alle $i$ und $j$.

</div>

Für $m > 0$ wollen wir den nachfolgenden Satz für $\boldsymbol{M}$
beweisen, der die Grundlage des PageRank Algorithmus für
$\boldsymbol{M}$ bildet.

<div id="thm:haupt-resultat" class="sat">

**Satz 1.17**. Sei $\boldsymbol{M} \in \mathbb{R}^{n \times n}$ eine
positive, spaltenstochastische (PSS) Matrix. Dann ist
$V_1(\boldsymbol{M})$ eindimensional mit einem Eigenvektor
$\boldsymbol{x}^* \in V_1(\boldsymbol{M})$. Der Vektor
$\boldsymbol{x}^*$ ist stochastisch mit positiven Einträgen und lässt
sich berechnen durch

$$
\boldsymbol{x}^* = \lim_{k \to \infty} \boldsymbol{M}^k \boldsymbol{x}_0
$$

für beliebige positive $\boldsymbol{x}_0 \in \mathbb{R}^n$ mit
${\|\boldsymbol{x}_0\|}_1 = 1$.

</div>

Da $\boldsymbol{M}$ spaltenstochastisch ist, folgt mit
<a href="#lem:eigenwert-eins" data-reference-type="ref"
data-reference="lem:eigenwert-eins">1.12</a>, dass ein Eigenwert $1$
ist. Um zu zeigen, dass $\dim V_1(\boldsymbol{M}) = 1$ gilt, brauchen
wir:

<div id="lem:no-sign-change" class="lem">

**Lemma 1.18**. Sei $\boldsymbol{M} \in \mathbb{R}^{n \times n}$ eine
positive, spaltenstochastische (PSS) Matrix. Dann hat jeder Eigenvektor
$\boldsymbol{v} \in V_1(\boldsymbol{M})$ nur positive oder nur negative
Eigenträge.

</div>

**Beweis:** Wir konstruieren einen Widerspruch. Angenommen es existiert
ein $\boldsymbol{w} \in V_1(\boldsymbol{M})$ mit Einträgen
unterschiedlichen Vorzeichens. Dann folgt aus
$\boldsymbol{w} = \boldsymbol{M} \boldsymbol{w}$ dass

$$
w_i = \sum_{j=1}^n M_{ij} w_j
    .
$$
 Mit der Dreiecksungleichung gilt also:
$$
|w_i|
    =
    \left| \sum_{j=1}^n M_{ij} w_j \right|
    <
    M_{ij} \sum_{j=1}^n \left| w_j \right|
    ,
$$
 wobei diese Ungleichung strikt ist, da $\boldsymbol{M}$ positiv
ist, $\boldsymbol{w}$ unterschiedliche Vorzeichen hat und somit
mindestens ein Summand $M_{ij} w_j$ negativ ist. Summation über $i$ und
Vertauschen der Summen liefert:
$$
\begin{aligned}
\sum_{i=1}^n |w_i|
    &<
    \sum_{i=1}^n \sum_{j=1}^n M_{ij} \left| w_j \right|
    =
    \sum_{j=1}^n \left| w_j \right| \underbrace{\sum_{i=1}^n M_{ij}}_{=1}
    \\
    &=
    \sum_{j=1}^n \left| w_j \right|
    ,
\end{aligned}
$$
 was einen Widerspruch darstellt. $\square$

Für die Eindimensionalität von $V_1(\boldsymbol{M})$ brauchen wir noch:

<div id="lem:liner-kombination-mixed-sign" class="lem">

**Lemma 1.19**. Seien $\boldsymbol{v},\boldsymbol{w} \in \mathbb{R}^m$
für $m \ge 2$ linear unabhängig. Dann existieren zwei Zahlen,
$s,t \in \mathbb{R}$, sodass
$\boldsymbol{x} = s \boldsymbol{v} + t \boldsymbol{w}$ sowohl positive
als auch negative Einträge hat.

</div>

**Beweis:** Die lineare Unabhängigkeit impliziert dass
$\boldsymbol{v} \neq \boldsymbol{0}$ und
$\boldsymbol{w} \neq \boldsymbol{0}$. Sei $d = \sum_{i=1}^n v_i$ die
Summe der Einträge von $\boldsymbol{v}$.
**Fall 1: $d =0$.** Dann hat $\boldsymbol{v}$ Einträge mit
unterschiedlichem Vorzeichen und $s=1,t=0$ liefert die Behauptung.
**Fall 2: $d \neq 0$.** Dann definieren wir

$$
s = - \frac{\sum_{j=1}^n w_j}{d}
    ,\quad
    t = 1
    ,
$$
 und es folgt für
$\boldsymbol{x} = s \boldsymbol{v} + t \boldsymbol{w}$ dass

$$
\begin{aligned}
    \sum_{i=1}^n x_i
    &=
    \sum_{i=1}^n \left[ \left( - \frac{\sum_{j=1}^n w_j}{d} \right) v_i \right] + \sum_{i=1}^n w_i
    \\
    &=
    \left( - \frac{\sum_{j=1}^n w_j}{d} \right) \sum_{i=1}^n v_i + \sum_{i=1}^n w_i
    \\
    &=
    \left( - \sum_{j=1}^n w_j \right) \left( \underbrace{\frac{\sum_{i=1}^n v_i}{d}}_{=1} \right) + \sum_{i=1}^n w_i
    =
    0
    .
  \end{aligned}
$$
 Da $\boldsymbol{v},\boldsymbol{w}$ aber linear
unahnängig sind, ist $\boldsymbol{x} \neq \boldsymbol{0}$. Die Tatsache
dass $\sum_{i=1}^n x_i = 0$ impliziert somit dass $\boldsymbol{x}$
Einträge mit unterschiedlichen Vorzeichen haben muss. $\square$

Dieses Lemma nutzen wir für:

<div id="lem:eigenraum-eins-eindimensional" class="lem">

**Lemma 1.20**. Sei $\boldsymbol{M} \in \mathbb{R}^{n \times n}$ eine
PSS Matrix. Dann ist $V_1(\boldsymbol{M})$ eindimensional.

</div>

**Beweis:** Wir konstruieren wieder einen Widerspruch. Angenommen, es
existieren zwei linear unabhängige
$\boldsymbol{v},\boldsymbol{w} \in V_1(\boldsymbol{M})$. Für jede
Linearkombination mit $s,t$ beliebig gilt dann
$\boldsymbol{x} = s \boldsymbol{v} + t \boldsymbol{w} \in V_1(\boldsymbol{M})$
und $\boldsymbol{x}$ hat nach
<a href="#lem:no-sign-change" data-reference-type="ref"
data-reference="lem:no-sign-change">1.18</a> nur positive oder nur
negative Einträge. Durch
<a href="#lem:liner-kombination-mixed-sign" data-reference-type="ref"
data-reference="lem:liner-kombination-mixed-sign">1.19</a> wissen wir
aber, dass es eine Wahl von $s,t \in \mathbb{R}$ gibt, sodass
$\boldsymbol{x}$ sowohl positive als auch negative Einträge besitzt.
Dies ist ein Widerspruch und $V_1(\boldsymbol{M})$ muss daher
eindimensional sein. $\square$

## Analyse des PageRank Algorithmus

Wir haben also bereits gezeigt, dass für eine PSS Matrix der Eigenraum
zum Eigenwert $1$ eindimensional ist und der Eigenvektor nur Einträge
mit demselben Vorzeichen hat. Nun wollen wir zeigen, dass der PageRank
Algorithmus genau zu diesem Eigenvektor konvergiert. Dazu brauchen wir:

<div id="lem:unterraum" class="lem">

**Lemma 1.21**. Sei $\boldsymbol{M} \in \mathbb{R}^{n \times n}$ eine
PSS Matrix und $V \subset \mathbb{R}^n$ der Unterraum mit Vektoren
$\boldsymbol{v}$, die $\sum_{i=1}^n = 0$ erfüllen. Dann gilt für alle
$\boldsymbol{v} \in V$:
$$
\begin{aligned}
    \boldsymbol{M} \boldsymbol{v} &\in V
    ,
    \\
    {\|\boldsymbol{M} \boldsymbol{v}\|}_1 &\le c {\|\boldsymbol{v}\|}_1
    ,

\end{aligned}
$$
 wobei
$c = \max_{1 \le j \le n} | 1 - 2 \min_{1 \le i \le n} M_{ij} | < 1$
ist.

</div>

**Beweis:** Sei $\boldsymbol{v} \in V$ beliebig. Dann gilt für
$\boldsymbol{w} = \boldsymbol{M} \boldsymbol{v}$, dass
$w_i = \sum_{j=1}^n M_{ij} v_j$ und daher:
$$
\begin{aligned}
    \sum_{i=1}^n w_i
    &=
    \sum_{i=1}^n \sum_{j=1}^n M_{ij} v_j
    =
    \sum_{j=1}^n v_j \underbrace{\sum_{i=1}^n M_{ij}}_{=1}
    \\
    &=
    \sum_{j=1}^n v_j
    =
    0
    .
\end{aligned}
$$
 Somit ist $\boldsymbol{w} \in V$. Für die Normabschätzung
betrachten wir
$$
{\|\boldsymbol{w}\|}_1
    =
    \sum_{i=1}^n e_i w_i
    =
    \sum_{i=1}^n e_i \left( \sum_{j=1}^n M_{ij} v_j \right)
    ,
$$
 wobei $e_i = \mathop{\mathrm{sgn}}(w_i)$. Hier bemerken wir,
dass nicht alle $e_i$ dasselbe Vorzeichen haben können da
$\sum_{i=1} w_j = 0$ (außer für $\boldsymbol{w} = \boldsymbol{0}$, was
die Ungleichung direkt implizieren würde). Wir vertauschen die Summen
und erhalten
$$
{\|\boldsymbol{w}\|}_1
    =
    \sum_{j=1}^n v_j \left( \sum_{i=1}^n e_i M_{ij} \right)
    =
    \sum_{j=1}^n v_j a_j
$$
 wobei $a_j := \sum_{i=1}^n e_i M_{ij}$. Da
die $e_i$ gemischte Vorzeichen haben und $\sum_{i=1}^n M_{ij} = 1$ mit
$0 < M_{ij} < 1$ gilt folgende Abchätzung:
$$
-1
    <
    -1 + 2 \min_{1 \le i \le n} M_{ij}
    \le
    a_j
    \le 1 - 2 \min_{1 \le i \le n} M_{ij}
    <
    1
$$
 Die Abschätzung ist scharf denn im Extremfall hat $e_j$ nur beim
kleinsten Eintrag der $j$-ten Spalte ein anderes Vorzeichen (vergleiche
mit
${(1,1,-1)}^T \cdot {(0.7,0.2,0.1)}^T = 0.7 + 0.2 - 0.1 \le 1 - 2 \cdot 0.1$).
Damit ergibt sich
$$
|a_j|
    \le
    |1 - 2 \min_{1 \le i \le n} M_{ij}|
    <
    1
    .
$$
 Eine obere Schranke für $|a_j|$ ist somit durch das Maximum über
alle $j$ gegeben durch
$$
c :=
    \max_{1 \le j \le n} |\le 1 - 2 \min_{1 \le i \le n} M_{ij}|
    ,
$$
 sodass $|a_j| \le c < 1$ gilt für alle $j$. Letztlich folgt dann

$$
\begin{aligned}
{\|\boldsymbol{w}\|}_1
    &=
    \sum_{j=1}^n v_j a_j
    =
    \left| \sum_{j=1}^n v_j a_j \right|
    \le
    \sum_{j=1}^n |v_j| |a_j|
    \\
    &\le
    c \sum_{j=1}^n |v_j|
    =
    c \sum_{j=1}^n {\|\boldsymbol{v}\|}_1
    .
\end{aligned}
$$
 $\square$

Damit haben wir alles für:

**Beweis:** \[von
<a href="#thm:haupt-resultat" data-reference-type="ref"
data-reference="thm:haupt-resultat">1.17</a>\] Nach
<a href="#lem:eigenwert-eins" data-reference-type="ref"
data-reference="lem:eigenwert-eins">1.12</a> hat $\boldsymbol{M}$ einen
Eigenwert $1$, mit
<a href="#lem:eigenraum-eins-eindimensional" data-reference-type="ref"
data-reference="lem:eigenraum-eins-eindimensional">1.20</a> dass
$V_1(\boldsymbol{M})$ eindimensional ist und mit
<a href="#lem:no-sign-change" data-reference-type="ref"
data-reference="lem:no-sign-change">1.18</a> dass für alle
$\boldsymbol{v} \in V_1(\boldsymbol{M})$ kein Vorzeichenwechsel in den
Einträgen auftritt. Daher gibt es einen eindeutigen Vektor
$\boldsymbol{x}^* \in V_1(\boldsymbol{M})$ mit
$$
\sum_{i=1}^n x^*_i = 1
    .
$$
 Sei nun ein beliebiger positiver stochastischer Vektor
$\boldsymbol{x}_0$ mit ${\|\boldsymbol{x}_0\|} = 1$ gegeben. Diesen
schreiben wir (mit Quadrantenargument: Differenz von $\boldsymbol{x}_0$
und $\boldsymbol{x}^*$ muss auf der Hyperebene
$\langle \boldsymbol{x},{(1,\dots,1)}^T \rangle = 0$ liegen da beide
Vektoren positiv sind und somit im ersten Orthanten sind. Diese
Hyperebene ist parallel zur (${\|\boldsymbol{\cdot}\|}_1 =1$)-Isolinie
durch alle Basisvektoren $\boldsymbol{e}_i$. Somit ist die Differenz in
$V$) als $\boldsymbol{x}_0 = \boldsymbol{x}^* + \boldsymbol{v}$ mit
$\boldsymbol{v} \in V$ (mit $V$ aus
<a href="#lem:unterraum" data-reference-type="ref"
data-reference="lem:unterraum">1.21</a>). Wir berechnen dann
$\boldsymbol{M}^k \boldsymbol{x}_0 = \boldsymbol{M}^k \boldsymbol{x}^* + \boldsymbol{M}^k \boldsymbol{v} = \boldsymbol{x}^* + \boldsymbol{M}^k \boldsymbol{v}$.
Daher gilt (die Fehlergleichung)

<div id="eq:fehlergleichung">

$$
    \boldsymbol{M}^k \boldsymbol{x}_0 - \boldsymbol{x}^* = \boldsymbol{M}^k \boldsymbol{v}
    .
$$

</div>

 Unter Ausnutzung von
<a href="#lem:unterraum" data-reference-type="ref"
data-reference="lem:unterraum">1.21</a> kann mit vollständige Induktion
folgende Aussage gezeigt werden:

$$
\begin{aligned}
\textnormal{Für alle } k \textnormal{ gilt }
    \boldsymbol{M}^k \boldsymbol{v} \in V
    \\
    \textnormal{ sowie }
    {\|\boldsymbol{M}^k \boldsymbol{v}\|}_1 \le c^k {\|\boldsymbol{v}\|}_1
    \textnormal{ mit } 0 \le c < 1
    .
\end{aligned}
$$
 Somit erhalten wir
$\lim_{k \to \infty} c^k {\|\boldsymbol{v}\|}_1 = 0$ und mit dem
Einschnürungssatz folgt
$\lim_{k \to \infty} {\|\boldsymbol{M}^k \boldsymbol{v}\|}_1 = 0$. Aus
<a href="#eq:fehlergleichung" data-reference-type="ref"
data-reference="eq:fehlergleichung">[eq:fehlergleichung]</a> erhalten
wir dann letztlich die Konvergenz

$$
\lim_{k \to \infty} \boldsymbol{M}^k \boldsymbol{x}_0 = \boldsymbol{x}^*
    .
$$
 $\square$

Weiterführende Diskussionen finden sich, unter anderem, in (Bryan and
Leise 2006; Schönbrod 2015).

## Vektoriteration

Der PageRank Algorithmus ist eine spezielle Form der Vektoriteration
(en: *power iteration*), die durch wiederholtes Anwenden der Matrix und
Normierung des resultierenden Vektors irgendwann gegen den Eigenvektor
zum betragsmäßig größten Eigenwerts konvergiert.

## Referenzen

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-bryan200625" class="csl-entry">

Bryan, Kurt, and Tanya Leise. 2006. “The \$25,000,000,000 Eigenvector:
The Linear Algebra Behind Google.” *SIAM Review* 48 (3): 569–81.

</div>

<div id="ref-schoenbrod2015" class="csl-entry">

Schönbrod, Sarah. 2015. “Didaktisch-Methodische Ausarbeitung Eines
Lernmoduls Zum Thema Google Im Rahmen Eines Mathematischen
Modellierungstages Für Schülerinnen Und Schüler Der Sekundarstufe II.”
Bachelorarbeit, Aachen: RWTH Aachen University; RWTH Aachen University.

</div>

</div>
