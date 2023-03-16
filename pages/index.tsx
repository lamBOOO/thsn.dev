import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Stickynavbar from '../components/Stickynavbar'
import Metadata from '../components/Metadata'
import Footer from '../components/Footer'
import Badge from '../components/Badge'

import 'academicons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons'
import { faBook, faBuilding, faBuildingColumns, faCode, faPerson, faUser, faUsers, faClock } from '@fortawesome/free-solid-svg-icons'

import logo_me from '../public/me.jpg'
import logo_me_large from '../public/me_large.jpg'
import gradescaler_logo from '../public/gradescaler_logo.png'

import p2021_1 from '../public/p2021_1.jpg'
import p2021_2 from '../public/p2021_2.jpg'
import p2021_3 from '../public/p2021_3.jpg'
import p2022_1 from '../public/p2022_1.jpg'
import p2022_2 from '../public/p2022_2.jpg'
import p2022_3 from '../public/p2022_3.jpg'

import { getSortedPostsData } from '../lib/posts';
import { scrollToIdNoUrlChange } from '../lib/scrolling';

const teaching_data = [
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  return (
    <>
      <div className='px-4'>
        <Metadata />
        <Stickynavbar />
        <main className='my-10'>
          <div className='prose mx-auto'>

            <section className=''>
              <div className="flex mb-4">
                <div className="flex-auto">
                  <div className='flex justify-between'>
                    <div>
                      <h1 id="home" className="my-2 mb-0 text-4xl mt-0 scroll-mt-28">
                        Lambert Theisen
                      </h1>
                      <span className='text-gray-500 text-xl font-bold'> M.Sc.</span>
                      <div className='leading-5 mb-2'>
                        → Computational Engineer, PhD Student, Digital Creator.
                        <br></br>
                        @ <Link href="https://www.rwth-aachen.de/">RWTH Aachen University</ Link> / <Link href="https://www.uni-stuttgart.de/">University of Stuttgart</Link>
                      </div>
                    </div>
                    <div className="sm:hidden flex-none w-20 h-20 block ml-1">
                      <Image
                        className="flex-none rounded-full m-0"
                        src={logo_me}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>

                  <div className='leading-6'>
                    <i><small>
                      # Researching <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-amber-100 relative inline-block"><span className="relative"><b>PDE eigenvalue problems</b></span></span>, <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-red-100 relative inline-block"><span className="relative"><b>asymptotic analysis</b></span></span> of expanding domains, directional <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-teal-100 relative inline-block"><span className="relative"><b>homogenization</b></span></span>, <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-orange-100 relative inline-block"><span className="relative"><b>preconditioners</b></span></span> for <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-orange-100 relative inline-block"><span className="relative"><b>eigenvalue algorithms</b></span></span>, <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-blue-100 relative inline-block"><span className="relative"><b>preconditioners</b></span></span> for <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-blue-100 relative inline-block"><span className="relative"><b>linear solvers</b></span></span>, <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-cyan-100 relative inline-block"><span className="relative"><b>spectral coarse spaces</b></span></span> for <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-cyan-100 relative inline-block"><span className="relative"><b>domain decomposition</b></span></span>, and <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-pink-100 relative inline-block"><span className="relative"><b>Galerkin methods</b></span></span> for <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-pink-100 relative inline-block"><span className="relative"><b>moment models</b></span></span> in rarefied gas modelling.
                    </small></i>
                  </div>
                </div>
                <div className="flex-none sm:w-1/5 sm:h-1/5 w-14 h-14 hidden sm:block ml-1">
                  <Image
                    className="flex-none rounded-full m-0"
                    src={logo_me}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className='flex flex-wrap items-center gap-3 border-b border-gray-100 pb-5'>
                <span className="text-3xl align-middle animate-waving-hand">👋</span>
                <button className="inline-block transform transition-all duration-100 hover:scale-105 text-white bg-gradient-to-br from-red-500 via-violet-500 to-teal-500 background-animate focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-md sm:px-5 px-2 py-2.5 text-center no-underline" onClick={() => scrollToIdNoUrlChange("contact", { behavior: "smooth" })}>
                  <span className='font-extralight'>Say </span>
                  <i className='font-extrabold'>Ei Gude, wie?</i>
                  <span className='font-extralight'> [a​͜igud​ə​ʼwi​ː]</span>
                </button>
                <Link className="transform transition-all duration-100 hover:scale-105 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 via-violet-500 to-teal-500 background-animate hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 no-underline" href="#">
                  <span className="text-md relative sm:px-5 px-2 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    <FontAwesomeIcon icon={faFile} /> CV <span className='sm:inline hidden'>(soon)</span>
                  </span>
                </Link>
              </div>
            </section>

            <aside>
              <h2 id="news" className="scroll-mt-20">
                <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-amber-100 relative inline-block"><span className="relative">News</span></span>
              </h2>
              <div className='grid columns-1 gap-2'>
                <span className='leading-6'>
                  <span className='font-mono font-bold bg-gray-900 text-white p-0.5 mr-3'>23/01/03</span>
                  I will be present at the <Link href="https://www.siam.org/conferences/cm/conference/cse23">SIAM CSE23</Link> in Amsterdam, NL. I also plan to attent the <Link href="https://jahrestagung.gamm-ev.de/annual-meeting-2023">93rd annual GAMM meeting</Link> in Dresden, GER.
                </span>
                <span>
                  <span className='font-mono font-bold bg-gray-900 text-white p-0.5 mr-3'>22/10/01</span>From Monday to Thursday, you can find me in Stuttgart. On Fridays, I'm usually in Aachen.
                </span>
              </div>
            </aside>

            <section>
              <h2 id="blog" className="scroll-mt-20">
                <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-red-100 relative inline-block"><span className="relative">Blog</span></span>
              </h2>
              <div className='grid columns-1 gap-2'>
                {allPostsData.map(({ id, date, title, longtitle }: any) => (
                  <span className='' key={id}>
                    <span className='font-mono font-bold bg-gray-900 text-white p-0.5 mr-3'>{date}</span>
                    <Link className="" href={"/blog/" + id}>{title}</Link>
                  </span>
                ))}
              </div>
              <div className='my-3'>
                <Link href="/blog" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  See all →
                </Link>
              </div>
            </section>

            <section>

              <article>
                <h2 id="research" className="scroll-mt-20">
                  <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-teal-100 relative inline-block"><span className="relative">Research Interest & Projects</span></span>
                </h2>
                <h3>Journal Publications</h3>
                <div className="border flex flex-col justify-between h-full bg-white rounded-md p-4 my-4 shadow-md border-gray-200">
                  <span className='leading-5 mb-2'>
                    <span className='font-bold text-lg leading-4'>
                      A Quasi-Optimal Factorization Preconditioner for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains
                    </span>
                    <br />
                    <i className="text-xs">
                      SIAM Journal on Numerical Analysis Vol. 60, Iss. 5 (2022)
                    </i>
                  </span>
                  <div className='m-0 flex flex-wrap gap-1 mb-1'>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                      <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                      09/2022
                    </span>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border-red-500">
                      <span className="pr-1"><FontAwesomeIcon icon={faPerson} /></span>
                      Lambert Theisen
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border-blue-500"><Link href="https://www.ians.uni-stuttgart.de/institute/team/Stamm/">
                      <span className="pr-1"><FontAwesomeIcon icon={faPerson} /></span>
                      Benjamin Stamm
                    </ Link></span>
                  </div>
                  <div>
                    <p className='font-norma text-xs leading-4 text-justify my-2'>
                      <span className='float-right  ml-1 mb-1 border'>
                        <Image
                          className="w-40 m-0"
                          src={p2022_1}
                          alt="Picture of the author"
                          sizes="160px"
                        />
                        <Image
                          className="w-40 m-0"
                          src={p2022_2}
                          alt="Picture of the author"
                          sizes="160px"
                        />
                        <Image
                          className="w-40 m-0"
                          src={p2022_3}
                          alt="Picture of the author"
                          sizes="160px"
                        />
                      </span>
                      This paper provides a provably quasi-optimal preconditioning strategy of the linear Schrödinger eigenvalue problem with periodic potentials for a possibly nonuniform spatial expansion of the domain. The quasi-optimality is achieved by having the iterative eigenvalue algorithms converge in a constant number of iterations for different domain sizes. In the analysis, we derive an analytic factorization of the spectrum and asymptotically describe it using concepts from the homogenization theory. This decomposition allows us to express the eigenpair as an easy-to-calculate cell problem solution combined with an asymptotically vanishing remainder. We then prove that the easy-to-calculate limit eigenvalue can be used in a shift-and-invert preconditioning strategy to bound the number of eigensolver iterations uniformly. Several numerical examples illustrate the effectiveness of this quasi-optimal preconditioning strategy.
                    </p>
                    <div>
                    </div>

                    <div className='text-sm mb-2'>
                      <span className='text-xs'>Keywords: </span>
                      {
                        [
                          "periodic Schrödinger equation",
                          "iterative eigenvalue solvers",
                          "preconditioner",
                          "asymptotic eigenvalue analysis",
                          "factorization principle",
                          "directional homogenization"
                        ].map(
                          (a, b) =>
                            (<span className="bg-gray-50 text-gray-800 text-xs font-medium mr-1 py-0 rounded-sm" key={b}># {a}</span>)
                        )
                      }
                    </div>
                    <div className='flex flex-wrap gap-1 leading-none my-2'>

                      <Link href="https://doi.org/10.1137/21M1456005">
                        <span className="border-gray-500 hover:border-black">
                          <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-gray-300 text-gray-800 font-bold'>
                            <span className="pr-1"><i className="ai ai-doi"></i></span>
                            DOI
                          </span>
                          <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-gray-200 text-gray-800 font-mono'>10.1137/21M1456005</span>
                        </span>
                      </Link>
                      <Link className="m-0" href="https://arxiv.org/abs/2110.14982">
                        <span className="border-gray-500 hover:border-black">
                          <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-red-300 text-red-800 font-bold '>
                            <span className="pr-1"><i className="ai ai-arxiv"></i></span>
                            arXiv
                          </span>
                          <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-red-200 text-red-800 font-mono decoration-red-700'>2110.14982</span>
                        </span>
                      </Link>
                      <Link href="https://doi.org/10.5281/zenodo.6576197">
                        <span className="border-gray-500 hover:border-black">
                          <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-blue-300 text-blue-800 font-bold'>
                            <span className="pr-1"><i className="ai ai-zenodo"></i></span>
                            Code
                          </span>
                          <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-blue-200 text-blue-800 font-mono'>10.5281/zenodo.6576197</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="border flex flex-col justify-between h-full bg-white rounded-md p-4 my-4 shadow-md border-gray-200">
                  <span className='leading-5 mb-2'>
                    <span className='font-bold text-lg leading-4'>
                      fenicsR13: A Tensorial Mixed Finite Element Solver for theLinear R13 Equations Using the FEniCS Computing Platform
                    </span>
                    <br />
                    <i className="text-xs">
                      ACM Trans. Math. Softw. 47, 2, Article 17 (April 2021)
                    </i>
                  </span>
                  <div className='m-0 flex flex-wrap gap-1 mb-1'>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                      <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                      04/2021
                    </span>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border-red-500">
                      <span className="pr-1"><FontAwesomeIcon icon={faPerson} /></span>
                      Lambert Theisen
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border-blue-500"><Link href="https://www.acom.rwth-aachen.de/5people/torrilhon/start">
                      <span className="pr-1"><FontAwesomeIcon icon={faPerson} /></span>
                      Manuel Torrilhon
                    </ Link></span>
                  </div>
                  <div>
                    <p className='font-norma text-xs leading-4 text-justify my-2'>
                      <span className='float-right ml-1 mb-1 border'>
                        <Image
                          className="w-40 m-0"
                          src={p2021_1}
                          alt="Picture of the author"
                          sizes="160px"
                        />
                        <Image
                          className="w-40 m-0"
                          src={p2021_2}
                          alt="Picture of the author"
                          sizes="160px"
                        />
                        <Image
                          className="w-40 m-0"
                          src={p2021_3}
                          alt="Picture of the author"
                          sizes="160px"
                        />
                      </span>
                      We present a mixed finite element solver for the linearized regularized 13-moment equations of non-equilibrium gas dynamics. The Python implementation builds upon the software tools provided by the FEniCS computing platform. We describe a new tensorial approach utilizing the extension capabilities of FEniCS’ Unified Form Language to define required differential operators for tensors above second degree. The presented solver serves as an example for implementing tensorial variational formulations in FEniCS, for which the documentation and literature seem to be very sparse. Using the software abstraction levels provided by the Unified Form Language allows an almost one-to-one correspondence between the underlying mathematics and the resulting source code. Test cases support the correctness of the proposed method using validation with exact solutions. To justify the usage of extended gas flow models, we discuss typical application cases involving rarefaction effects. We provide the documented and validated solver publicly.
                    </p>
                    <div>
                    </div>

                    <div className='text-sm mb-2'>
                      <span className='text-xs'>Keywords: </span>
                      {
                        [
                          "tensorial mixed finite element method",
                          "R13 equations",
                          "FEniCS project",
                          "continuous interior penalty"
                        ].map(
                          (a, b) =>
                            (<span className="bg-gray-50 text-gray-800 text-xs font-medium mr-1 py-0 rounded-sm" key={b}># {a}</span>)
                        )
                      }
                    </div>

                    <div className='flex flex-wrap gap-1 leading-none my-2'>

                      <Link href="https://doi.org/10.1145/3442378">
                        <span className="border-gray-500 hover:border-black">
                          <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-gray-300 text-gray-800 font-bold'>
                            <span className="pr-1"><i className="ai ai-doi"></i></span>
                            DOI
                          </span>
                          <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-gray-200 text-gray-800 font-mono'>10.1145/3442378</span>
                        </span>
                      </Link>
                      <Link className="m-0" href="https://arxiv.org/abs/2007.05944">
                        <span className="border-gray-500 hover:border-black">
                          <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-red-300 text-red-800 font-bold '>
                            <span className="pr-1"><i className="ai ai-arxiv"></i></span>
                            arXiv
                          </span>
                          <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-red-200 text-red-800 font-mono decoration-red-700'>2007.05944</span>
                        </span>
                      </Link>
                      <Link href="https://doi.org/10.5281/zenodo.4172951">
                        <span className="border-gray-500 hover:border-black">
                          <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-blue-300 text-blue-800 font-bold'>
                            <span className="pr-1"><i className="ai ai-zenodo"></i></span>
                            Code
                          </span>
                          <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-blue-200 text-blue-800 font-mono'>10.5281/zenodo.4172951</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              <article>
                <h3>Talks</h3>
                <p>
                  <span className='text-xs text-gray-400'>[TODO Add all talks from ACOM website.]</span>
                </p>
              </article>

              <article>
                <h3>Software</h3>
                <p>
                  <span className='text-xs text-gray-400'>[TODO Add fenicsR13, ddEigenlab, ....]</span>
                </p>
              </article>

              <article>
                <h3>Miscellaneous</h3>
                <p>
                  <span className='text-xs text-gray-400'>[TODO Add P3 FEM script, ...]</span>
                </p>
              </article>

              <article>
                <h3>Theses</h3>
                <p>
                  <span className='text-xs text-gray-400'>[TODO Add supervised work from ACOM website.]</span>
                </p>
              </article>

            </section>

            <section>
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
                    <article key={ind}>
                      <div className="relative border flex flex-col justify-between h-full bg-white rounded-md p-4 my-4 shadow-md border-gray-200">
                        <span className='leading-5 mb-0'>
                          <span className='font-bold text-lg leading-4'>
                            {title_de}
                          </span>
                          <br />
                          <i className="text-xs">
                            ({title_en})
                          </i>
                        </span>
                        <div className='flex flex-wrap gap-1 leading-none my-1'>
                          <Badge
                            icon={<FontAwesomeIcon icon={faClock} />}
                            // left=""
                            right={semester}
                            lc="bg-slate-300"
                            rc="bg-slate-200"
                            textcolor="text-slate-800"
                          />
                          <Badge
                            icon={<FontAwesomeIcon icon={faUsers} />}
                            left=""
                            right={students}
                            lc="bg-slate-300"
                            rc="bg-slate-200"
                            textcolor="text-slate-800"
                          />
                          <Badge
                            icon={<FontAwesomeIcon icon={faBuildingColumns} />}
                            left=""
                            right={location}
                            lc="bg-slate-300"
                            rc="bg-slate-200"
                            textcolor="text-slate-800"
                          />
                        </div>
                        <div className="flex flex-wrap gap-1 leading-none">
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
                                    textcolor="text-sky-800"
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
                          <div className="flex flex-wrap gap-1 leading-none">
                            <Badge
                              link={coursenotes}
                              icon={<FontAwesomeIcon className="pr-1" icon={faBook} />}
                              left="Notes"
                              right="Link"
                              lc="bg-orange-300"
                              rc="bg-orange-200"
                              textcolor="text-orange-800"
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
                                  textcolor="text-lime-800"
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
                    </article>
                )
              }
              <span className='text-xs text-gray-400'>[TODO: Add PDFs previews of notes]</span>
            </section>

            <section>
              <h2 id="projects" className="scroll-mt-20">
                <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-blue-100 relative inline-block"><span className="relative">Selected Projects</span></span>
              </h2>
              <p>
                The tool <Link href="http://gradescaler.com">gradescaler.com</Link> provides a graphical overveiw of exam grading schemes.
                <span className='text-xs text-gray-400'>[TODO: Add grammarly script, latex templates, check Git repos, ...]</span>
              </p>
            </section>

            <section>
              <h2 id="contact" className="scroll-mt-20 mb-5">
                <span className="before:block before:absolute before:-inset-2 before:-skew-y-1 before:bg-cyan-100 relative inline-block"><span className="relative">Contact</span></span>
              </h2>
              <h3>
                E-Mail
              </h3>
              <p className='leading-6'>
                You can contact me directly via the e-mail address <span className='whitespace-pre'><Badge
                  link="mailto:lmbrt∂thsn.dev?subject=Ei gude, wie?&body=don't forget to integrate the e-mail address ;-)"
                  icon={<FontAwesomeIcon className="pr-1" icon={faEnvelope} />}
                  left="Mail"
                  right="lmbrt∂thsn.dev"
                  lc="bg-gray-900"
                  rc="bg-gray-700"
                  textcolor="text-white"
                /></span> or <span className='whitespace-pre'><Badge
                  link="mailto:lambert.theisen∂rwth-aachen.de?subject=Ei gude, wie?&body=don't forget to integrate the e-mail address ;-)"
                  icon={<FontAwesomeIcon className="pr-1" icon={faEnvelope} />}
                  left="Mail"
                  right="lambert.theisen∂rwth-aachen.de"
                  lc="bg-gray-900"
                  rc="bg-gray-700"
                  textcolor="text-white"
                /></span> preferrable using PGP encryption. My PGP key can be found on the keyserver <Link href="https://keys.openpgp.org/">keys.openpgp.org</Link> or you can directlty download it here using the link <Link href="/lt-pgpkey.asc">lt-pgpkey.asc</Link>. The corresponding sigature reads <span className='bg-gray-700 text-white font-mono p-px'>
                  9C32 B2D9 E59B 09C1 72AB C577 F2C2 52C0 F331 EB87
                </span>
                .
              </p>
              <h3>
                Profiles
              </h3>
              <p className='mb-1'>
                I am part of the major science and networking sites, for example:
              </p>
              <div className='flex flex-wrap gap-1 leading-3'>
                <Badge
                  link="https://git.rwth-aachen.de/lamBOO"
                  icon={<FontAwesomeIcon className="pr-1" icon={faGitlab} />}
                  left="RWTH Gitlab"
                  right="@lamBOO"
                  lc="bg-orange-300"
                  rc="bg-orange-200"
                  textcolor="text-orange-800"
                />
                <Badge
                  link="https://scholar.google.com/citations?user=ZD8cDyEAAAAJ"
                  icon={<i className="ai ai-google-scholar" />}
                  left="GScholar"
                  right="LINK"
                  lc="bg-blue-300"
                  rc="bg-blue-200"
                  textcolor="text-blue-800"
                />
                <Badge
                  link="https://github.com/lamBOOO"
                  icon={<FontAwesomeIcon icon={faGithub} />}
                  left="Github"
                  right="@lamBOOO"
                  lc="bg-gray-300"
                  rc="bg-gray-200"
                  textcolor="text-gray-800"
                />
                <Badge
                  link="https://arxiv.org/a/theisen_l_1.html"
                  icon={<i className="ai ai-arxiv" />}
                  left="arXiv"
                  right="theisen_l_1"
                  lc="bg-red-300"
                  rc="bg-red-200"
                  textcolor="text-red-800"
                />
                <Badge
                  link="https://orcid.org/0000-0001-5460-5425"
                  icon={<i className="ai ai-orcid" />}
                  left="ORCID"
                  right="0000-0001-5460-5425"
                  lc="bg-lime-300"
                  rc="bg-lime-200"
                  textcolor="text-lime-800"
                />
                <Badge
                  link="https://www.researchgate.net/profile/Lambert-Theisen"
                  icon={<i className="ai ai-researchgate-square" />}
                  left="ResearchGate"
                  right="Lambert-Theisen"
                  lc="bg-teal-300"
                  rc="bg-teal-200"
                  textcolor="text-teal-800"
                />
                <Badge
                  link="https://www.linkedin.com/in/lambert-theisen-4027b3184/"
                  icon={<FontAwesomeIcon icon={faLinkedin} />}
                  left="LinkedIn"
                  right="LINK"
                  lc="bg-blue-300"
                  rc="bg-blue-200"
                  textcolor="text-blue-800"
                />
                <Badge
                  link="https://www.semanticscholar.org/author/Lambert-Theisen/1811123350"
                  icon={<i className="ai ai-semantic-scholar"></i>}
                  left="SemanticScholar"
                  right="LINK"
                  lc="bg-slate-300"
                  rc="bg-slate-200"
                  textcolor="text-slate-800"
                />
                <Badge
                  link="https://explore.openaire.eu/search/advanced/research-outcomes?f0=resultauthor&fv0=Lambert%2520Theisen&page=1&size=10&sortBy=&qf=false"
                  left="OpenAIRE"
                  right="LINK"
                  lc="bg-indigo-300"
                  rc="bg-indigo-200"
                  textcolor="text-indigo-800"
                />
                <Badge
                  link="https://core.ac.uk/search?q=author:(Lambert%20AND%20Theisen)&allOfTheWords=&exactPhrase=&atLeastOneOfTheWords=&withoutTheWords=&advAuthor=Lambert%20Theisen&publisher=&advRepository=&yearFrom=&yearTo=&findThoseWords=anywhere&doi="
                  left="CORE"
                  right="LINK"
                  lc="bg-gray-300"
                  rc="bg-gray-200"
                  textcolor="text-gray-800"
                />
                <Badge
                  link="https://figshare.com/authors/Lambert_Theisen/7342844"
                  icon={<i className="ai ai-figshare"></i>}
                  left="Figshare"
                  right="LINK"
                  lc="bg-slate-300"
                  rc="bg-slate-200"
                  textcolor="text-slate-800"
                />
                <Badge
                  link="https://www.prophy.science/author/54631348/"
                  left="Prophy"
                  right="54631348"
                  lc="bg-orange-300"
                  rc="bg-orange-200"
                  textcolor="text-orange-800"
                />
                <Badge
                  link="https://zbmath.org/authors/?q=ai%3Atheisen.lambert"
                  left="zbMATH"
                  right="theisen.lambert"
                  lc="bg-pink-300"
                  rc="bg-pink-200"
                  textcolor="text-pink-800"
                />
                <Badge
                  link="https://mathscinet.ams.org/mathscinet/search/author.html?mrauthid=1439845"
                  left="MathSciNet"
                  right="1439845"
                  lc="bg-orange-300"
                  rc="bg-orange-200"
                  textcolor="text-orange-800"
                />
                <Badge
                  link="https://www.scopus.com/authid/detail.uri?authorId=57219764798"
                  icon={<i className="ai ai-scopus"></i>}
                  left="Scopus"
                  right="57219764798"
                  lc="bg-orange-300"
                  rc="bg-orange-200"
                  textcolor="text-orange-800"
                />
                <Badge
                  link="https://sciprofiles.com/profile/1727525"
                  icon={<i className="ai ai-scopus"></i>}
                  left="SciProfiles"
                  right="1727525"
                  lc="bg-teal-300"
                  rc="bg-teal-200"
                  textcolor="text-teal-800"
                />
                <Badge
                  link="https://scite.ai/users/lambert-theisen-jOAj"
                  left="scite_"
                  right="lambert-theisen-jOAj"
                  lc="bg-gray-300"
                  rc="bg-gray-200"
                  textcolor="text-gray-800"
                />
              </div>
              <p className='mb-1'>
                Also have a look at my institute webpages:
              </p>
              <div className='flex flex-wrap gap-1 leading-3'>
                <Badge
                  link="https://www.acom.rwth-aachen.de/5people/theisen/start"
                  icon={<FontAwesomeIcon icon={faBuildingColumns} />}
                  left="ACoM @ RWTH Aachen"
                  right="LINK"
                  lc="bg-[#00549f]"
                  rc="bg-[#407fb7]"
                  textcolor="text-white"
                />
                <Badge
                  link="https://www.ians.uni-stuttgart.de/institute/team/Theisen/"
                  icon={<FontAwesomeIcon icon={faBuildingColumns} />}
                  left="NMH/IANS @ University of Stuttgart"
                  right="LINK"
                  lc="bg-gray-50"
                  rc="bg-white"
                  textcolor="text-[#323232]"
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
                D-52062 Aachen
                <br />
                Germany
                <br />
                Office Phone: +49 241 80-98671
                <br />
                Mobile Phone: +49 241 80-98686
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
                Phone: 0049 711 685 65522
                <br />
              </p>

            </section>

          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
