"use client";

import Image from 'next/image'
import Link from 'next/link'

import Badge from '../components/badge'
import 'academicons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitlab, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons'
import { faBook, faBuildingColumns, faCode, faUser, faUsers, faClock, faArchive } from '@fortawesome/free-solid-svg-icons'

import logo_me from '../public/me.jpg'

import { scrollToIdNoUrlChange } from '../lib/scrolling';

const news_data = [
  {
    date: "2023-09-05",
    text: <>
      I gave a talk about <i>Publishing Reproducible Numerics: A Student's Perspective</i> at the RDM Workshop of the <Link href="https://www.sfb-s3.de/">SFB 1481: Sparsity and Singular Structures</Link> in Aachen. In the <Link href="/blog/publishing-reproducable-numerics">blogpost</Link>, you can find a summary and download the slides.
    </>,
  },
  {
    date: "2023-07-20",
    text: <>
      There's a chance to visit me in Stuttgart in the <Link href="https://moansi.wixsite.com/gamm/2023">MOANSI Annual Meeting 2023</Link> at 16-17 November 2023. Further information follow. <b>Save the date! 🚨🚨</b>
    </>,
  },
  {
    date: "2023-06-22",
    text: <>
      We had a great workshop in Augsburg about the <Link href="https://www.uni-augsburg.de/en/fakultaet/mntf/math/prof/numa/events/numanaschroedinger/">Numerical Analysis of Nonlinear Schrödinger Equations</Link> organized by the group of <Link href="https://www.uni-augsburg.de/de/fakultaet/mntf/math/prof/numa/team/peterseim/">Daniel Peterseim</Link>. I learned a lot from the talks of <Link href="https://www.uni-augsburg.de/de/fakultaet/mntf/math/prof/numa/team/tatjana-stykel/">Tatjana</Link>, <Link href="https://www.uni-augsburg.de/de/fakultaet/mntf/math/prof/numa/team/christoph-zimmer/">Christoph</Link>, <Link href="https://gaspardkemlin.frama.io/">Gaspard</Link>, <Link href="https://www.ians.uni-stuttgart.de/institute/team/Stamm/">Benjamin</Link>, <Link href="https://www.uni-augsburg.de/en/fakultaet/mntf/math/prof/mds/team/uschmajew/">André</Link>. Also, many thanks to <Link href="https://www.uni-augsburg.de/de/fakultaet/mntf/math/prof/numa/team/hauck/">Moritz</Link> for an SLOD intro and <Link href="https://www.uni-augsburg.de/de/fakultaet/mntf/math/prof/numa/team/jonas-pueschel/">Jonas</Link> for the nice city tour. 😄
    </>,
  },
  {
    date: "2023-06-07",
    text: <>
      End of june, I'll join the <Link href="https://numericalanalysisconference.org.uk/">Biennial Numerical Analysis Conference</Link> in Glasgow. Many thanks to <Link href="https://www.numerical.rl.ac.uk/people/h_aldaas/">Hussam</Link> and <Link href="https://giref.ulaval.ca/~fkwok/index_en.htm">Felix</Link> for organizing a mini about <i>Recent advances in multilevel, multiscale, and parallel in time methods</i>.
    </>,
  },
  {
    date: "2023-03-10",
    text: <>
      I had a short (but great 😍) visit to the <Link href="https://www.ljll.math.upmc.fr/?lang=fr">LJLL</Link> in Paris, where I had the chance to present my work in the EMC2 seminar series organized by <Link href="https://www.ljll.math.upmc.fr/hassan/">Hassan</Link> and <Link href="https://msdupuy.github.io">Mi-Song</Link>.
    </>,
  },
  {
    date: "2023-01-03",
    text: <>
      I will be present at the <Link href="https://www.siam.org/conferences/cm/conference/cse23">SIAM CSE23</Link> in Amsterdam, NL. I also plan to attent the <Link href="https://jahrestagung.gamm-ev.de/annual-meeting-2023">93rd annual GAMM meeting</Link> in Dresden, GER.
    </>,
  },
  {
    date: "2022-10-01",
    text: <>
      From Monday to Thursday, you can find me in Stuttgart. On Fridays, I'm usually in Aachen.
    </>,
  },
]

