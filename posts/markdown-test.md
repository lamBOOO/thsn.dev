---
title: "Preconditioner for lienar solvers (markdown test)"
date: '23/01/06'
---

# Preconditioner for linear solvers (markdown test)

When solving a system of equations
$$
  \boldsymbol{A} \boldsymbol{x} = \boldsymbol{b},
$$
iteratively (using, e.g., the [conjugate gradient method](https://en.wikipedia.org/wiki/Conjugate_gradient_method)), the convergene speed is usually determined by the condition number $\kappa(A)$, where
$$
\kappa := \frac{\lambda_{\max}(\boldsymbol{A})}{\lambda_{\min}(\boldsymbol{A})}
.
$$

Thus, if $\lambda_{\min}(\boldsymbol{A}) \propto \tfrac{1}{h^2}$, which happends for example when solving a Poison problem using a finite element approximation with meshsize $h$, iterative solvers have a very hard time to solve the system efficiently.

## Preconditioners

In order to archieve robustness w.r.t. $h$, one strategy is to apply preconditioning to the linear system. This means that instead of solving $\boldsymbol{A} \boldsymbol{x} = \boldsymbol{b}$, we now solve
$$
  \boldsymbol{M}^{-1} \boldsymbol{A} \boldsymbol{x} = \boldsymbol{M}^{-1} \boldsymbol{b}
  ,
$$
where $\boldsymbol{M}$ is a positive-definite matrix. This system has the same solution but we choose $\boldsymbol{M}$ in such a way, that the preconditioned system matrix has a $a$. Also $\boldsymbol{M}$ should be easy-to-compute.

Preconditoning is very important. Wikipedia, e.g., states for the CG method:

> In most cases, preconditioning is necessary to ensure fast convergence of the conjugate gradient method.

In the best case, one can show that the $\kappa(\boldsymbol{M}^{-1} \boldsymbol{A})$ is uniformly bounded in $h$, i.e.
$$
  \kappa(\boldsymbol{M}^{-1} \boldsymbol{A}) \le \mathsf{C}
  ,
$$
where the constant $\mathsf{C}$ is independent of $h$. In this case, we would have archieved full robustness w.r.t. $h$.