const publication_data = [
  {
    title: "A Scalable Two-Level Domain Decomposition Eigensolver for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains",
    issue: "Preprint",
    date: "11/2023",
    authors: [
      {
        me: true
      },
      {
        name: "Benjamin Stamm",
        link: "https://www.ians.uni-stuttgart.de/institute/team/Stamm/",
        me: false
      }
    ],
    abstract: "Accelerating iterative eigenvalue algorithms is often achieved by employing a spectral shifting strategy. Unfortunately, improved shifting typically leads to a smaller eigenvalue for the resulting shifted operator, which in turn results in a high condition number of the underlying solution matrix, posing a major challenge for iterative linear solvers. This paper introduces a two-level domain decomposition preconditioner that addresses this issue for the linear Schrödinger eigenvalue problem, even in the presence of a vanishing eigenvalue gap in non-uniform, expanding domains. Since the quasi-optimal shift, which is already available as the solution to a spectral cell problem, is required for the eigenvalue solver, it is logical to also use its associated eigenfunction as a generator to construct a coarse space. We analyze the resulting two-level additive Schwarz preconditioner and obtain a condition number bound that is independent of the domain's anisotropy, despite the need for only one basis function per subdomain for the coarse solver. Several numerical examples are presented to illustrate its flexibility and efficiency.",
    images: [
      {
        src: "/p3-1.jpg",
        alt: "Geomtry"
      },
      {
        src: "/p3-2.jpg",
        alt: "Factorization Coarse Space"
      },
      {
        src: "/p3-3.jpg",
        alt: "Domain decomposition"
      },
      {
        src: "/p3-4.jpg",
        alt: "Model description"
      },
      {
        src: "/p3-5.jpg",
        alt: "Converge Rates"
      },
      {
        src: "/p3-6.jpg",
        alt: "Chain of Particles"
      },
    ],
    keywords: [
      "Schrödinger equation",
      "iterative methods",
      "preconditioning",
      "domain decomposition",
      "coarse spaces",
      "finite element method"
    ],
    doi: "10.48550/arXiv.2311.08757",
    arxiv: "2311.08757",
    zenodo: "10.5281/zenodo.10121779"
  },
  {
    title: "A Quasi-Optimal Factorization Preconditioner for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains",
    issue: "SIAM Journal on Numerical Analysis Vol. 60, Iss. 5 (2022)",
    date: "09/2022",
    authors: [
      {
        name: "Benjamin Stamm",
        link: "https://www.ians.uni-stuttgart.de/institute/team/Stamm/",
        me: false
      },
      {
        me: true
      },
    ],
    abstract: "This paper provides a provably quasi-optimal preconditioning strategy of the linear Schrödinger eigenvalue problem with periodic potentials for a possibly nonuniform spatial expansion of the domain. The quasi-optimality is achieved by having the iterative eigenvalue algorithms converge in a constant number of iterations for different domain sizes. In the analysis, we derive an analytic factorization of the spectrum and asymptotically describe it using concepts from the homogenization theory. This decomposition allows us to express the eigenpair as an easy-to-calculate cell problem solution combined with an asymptotically vanishing remainder. We then prove that the easy-to-calculate limit eigenvalue can be used in a shift-and-invert preconditioning strategy to bound the number of eigensolver iterations uniformly. Several numerical examples illustrate the effectiveness of this quasi-optimal preconditioning strategy.",
    images: [
      {
        src: "/p2022_1.jpg",
        alt: "Factorization principle"
      },
      {
        src: "/p2022_2.jpg",
        alt: "Convergence of quasi-optimal shifting preconditioner"
      },
      {
        src: "/p2022_3.jpg",
        alt: "Simulation of union of disks domain and limit problem"
      }
    ],
    keywords: [
      "periodic Schrödinger equation",
      "iterative eigenvalue solvers",
      "preconditioner",
      "asymptotic eigenvalue analysis",
      "factorization principle",
      "directional homogenization"
    ],
    doi: "10.1137/21M1456005",
    arxiv: "2110.14982",
    zenodo: "10.5281/zenodo.6576197"
  },
  {
    title: "fenicsR13: A Tensorial Mixed Finite Element Solver for the Linear R13 Equations Using the FEniCS Computing Platform",
    issue: "ACM Trans. Math. Softw. 47, 2, Article 17 (April 2021)",
    date: "04/2021",
    authors: [
      {
        me: true
      },
      {
        name: "Manuel Torrilhon",
        link: "https://www.acom.rwth-aachen.de/5people/torrilhon/start",
        highlight: false
      },
    ],
    abstract: "We present a mixed finite element solver for the linearized regularized 13-moment equations of non-equilibrium gas dynamics. The Python implementation builds upon the software tools provided by the FEniCS computing platform. We describe a new tensorial approach utilizing the extension capabilities of FEniCS’ Unified Form Language to define required differential operators for tensors above second degree. The presented solver serves as an example for implementing tensorial variational formulations in FEniCS, for which the documentation and literature seem to be very sparse. Using the software abstraction levels provided by the Unified Form Language allows an almost one-to-one correspondence between the underlying mathematics and the resulting source code. Test cases support the correctness of the proposed method using validation with exact solutions. To justify the usage of extended gas flow models, we discuss typical application cases involving rarefaction effects. We provide the documented and validated solver publicly.",
    images: [
      {
        src: "/p2021_1.jpg",
        alt: "Simulation of the Knudsen pump test case"
      },
      {
        src: "/p2021_2.jpg",
        alt: "Convergence study of the fenicsR13 solver"
      },
      {
        src: "/p2021_3.jpg",
        alt: "Simulation of the thermal edge flow test case"
      }
    ],
    keywords: [
      "tensorial mixed finite element method",
      "R13 equations",
      "FEniCS project",
      "continuous interior penalty"
    ],
    doi: "10.1145/3442378",
    arxiv: "2007.05944",
    zenodo: "10.5281/zenodo.4172951"
  },
]

const teaching_data = [
  {
    "semester": "SS23",
    "title_de": "Schulmathematik vom höheren Standpunkt [50% der Vorlesung]",
    "title_en": "School mathematics from the higher perspective [50% of lecture]",
    "students": 20,
    "location": "University of Stuttgart",
    "people": [
      {
        name: "Prof. Benjamin Stamm",
        link: "https://www.ians.uni-stuttgart.de/institute/team/Stamm/"
      }
    ],
    "coursenotes": "https://thsn.dev/blog",
    "labcodes": "",
    "description": "We covered topics from the real life including: How does GPS work?; Why is the Netflix recommendation algorithm so good?; How to optimize solar plants?; What's the algorithm to detect traffic lights?; How is data compression done?; What was the idea of the initial PageRank algorithm by Google? We used the learning concept from CAMMP (https://www.cammp.online) in a workshop style and reflected the mathematical concepts from the higher perspective and how to embedded them in the mathematics class in the school ."
  },
  {
    "semester": "WS22",
    "title_de": "Höhere Mathematik 1 für Ingenieure [Vortragsübung]",
    "title_en": "Higher mathematics 1 for engineers [global exercise]",
    "students": 1000,
    "location": "University of Stuttgart",
    "people": [
      {
        name: "Prof. Markus Stroppel",
        link: "https://www.f08.uni-stuttgart.de/organisation/team/Stroppel/"
      }
    ],
    "coursenotes": "https://github.com/lamBOOO/teaching/tree/main/uni-stuttgart/ws22-nmh-hm1",
    "labcodes": "",
    "description": "Linear algebra is the study of the basic concepts and techniques involving vectors and matrices. The course topics include logic, numbers and sets; vectors and vector spaces; systems of linear equations; linear transformations and their properties; eigenvalues and eigenvectors. The course objectives are to develop students’ skills in reasoning, modeling and problem-solving with vectors and matrices."
  },
  {
    "semester": "SS22",
    "title_de": "Mathematische Aspekte in der computergestützten Chemie [Vortragsübung]",
    "title_en": "Mathematical aspects in computational chemistry [global exercise]",
    "students": 10,
    "location": "RWTH Aachen University",
    "people": [
      {
        name: "Prof. Benjamin Stamm",
        link: "https://www.ians.uni-stuttgart.de/institute/team/Stamm/"
      }
    ],
    "coursenotes": "https://github.com/lamBOOO/teaching/tree/main/rwth-aachen/ss22-acom-macc",
    "labcodes": "",
    "description": "This course explores the use of mathematical concepts in computational chemistry, specifically in creating and breaking down models of molecules. We will take a mathematical approach to theoretical chemistry, covering topics such as electric charge interactions between molecular systems, the transition from classical to quantum mechanics, the Hartree-Fock model, and its breakdown. If time allows, we will also examine some aspects of Density Functional Theory (DFT). By the end of the course, students will have a deep understanding of the mathematical principles underlying computational chemistry and will be able to apply these principles to their own research in the field."
  },
  {
    "semester": "WS21",
    "title_de": "Mathematische Grundlagen III (CES) [Vortragsübung]",
    "title_en": "Foundations of Mathematics III [global exercise]",
    "students": 70,
    "location": "RWTH Aachen University",
    "people": [
      {
        name: "Prof. Manuel Torrilhon",
        link: "https://www.acom.rwth-aachen.de/5people/torrilhon/start"
      },
      {
        name: "TT-Prof. Sebastian Krumscheid",
        link: "https://www.scc.kit.edu/personen/sebastian.krumscheid.php"
      },
    ],
    "coursenotes": "https://github.com/lamBOOO/teaching/tree/main/rwth-aachen/ws21-acom-math3/notes",
    "labcodes": "https://github.com/lamBOOO/teaching/tree/main/rwth-aachen/ws21-acom-math3/codes",
    "description": "This course introduces variational calculus, which is a branch of mathematics that deals with finding the best solution to a problem involving functions. It also teaches how to integrate functions in several variables and on different types of spaces, such as curves and surfaces. The course also covers numerical methods for solving ordinary differential equations, which are equations that relate a function and its derivatives. Moreover, the course explores optimization techniques for finding the minimum or maximum value of a function and eigenvalue computation methods for finding the characteristic values of a matrix. The course aims to help students acquire and apply these mathematical tools in various fields of science and engineering."
  },
  {
    "semester": "WS20",
    "title_de": "Mathematische Grundlagen III (CES) [Vortragsübung]",
    "title_en": "Foundations of Mathematics III [global exercise]",
    "students": 70,
    "location": "RWTH Aachen University",
    "people": [
      {
        name: "Prof. Benjamin Stamm",
        link: "https://www.ians.uni-stuttgart.de/institute/team/Stamm/"
      },
      {
        name: "Prof. Hakon Hoel",
        link: "https://www.mn.uio.no/math/english/people/aca/haakonah/index.html"
      },
    ],
    "coursenotes": "https://github.com/lamBOOO/teaching/tree/main/rwth-aachen/ws20-acom-math3/notes",
    "labcodes": "https://github.com/lamBOOO/teaching/tree/main/rwth-aachen/ws20-acom-math3/codes",
    "description": "This course introduces variational calculus, which is a branch of mathematics that deals with finding the best solution to a problem involving functions. It also teaches how to integrate functions in several variables and on different types of spaces, such as curves and surfaces. The course also covers numerical methods for solving ordinary differential equations, which are equations that relate a function and its derivatives. Moreover, the course explores optimization techniques for finding the minimum or maximum value of a function and eigenvalue computation methods for finding the characteristic values of a matrix. The course aims to help students acquire and apply these mathematical tools in various fields of science and engineering."
  },
  {
    "semester": "SS20",
    "title_de": "Mathematische Grundlagen IV (CES) [Vortragsübung]",
    "title_en": "Foundations of Mathematics IV [global exercise]",
    "students": 70,
    "location": "RWTH Aachen University",
    "people": [
      {
        name: "TT-Prof. Sebastian Krumscheid",
        link: "https://www.scc.kit.edu/personen/sebastian.krumscheid.php"
      },
      {
        name: "Prof. Benjamin Stamm",
        link: "https://www.ians.uni-stuttgart.de/institute/team/Stamm/"
      },
    ],
    "coursenotes": "https://github.com/lamBOOO/teaching/tree/main/rwth-aachen/ss20-mathcces-math4/notes",
    "labcodes": "https://github.com/lamBOOO/teaching/tree/main/rwth-aachen/ss20-mathcces-math4/codes",
    "description": "In this course, students will explore the theory and numerics of partial differential equations (PDEs), which are mathematical models of phenomena involving rates of change in multiple variables. The course will cover various aspects of PDEs, such as their classification by type and basic characteristics, their elementary solution methods for some classical examples, their generalization by using distributions and Sobolev spaces to define weak derivatives, their analysis by applying Fourier and other integral transformations to different domains, their discretization by finite difference methods on grids, and their numerical solution by efficient techniques such as FFT or filtering. The course will combine theoretical lectures with practical exercises using MATLAB or Julia."
  },
  {
    "semester": "WS19",
    "title_de": "Mathematische Grundlagen I (CES) [Vortragsübung]",
    "title_en": "Foundations of Mathematics I [global exercise]",
    "students": 70,
    "location": "RWTH Aachen University",
    "people": [
      {
        name: "TT-Prof. Sebastian Krumscheid",
        link: "https://www.scc.kit.edu/personen/sebastian.krumscheid.php"
      },
      {
        name: "Prof. Benjamin Stamm",
        link: "https://www.ians.uni-stuttgart.de/institute/team/Stamm/"
      },
    ],
    "coursenotes": "https://github.com/lamBOOO/teaching/tree/main/rwth-aachen/ws19-mathcces-math1",
    "labcodes": "",
    "description": "In this course, you will learn about various aspects of linear algebra and analysis of functions of several variables. You will explore how to solve eigenvalue problems and transform matrices into diagonal or normal forms. You will also learn how to use singular value decomposition, rank determination and regularization concepts. You will apply differentiation, Taylor expansion, inverse and implicit functions to analyze and optimize multivariable functions. You will use iterative methods such as Newton’s method or Gauss-Newton method to solve nonlinear systems of equations and least squares problems. You will understand how to interpolate data using polynomials and how to perform numerical differentiation and integration using Newton-Cotes formulas, Gauss quadrature and extrapolation. Finally, you will get an introduction to the theory of ordinary differential equations."
  },
  {
    "semester": "SS19",
    "title_de": "Mathematische Grundlagen IV (CES) [Tutor]",
    "title_en": "Foundations of Mathematics IV [tutor]",
    "students": 50,
    "location": "RWTH Aachen University",
    "people": [
      {
        name: "Prof. Manuel Torrilhon",
        link: "https://www.acom.rwth-aachen.de/5people/torrilhon/start"
      },
      {
        name: "Prof. Benjamin Berkels",
        link: "https://www.aices.rwth-aachen.de/en/people/berkels"
      },
      {
        name: "Dr. Jonas Bünger",
        link: "https://de.linkedin.com/in/jonas-b%C3%BCnger-1aab24109"
      },
      {
        name: "Dr. Mohen Sadr",
        link: "https://ch.linkedin.com/in/mohsensadr"
      },
    ],
    "coursenotes": "https://github.com/lamBOOO/teaching/tree/main/rwth-aachen/ss19-mathcces-math4",
    "labcodes": "",
    "description": "I executed the self exercise and supervised students in the course on partial differential equations (PDEs). I learned and applied the theory and numerics of PDEs, such as their types, characteristics, solutions, generalizations, analysis, discretization and numerical solution. I also helped the students understand and practice these concepts and methods using MATLAB or Julia."
  },
  {
    "semester": "WS18",
    "title_de": "Partielle Differentialgleichungen (CES) [Tutor]",
    "title_en": "Partial differential equations (CES) [tutor]",
    "students": 50,
    "location": "RWTH Aachen University",
    "people": [
      {
        name: "Prof. Sebastian Noelle",
        link: "https://www.igpm.rwth-aachen.de/team/noelle"
      },
      {
        name: "Dr. Muhammad Hassan",
        link: "https://www.ljll.math.upmc.fr/hassan/"
      },
      {
        name: "Dr. Mohen Sadr",
        link: "https://ch.linkedin.com/in/mohsensadr"
      },
    ],
    "coursenotes": "https://github.com/lamBOOO/teaching/blob/main/rwth-aachen/ws18-mathcces-math5",
    "labcodes": "",
    "description": "This course covers various aspects of the variational formulation for elliptic problems, such as the Galerkin technique and the Lax-Milgram theorem. It also introduces the finite element method for elliptic problems and some modern iterative methods, such as PCG and multigrid method. The course then extends to parabolic problems and shows how to use the method of lines for their discretization. It also presents the finite volume method as another discretization technique. The course then deals with saddle point problems and their application to Stokes equations. Finally, it discusses the Navier-Stokes equation for incompressible fluids. The main goals of this course are to help students understand the basic principles of discretizing partial differential equations and to teach them how to use different numerical methods for solving them. The students will also learn how to evaluate the results of these methods and how to adapt them to new tasks. The students will acquire confidence in using discretization techniques such as finite elements and finite volume methods, as well as iterative solution methods such as PCG and multigrid method."
  },
];

export default function Home({ allPostsData }: any) {
  return <>
    <div className="flex mb-4">
      <div className="flex-auto">
        <div className='flex justify-between'>
          <div>
            <h1 id="home" className="my-2 mb-0 text-4xl mt-0 scroll-mt-28">
              Lambert Theisen
            </h1>
            <p className='text-gray-500 text-xl font-bold m-0'>
              M.Sc.
            </p>
            <p className='leading-5 my-2'>
              → Computational Engineer, PhD Student, Digital Creator.
              <br></br>
              @ <Link href="https://www.rwth-aachen.de/">RWTH Aachen University</ Link> / <Link href="https://www.uni-stuttgart.de/">University of Stuttgart</Link>
            </p>
          </div>
          <div className="sm:hidden flex-none w-20 h-20 block ml-1">
            <Image
              className="flex-none rounded-full m-0"
              src={logo_me}
              alt="A picture of Lambert Theisen"
              sizes="80px"
            />
          </div>
        </div>

        <div className='leading-6'>
          <i><small>
            # Researching <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-amber-100 relative inline-block"><b className="relative">PDE eigenvalue problems</b></em>, <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-red-100 relative inline-block"><b className="relative">asymptotic analysis</b></em> of expanding domains, directional <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-teal-100 relative inline-block"><b className="relative">homogenization</b></em>, <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-orange-100 relative inline-block"><b className="relative">preconditioners</b></em> for <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-orange-100 relative inline-block"><b className="relative">eigenvalue algorithms</b></em>, <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-blue-100 relative inline-block"><b className="relative">preconditioners</b></em> for <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-blue-100 relative inline-block"><b className="relative">linear solvers</b></em>, <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-cyan-100 relative inline-block"><b className="relative">spectral coarse spaces</b></em> for <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-cyan-100 relative inline-block"><b className="relative">domain decomposition</b></em>, and <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-pink-100 relative inline-block"><b className="relative">Galerkin methods</b></em> for <em className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-pink-100 relative inline-block"><b className="relative">moment models</b></em> in rarefied gas modelling.
          </small></i>
        </div>
      </div>
      <Image
        className="flex-none rounded-full m-0 sm:w-1/5 sm:h-1/5 w-14 h-14 hidden sm:block ml-1"
        src={logo_me}
        alt="A picture of Lambert Theisen"
      />
    </div>
    <div className='flex flex-wrap items-center gap-3 border-b border-gray-100 pb-5'>
      <span className="text-3xl align-middle animate-waving-hand">👋</span>
      <button className="inline-block transform transition-all duration-100 hover:scale-105 text-white bg-gradient-to-br from-red-500 via-violet-500 to-teal-500 background-animate focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-md sm:px-5 px-2 py-2.5 text-center no-underline" onClick={() => scrollToIdNoUrlChange("contact", { behavior: "smooth" })}>
        <span className='font-extralight'>Say </span>
        <i className='font-extrabold'>Ei Gude, wie?</i>
        <span className='font-extralight'> [a​͜igud​ə​ʼwi​ː]</span>
      </button>
      <Link
        className="transform transition-all duration-100 hover:scale-105 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 via-violet-500 to-teal-500 background-animate hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 no-underline"
        href="#"
      >
        <button className="text-md relative sm:px-5 px-2 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0" onClick={() => print()}>
          <FontAwesomeIcon icon={faFile} /> CV
        </button>
      </Link>
    </div>

    <aside>
      <h2 id="news" className="scroll-mt-20">
        <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-amber-100 relative inline-block"><span className="relative">News</span></span>
      </h2>
      <span className='grid columns-1 gap-2 pl-0 leading-6'>
        {news_data.map(({ date, text } ,ind) => (
          <span className="pl-0" key={ind}>
            <b className='font-mono font-bold bg-gray-800 text-white p-0.5 text-sm'>{date}</b>
            {" "}
            {text}
          </span>
        ))}
      </span>
    </aside>

    <h2 id="blog" className="scroll-mt-20">
      <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-red-100 relative inline-block"><span className="relative">Blog</span></span>
    </h2>
    <span className='grid columns-1 gap-2 pl-0 leading-6'>
      {allPostsData.map(({ id, date, title }: any) => (
        <span className='' key={id}>
          <b className='font-mono font-bold bg-gray-800 text-white p-0.5 text-sm'>{date}</b>
          {" "}
          <Link className="" href={"/blog/" + id}>{title}</Link>
          {" "}
        </span>
      ))}
    </span>
    <div className='my-3'>
      <Link href="/blog" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
        See all →
      </Link>
    </div>

    <h2 id="research" className="scroll-mt-20">
      <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-teal-100 relative inline-block"><span className="relative">Research Interest & Projects</span></span>
    </h2>
    <h3>Journal Publications & Preprints</h3>

    {
      publication_data.map(
        ({ title, issue, date, authors, abstract, images, keywords, doi, arxiv, zenodo }, ind) =>
          <div key={ind} className="relative border flex flex-col justify-between h-full bg-white rounded-md p-4 my-4 shadow-md border-gray-200">
            <span className='leading-5 mb-2'>
              <span className='font-bold text-lg leading-4'>
                {title}
              </span>
              <br />
              <i className="text-xs">
                {issue}
              </i>
            </span>
            <div className='flex flex-wrap gap-2 leading-none my-1'>
              <Badge
                icon={<FontAwesomeIcon icon={faClock} />}
                right={date}
                lc="bg-slate-300"
                rc="bg-slate-200"
                textcolor="text-slate-900"
              />
              {
                authors.map(
                  ({ name, link, me }, ind) =>
                    me == true
                      ?
                      <Badge
                        key={ind}
                        icon={<FontAwesomeIcon icon={faUser} />}
                        right="Lambert Theisen"
                        lc="bg-cyan-300"
                        rc="bg-cyan-200"
                        textcolor="text-cyan-900"
                      />
                      :
                      <Badge
                        key={ind}
                        icon={<FontAwesomeIcon icon={faUser} />}
                        right={name}
                        link={link}
                        lc="bg-slate-300"
                        rc="bg-slate-200"
                        textcolor="text-slate-900"
                      />
                )
              }
            </div>
            <div>
              <figure className='float-right ml-2 my-2 border'>
                {
                  images.map(
                    ({ src, alt }, ind) =>
                      <Image
                        key={ind}
                        className="w-40 m-0"
                        src={src}
                        width={100}
                        height={10}
                        alt={alt}
                      />
                  )
                }
              </figure>
              <p className='text-xs leading-4 text-justify my-2'>
                {abstract}
              </p>

              <p className='text-xs text-gray-800 my-2'>Keywords:
                {" "}
                {keywords.join(", ")}
              </p>

              <div className="grid grid-cols-7">
                <div className="col-span-6 flex flex-wrap gap-2 leading-none my-1">
                  <Badge
                    link={"https://doi.org/" + doi}
                    icon={<span><i className="ai ai-doi"></i></span>}
                    left="DOI"
                    right={doi}
                    lc="bg-orange-300"
                    rc="bg-orange-200"
                    textcolor="text-orange-900"
                  />
                  <Badge
                    link={"https://arxiv.org/abs/" + arxiv}
                    icon={<span><i className="ai ai-arxiv"></i></span>}
                    left="arXiv"
                    right={arxiv}
                    lc="bg-lime-300"
                    rc="bg-lime-200"
                    textcolor="text-lime-900"
                  />
                  <Badge
                    link={"https://doi.org/" + zenodo}
                    icon={<FontAwesomeIcon icon={faCode} />}
                    left="Code"
                    right={zenodo}
                    lc="bg-violet-300"
                    rc="bg-violet-200"
                    textcolor="text-violet-900"
                  />
                </div>
                <span className="col-span-1 opacity-10 text-black italic justify-self-end self-end p-0 absolute bottom-2 right-3">
                  <span className='text-xl mr-1'>#</span><span className="text-5xl font-black">{publication_data.length - ind}</span>
                </span>
              </div>
            </div>
          </div>
      )
    }

    <h3>Talks</h3>
    <ul>
      <li>
        <b>Publishing Reproducible Numerics: A Student’s Perspective</b>, <Link href="https://www.sfb-s3.de/">RDM Workshop @ SFB 1481: Sparsity and Singular Structures</Link>, Aachen (Germany), 05 September, 2023.
      </li>
      <li>
        <b>A Two-Level Domain Decomposition Method for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains</b>, <Link href="https://numericalanalysisconference.org.uk/">29th Biennial Conference on Numerical Analysis</Link>, Glasgow (Scotland), 27 June, 2023.
      </li>
      <li>
        <b>A Two-Level Domain Decomposition Method for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains</b>, <Link href="https://www.uni-augsburg.de/en/fakultaet/mntf/math/prof/numa/events/numanaschroedinger/">Workshop on Numerical Analysis of Nonlinear Schrödinger Equations</Link>, Augsburg (Germany), 22 June, 2023.
      </li>
      <li>
        <b>Robust Solvers for the Schrödinger Eigenvalue Problem with Long-Range Inter- actions in Anisotropically Expanding Domains</b>, <Link href="https://jahrestagung.gamm-ev.de/annual-meeting-2023/93rd-annual-meeting/">GAMM 93rd AM. Modeling, analysis and simulation of molecular systems (S26)</Link>, Dresden (Germany), 01 June, 2023.
      </li>
      <li>
        <b>A Two-Level Domain Decomposition Method for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains</b>, <Link href="https://erc-emc2.eu/emc2-seminars/">EMC2 Seminar (ERC Synergy project - Extreme-scale Mathematically-based Computational Chemistry)</Link>, Paris (France), 10 March, 2023.
      </li>
      <li>
        <b>A Two-Level Domain Decomposition Method for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains</b>, <Link href="https://www.siam.org/conferences/cm/program/cse23">SIAM Conference on Computational Science and Engineering (CSE23)</Link>, Amsterdam (Netherlands), 28 February, 2023.
      </li>
      <li>
        <b>A Two-Level Domain Decomposition Method for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains</b>, <Link href="https://www.ians.uni-stuttgart.de/nmh/events/">IANS Oberseminar @ University of Stuttgart</Link>, Stuttgart (Germany), 24 November, 2022.
      </li>
      <li>
        <b>A Two-Level Domain Decomposition Method for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains</b>, <Link href="https://www.dd27.cz/">DD27: 7th International Domain Decomposition Conference – MS4: SCSs in DDMs and Multiscale Discretizations</Link>, Prague (Czech Republic), 27 July, 2022.
      </li>
      <li>
        <b>A Quasi-Optimal Factorization Preconditioner for Periodic Schrödinger Eigenstates in Non-Uniformly Expanding Domains</b>, <Link href="https://www.esco2022.femhub.com/">ESCO 2022: 8th European Seminar on Computing</Link>, Pilsen (Czech Republic), 14 June, 2022.
      </li>
      <li>
        <b>A Quasi-Optimal Factorization Preconditioner for Periodic Schrödinger Eigenstates in Non-Uniformly Expanding Domains</b>, <Link href="https://www.acom.rwth-aachen.de/4events/start">ACoM Lunch Seminar</Link>, RWTH Aachen, 7 June, 2022.
      </li>
      <li>
        <b>An Optimal Factorization Preconditioner for Periodic Schrödinger Eigenstates in Non-Uniformly Expanding Domains</b>, <Link href="https://www.acom.rwth-aachen.de/4events/start">ACoM Lunch Seminar</Link>, RWTH Aachen, 15 June, 2021.
      </li>
      <li>
        <b>Optimal Eigensolvers for Dirichlet Schrödinger Operators with Non-Negative Additively Separable Potentials in Long Domains</b>, <Link href="https://moansi.wixsite.com/gamm/2020">GAMM Activity Group: Modelling, Analysis and Simulation of Molecular Systems (MOANSI) Annual Meeting 2020</Link>, 24-25 September, 2020.
      </li>
      <li>
        <b>Optimal Eigensolvers for Dirichlet Schrödinger Operators with Non-Negative Additively Separable Potentials in Long Domains</b>, <Link href="https://www.mathcces.rwth-aachen.de/4events/start">MathCCES Lunch Seminar</Link>, RWTH Aachen, 30 June, 2020.
      </li>
      <li>
        <b>Simulation of Non-Equilibrium Gas Flows Using the FEniCS Computing Platform</b>, Master Thesis Defense, <Link href="https://www.mathcces.rwth-aachen.de/4events/start">MathCCES Lunch Seminar</Link>, RWTH Aachen, 15 October, 2019.
      </li>
      <li>
        <b>Shear-Slip Mesh Update Method for Compressible Flow Simulations Involving Rotating Sub-Domains</b>, <Link href="https://www.acom.rwth-aachen.de/3teaching/0classes/ceswseminar/start">CES Seminar Presentation</Link>, RWTH Aachen, 10 April, 2019.
      </li>
      <li>
        <b>Automated Boundary Layer Mesh Generation for Simulation of Convective Cooling</b>, Bachelor Thesis Defense, <Link href="https://www.mathcces.rwth-aachen.de/4events/start">MathCCES Lunch Seminar</Link>, RWTH Aachen, 10 April, 2018.
      </li>
    </ul>
    <p className='text-xs text-gray-500 leading-3'>[TODO Upload PDFs at uniform location, indicate invited and contributed talks, make first page as preview clickable.]</p>

    <h3>Software</h3>
    <ul>
      <li>
        <Link href="https://github.com/lamBOOO/DBPrices.jl">DBPrices.jl</Link>: A Julia wrapper for the <Link href="https://github.com/juliuste/db-prices">db-prices</Link> module from <Link href="https://github.com/juliuste">@juliuste</Link>.
      </li>
      <li>
        <Image
          className="h-14 m-0 w-auto inline-block"
          src="/logo_ddeigenlab.png"
          width={1}
          height={1}
          alt="3rd-order Lagrangian basis function on simplex #8"
          sizes="160px"
        /> <Link href="https://git.rwth-aachen.de/lamBOO/ddEigenLab.jl">ddEigenlab.jl</Link>: A Domain-Decomposition Eigenvalue Problem Lab to benchmark various algorithms.
      </li>
      <li>
        <Image
          className="h-14 m-0 w-auto inline-block fill"
          src="/sticker.png"
          width={1}
          height={1}
          alt="3rd-order Lagrangian basis function on simplex #8"
          sizes="160px"
        /> <Link href="https://git.rwth-aachen.de/lamBOO/fenicsR13">fenicsR13</Link>: A Tensorial Mixed Finite Element Solver for the Linear R13 Equations Using the FEniCS Computing Platform.
      </li>
      <li>
        <Link href="https://github.com/lamBOOO/latextools">latextools</Link>: Some scripts to process LaTeX documents. Contains a conversion script for LaTeX files into plaintext while keeping the mathematical sentence structure intact. For example, the input <code>Let $\begin&#123;equation&#125; h = \tfrac&#123;1&#125;&#123;N&#125; \end&#123;equation&#125;$ where $N$ denotes the number of intervals.</code> will be converted to <code>Let noun verbs noun where noun denotes the number of intervals.</code> (valid sentence).
      </li>
    </ul>

    <h3>Miscellaneous</h3>
    <ul>
      <li>
        Generate pictures of arbitrary-order Lagrangian finite element basis function with the Mathematica script from <Link href="https://doi.org/10.6084/m9.figshare.9767021.v1">10.6084/m9.figshare.9767021.v1</Link> (uploaded to figshare).
      </li>
    </ul>
    <div className="flex flex-wrap">
      <Image
        className="w-32 m-0"
        src="/p3-0.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #2"
        sizes="160px"
      />
      <Image
        className="w-32 m-0"
        src="/p3-1.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #2"
        sizes="160px"
      />
      <Image
        className="w-32 m-0"
        src="/p3-2.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #3"
        sizes="160px"
      />
      <Image
        className="w-32 m-0"
        src="/p3-3.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #4"
        sizes="160px"
      />
      <Image
        className="w-32 m-0"
        src="/p3-4.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #5"
        sizes="160px"
      />
      <Image
        className="w-32 m-0"
        src="/p3-5.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #6"
        sizes="160px"
      />
      <Image
        className="w-32 m-0"
        src="/p3-6.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #7"
        sizes="160px"
      />
      <Image
        className="w-32 m-0"
        src="/p3-7.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #8"
        sizes="160px"
      />
      <Image
        className="w-32 m-0"
        src="/p3-8.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #9"
        sizes="160px"
      />
      <Image
        className="w-32 m-0"
        src="/p3-9.png"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #10"
        sizes="160px"
      />
    </div>

    <h3>Theses and Supervised Work</h3>
    <ul>
      <li>
        <b>Density Operator in Eigenvalue Problems with Application in Manifold Interpolation</b>, Bachelor Thesis of <Link href="https://de.linkedin.com/in/stefan-berger-29b1a4210">Stefan Berger</Link>, RWTH Aachen, 2022.
      </li>
      <li>
        <b>Evaluation and Implementation of Schrödinger-Type Eigenvalue Problems in Long Rectangular Domains using the Finite Element Method</b>, CES Project Thesis of Corinna Müller, Matthias Geratz, Celine Heger, Johanna Meyer, RWTH Aachen, 2021.
      </li>
      <li>
        <b>Using a Spectral Inference Network to Solve the Time-Independent Schrödinger Equation for a Two-Dimensional Hydrogen Atom</b>, Seminar Thesis of Alexander Kristof, RWTH Aachen, 2020.
      </li>
      <li>
        <b>Iterative Domain Decomposition Methods for Eigenvalue Problems</b>, Master Thesis of Hendrik Borchardt, RWTH Aachen, 2020.
      </li>
      <li>
        <b>Simulation of Non-Equilibrium Gas Flows Using the FEniCS Computing Platform</b>, Master Thesis of Lambert Theisen, RWTH Aachen / MathCCES, 2020.
      </li>
      <li>
        <b>Shear-Slip Mesh Update Method for Compressible Flow Simulations Involving Rotating Sub-Domains</b>, Seminar Thesis of Lambert Theisen, RWTH Aachen / CATS, 2019.
      </li>
      <li>
        <b>Automated Boundary Layer Mesh Generation for Simulation of Convective Cooling</b>, Bachelor Thesis of Lambert Theisen, RWTH Aachen / ABB Switzerland, 2018.
      </li>
    </ul>
    <p className='text-xs text-gray-500 leading-3'>[TODO Link PDFs, think about where to host, checkout people and link them, upload own theses to RWTHPublications.]</p>

    <h2 id="teaching" className='scroll-mt-20'>
      <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-orange-100 relative inline-block"><span className="relative">Teaching</span></span>
    </h2>
    <p>
      You can find most of my teaching activity in the Github repository <Link href="https://github.com/lamBOOO/teaching">@lamBOOO/teaching</Link>.
    </p>
    <h3>Selected classes</h3>
    {
      teaching_data.map(
        ({ title_de, title_en, description, students, coursenotes, labcodes, location, semester, people }, ind) =>
          <div key={ind} className="relative border flex flex-col justify-between h-full bg-white rounded-md p-4 my-4 shadow-md border-gray-200">
            <span className='leading-5 mb-0'>
              <span className='font-bold text-lg leading-4'>
                {title_en}
              </span>
              <br />
              <i className="text-xs">
                {title_de}
              </i>
            </span>
            <div className='flex flex-wrap gap-2 leading-none my-2'>
              <Badge
                icon={<FontAwesomeIcon icon={faClock} />}
                right={semester}
                lc="bg-slate-300"
                rc="bg-slate-200"
                textcolor="text-slate-900"
              />
              <Badge
                icon={<FontAwesomeIcon icon={faUsers} />}
                right={students}
                lc="bg-slate-300"
                rc="bg-slate-200"
                textcolor="text-slate-900"
              />
              <Badge
                icon={<FontAwesomeIcon icon={faBuildingColumns} />}
                right={location}
                lc="bg-slate-300"
                rc="bg-slate-200"
                textcolor="text-slate-900"
              />
            </div>
            <div className="flex flex-wrap gap-2 leading-none">
              {
                people != undefined ?
                  people.map(
                    ({ name, link }, ind) =>
                      <Badge
                        icon={<FontAwesomeIcon icon={faUser} />}
                        link={link}
                        right={name}
                        lc="bg-sky-300"
                        rc="bg-sky-200"
                        textcolor="text-sky-900"
                        key={ind}
                      />
                  )
                  :
                  ""
              }
            </div>
            <div>
              <p className='font-normal text-xs leading-3 text-justify my-2 text-gray-500'>
                {description}
              </p>
              <div className="flex flex-wrap gap-2 leading-none">
                <Badge
                  link={coursenotes}
                  icon={<FontAwesomeIcon className="pr-1" icon={faBook} />}
                  left="Notes"
                  right="Link"
                  lc="bg-orange-300"
                  rc="bg-orange-200"
                  textcolor="text-orange-900"
                />
                {
                  labcodes != "" ?
                    <Badge
                      link={labcodes}
                      icon={<FontAwesomeIcon className="pr-1" icon={faBook} />}
                      left="Labcodes"
                      right="Link"
                      lc="bg-lime-300"
                      rc="bg-lime-200"
                      textcolor="text-lime-900"
                    />
                    :
                    ""
                }
              </div>
            </div>
            <div className="absolute right-3 bottom-2 text-5xl font-black text-black italic opacity-10">
              <span className='text-xl mr-1'>#</span>{teaching_data.length - ind}
            </div>
          </div>
      )
    }
    <p className='text-xs text-gray-500 leading-3'>[TODO: Add PDFs previews of notes]</p>

    <h2 id="projects" className="scroll-mt-20">
      <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-blue-100 relative inline-block"><span className="relative">Selected Projects</span></span>
    </h2>
    <ul>
      <li>
        <Image
          className="h-8 m-0 w-auto inline-block"
          src="/gradescaler_logo.png"
          width={1}
          height={1}
          alt="3rd-order Lagrangian basis function on simplex #8"
          sizes="160px"
        /> The tool <Link href="http://gradescaler.com">gradescaler.com</Link> provides a graphical overview of exam grading schemes.
      </li>
      <li>
        Use the <Link href="https://gitlab.com/lamBOO/shopping-list">shopping-list</Link> LaTeX template to create your 4x4 double-sided reusable shopping list for easy ticking of required products based on the supermarket location to optimize shopping. Here's an <Link href="https://gitlab.com/lamBOO/shopping-list/-/raw/master/shopping-list.pdf?inline=true">example</Link>.
      </li>
      <li>
        A while ago, I build the website <Link href="http://kanara-bau.de">kanara-bau.de</Link> without using any tech stack in the editor.
      </li>
    </ul>

    <h2 id="contact" className="scroll-mt-20 mb-5">
      <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-cyan-100 relative inline-block"><span className="relative">Contact</span></span>
    </h2>
    <h3>
      <FontAwesomeIcon className="pr-1" icon={faEnvelope} />
      E-Mail
    </h3>
    <p className='leading-6'>
      You can contact me directly via the e-mail address <Link href="mailto:lmbrt∂thsn.dev?subject=Ei gude, wie?&body=don't forget to integrate the e-mail address ;-)">lmbrt∂thsn.dev</Link> or <Link href="mailto:lambert.theisen∂rwth-aachen.de?subject=Ei gude, wie?&body=don't forget to integrate the e-mail address ;-)">lambert.theisen∂rwth-aachen.de</Link> preferrable using PGP encryption. My PGP key can be found on the keyserver <Link href="https://keys.openpgp.org/">keys.openpgp.org</Link> or you can directlty download it here using the link <Link href="/lt-pgpkey.asc">lt-pgpkey.asc</Link>. The corresponding signature reads 9C32 B2D9 E59B 09C1 72AB C577 F2C2 52C0 F331 EB87.
    </p>
    <h3>
      <Image
        className="h-6 m-0 w-auto inline-block"
        src="/matrix.svg"
        width={1}
        height={1}
        alt="3rd-order Lagrangian basis function on simplex #8"
      /> Protocol
    </h3>
    <p className='leading-6'>
      You can also contact me via the Matrix protocol, which is an open-source, end-to-end encrypted and decentralised messaging service. Simply hit <Link href="https://matrix.to/#/@lamboo:matrix.org">@lamboo:matrix.org</Link> and start texting me.
    </p>
    <h3>
      Profiles
    </h3>
    <p className='mb-1'>
      I am part of the major science and networking sites, for example:
    </p>
    <div className='flex flex-wrap gap-2 leading-3'>
      <Badge
        link="https://git.rwth-aachen.de/lamBOO"
        icon={<FontAwesomeIcon className="pr-1" icon={faGitlab} />}
        left="RWTH Gitlab"
        right="@lamBOO"
        lc="bg-orange-300"
        rc="bg-orange-200"
        textcolor="text-orange-900"
      />
      <Badge
        link="https://scholar.google.com/citations?user=ZD8cDyEAAAAJ"
        icon={<i className="ai ai-google-scholar" />}
        left="GScholar"
        right="ZD8cDyEAAAAJ"
        lc="bg-blue-300"
        rc="bg-blue-200"
        textcolor="text-blue-900"
      />
      <Badge
        link="https://github.com/lamBOOO"
        icon={<FontAwesomeIcon icon={faGithub} />}
        left="Github"
        right="@lamBOOO"
        lc="bg-gray-300"
        rc="bg-gray-200"
        textcolor="text-gray-900"
      />
      <Badge
        link="https://arxiv.org/a/theisen_l_1.html"
        icon={<i className="ai ai-arxiv" />}
        left="arXiv"
        right="theisen_l_1"
        lc="bg-red-300"
        rc="bg-red-200"
        textcolor="text-red-900"
      />
      <Badge
        link="https://orcid.org/0000-0001-5460-5425"
        icon={<i className="ai ai-orcid" />}
        left="ORCID"
        right="0000-0001-5460-5425"
        lc="bg-lime-300"
        rc="bg-lime-200"
        textcolor="text-lime-900"
      />
      <Badge
        link="https://mathscinet.ams.org/mathscinet/search/author.html?mrauthid=1439845"
        left="MathSciNet"
        right="1439845"
        lc="bg-orange-300"
        rc="bg-orange-200"
        textcolor="text-orange-900"
      />
      <Badge
        link="https://www.researchgate.net/profile/Lambert-Theisen"
        icon={<i className="ai ai-researchgate-square" />}
        left="ResearchGate"
        right="Lambert-Theisen"
        lc="bg-teal-300"
        rc="bg-teal-200"
        textcolor="text-teal-900"
      />
      <Badge
        link="https://www.linkedin.com/in/lambert-theisen-4027b3184/"
        icon={<FontAwesomeIcon icon={faLinkedin} />}
        left="LinkedIn"
        right="LINK"
        lc="bg-blue-300"
        rc="bg-blue-200"
        textcolor="text-blue-900"
      />
      <Badge
        link="https://twitter.com/LmbrtThsn"
        icon={<FontAwesomeIcon icon={faTwitter} />}
        left="Twitter"
        right="@LmbrtThsn"
        lc="bg-sky-300"
        rc="bg-sky-200"
        textcolor="text-sky-900"
      />
      <Badge
        link="https://www.semanticscholar.org/author/Lambert-Theisen/1811123350"
        icon={<i className="ai ai-semantic-scholar"></i>}
        left="SemanticScholar"
        right="LINK"
        lc="bg-slate-300"
        rc="bg-slate-200"
        textcolor="text-slate-900"
      />
      <Badge
        link="https://explore.openaire.eu/search/advanced/research-outcomes?f0=resultauthor&fv0=Lambert%2520Theisen&page=1&size=10&sortBy=&qf=false"
        left="OpenAIRE"
        right="LINK"
        lc="bg-indigo-300"
        rc="bg-indigo-200"
        textcolor="text-indigo-900"
      />
      <Badge
        link="https://core.ac.uk/search?q=author:(Lambert%20AND%20Theisen)&allOfTheWords=&exactPhrase=&atLeastOneOfTheWords=&withoutTheWords=&advAuthor=Lambert%20Theisen&publisher=&advRepository=&yearFrom=&yearTo=&findThoseWords=anywhere&doi="
        left="CORE"
        right="LINK"
        lc="bg-gray-300"
        rc="bg-gray-200"
        textcolor="text-gray-900"
      />
      <Badge
        link="https://figshare.com/authors/Lambert_Theisen/7342844"
        icon={<i className="ai ai-figshare"></i>}
        left="Figshare"
        right="LINK"
        lc="bg-slate-300"
        rc="bg-slate-200"
        textcolor="text-slate-900"
      />
      <Badge
        link="https://www.prophy.science/author/54631348/"
        left="Prophy"
        right="54631348"
        lc="bg-orange-300"
        rc="bg-orange-200"
        textcolor="text-orange-900"
      />
      <Badge
        link="https://zbmath.org/authors/?q=ai%3Atheisen.lambert"
        left="zbMATH"
        right="theisen.lambert"
        lc="bg-pink-300"
        rc="bg-pink-200"
        textcolor="text-pink-900"
      />
      <Badge
        link="https://www.scopus.com/authid/detail.uri?authorId=57219764798"
        icon={<i className="ai ai-scopus"></i>}
        left="Scopus"
        right="57219764798"
        lc="bg-orange-300"
        rc="bg-orange-200"
        textcolor="text-orange-900"
      />
      <Badge
        link="https://www.webofscience.com/wos/author/record/AAR-2324-2021"
        icon={<i className="ai ai-clarivate"></i>}
        left="Web of Science"
        right="AAR-2324-2021"
        lc="bg-violet-800"
        rc="bg-violet-700"
        textcolor="text-white"
      />
      <Badge
        link="https://dblp.org/pid/270/0289.html"
        icon={<i className="ai ai-dblp"></i>}
        left="dblp"
        right="270/0289"
        lc="bg-sky-700"
        rc="bg-yellow-400"
        textcolor="text-white"
      />
      <Badge
        link="https://scholar.archive.org/search?q=%22lambert+theisen%22"
        icon={<FontAwesomeIcon icon={faArchive} />}
        left="IA Scholar"
        right="LINK"
        lc="bg-gray-300"
        rc="bg-gray-200"
        textcolor="text-gray-900"
      />
      <Badge
        link="https://sciprofiles.com/profile/1727525"
        icon={<i className="ai ai-scopus"></i>}
        left="SciProfiles"
        right="1727525"
        lc="bg-teal-300"
        rc="bg-teal-200"
        textcolor="text-teal-900"
      />
      <Badge
        link="https://scite.ai/users/lambert-theisen-jOAj"
        left="scite_"
        right="lambert-theisen-jOAj"
        lc="bg-gray-300"
        rc="bg-gray-200"
        textcolor="text-gray-900"
      />
    </div>
    <p className='mb-1'>
      Also have a look at my institute webpages:
    </p>
    <div className='flex flex-wrap gap-2 leading-3'>
      <Badge
        link="https://www.ians.uni-stuttgart.de/institute/team/Theisen/"
        icon={<FontAwesomeIcon icon={faBuildingColumns} />}
        left="University of Stuttgart"
        right="NMH/IANS"
        lc="bg-gray-100"
        rc="bg-gray-50"
        textcolor="text-[#323232]"
      />
      <Badge
        link="https://www.acom.rwth-aachen.de/the-lab/team-people/name:lambert_theisen"
        icon={<FontAwesomeIcon icon={faBuildingColumns} />}
        left="RWTH Aachen"
        right="ACoM"
        lc="bg-[#00549f]"
        rc="bg-[#356997]"
        textcolor="text-white"
      />
      <Badge
        link="https://web.archive.org/web/20230205103143/https://www.acom.rwth-aachen.de/5people/theisen/start"
        icon={<FontAwesomeIcon icon={faBuildingColumns} />}
        left="RWTH Aachen"
        right="MathCCES (archived)"
        lc="bg-[#00549f]"
        rc="bg-[#356997]"
        textcolor="text-white"
      />
    </div>
    <h3>
      Impressum
    </h3>
    <p className='font-mono text-xs'>
      Applied and Computational Mathematics (ACoM)
      <br />
      RWTH Aachen University
      <br />
      Schinkelstr. 2, Room 229 (Rogowski Building, 2nd floor)
      <br />
      52062 Aachen
      <br />
      Germany
      <br />
      Office Phone: 0049 241 80-98671
      <br />
      Mobile Phone: 0049 241 80-98686
    </p>
    <p className='font-mono text-xs'>
      Institut für Angewandte Analysis und Numerische Simulation (IANS)
      <br />
      Lehrstuhl Numerische Mathematik für Höchstleistungsrechner (NMH)
      <br />
      Universität Stuttgart
      <br />
      Pfaffenwaldring 57, Raum 7.154
      <br />
      70569 Stuttgart
      <br />
      Germany
      <br />
      Office Phone: 0049 711 685 65522
      <br />
    </p>

    <p className='text-xs text-gray-500 leading-3'>[TODO Add small CV section with logos and timeline.] [TODO Add better email obfuscate strategy.]</p>

  </>;
}
