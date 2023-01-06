import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Stickynavbar from '../components/Stickynavbar'
import Metadata from '../components/Metadata'
import Footer from '../components/Footer'

import 'academicons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faBook, faBuilding, faBuildingColumns, faCode, faPerson, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

import logo_me from '../public/me.jpg'

import p2021_1 from '../public/p2021_1.jpg'
import p2021_2 from '../public/p2021_2.jpg'
import p2021_3 from '../public/p2021_3.jpg'
import p2022_1 from '../public/p2022_1.jpg'
import p2022_2 from '../public/p2022_2.jpg'
import p2022_3 from '../public/p2022_3.jpg'

export default function Home() {
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
                        Computational Engineer, PhD Student & Digital Artist
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
              <div className='flex flex-wrap items-center gap-1 border-b border-gray-100 pb-5'>
                <span className="text-3xl mr-2 align-middle animate-waving-hand">👋</span>
                <Link type="button" className="inline-block transform transition-all duration-100 hover:scale-105 text-white bg-gradient-to-br from-red-500 via-violet-500 to-teal-500 background-animate focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-md sm:px-5 px-2 py-2.5 text-center mr-2 no-underline scroll-smooth" href="#contact" scroll={false}>
                  <span className='font-extralight'>Say </span>
                  <i className='font-extrabold'>Ei Gude, wie?</i>
                  <span className='font-extralight'> [a​͜igud​ə​ʼwi​ː]</span>
                </Link>
                <Link className="transform transition-all duration-100 hover:scale-105 relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 via-violet-500 to-teal-500 background-animate hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 no-underline" href="#">
                  <span className="text-md relative sm:px-5 px-2 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    <FontAwesomeIcon icon={faFile} /> CV <span className='sm:inline hidden'>(soon)</span>
                  </span>
                </Link>
              </div>
            </section>

            <aside>
              <h2 id="news" className="scroll-mt-20">
                Blog & News
              </h2>
              <div>
                <span className='font-mono font-bold bg-gray-900 text-white p-1 mr-1'>23/01/03</span>I will be present at the <Link href="https://www.siam.org/conferences/cm/conference/cse23">SIAM CSE23</Link> in Amsterdam, NL. I also plan to attent the <Link href="https://jahrestagung.gamm-ev.de/annual-meeting-2023">93rd annual GAMM meeting</Link> in Dresden, GER.
                <hr className='m-0 my-2' />
                <span className='font-mono font-bold bg-gray-900 text-white p-1 mr-1'>22/10/01</span>From MO-THU, I work in Stuttgart and on FR from Aachen.
              </div>
            </aside>

            <section>

              <article>
                <h2 id="research" className="scroll-mt-20">
                  Research Interest & Projects
                </h2>
                <h3>Journal Publications</h3>
                <div className="border flex flex-col justify-between h-full bg-white rounded-md p-4 my-4 shadow-md border-gray-200">
                  <span className='leading-5 mb-2'>
                    <span className='font-bold'>
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
                        <span className="border-gray-500">
                          <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-red-300 text-red-800 font-bold '>
                            <span className="pr-1"><i className="ai ai-arxiv"></i></span>
                            arXiv
                          </span>
                          <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-red-200 text-red-800 font-mono decoration-red-700'>2110.14982</span>
                        </span>
                      </Link>
                      <Link href="https://doi.org/10.5281/zenodo.6576197">
                        <span className="border-gray-500">
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
                <div className="border flex flex-col justify-between h-full bg-white rounded-md p-4 my-4 shadow-md border-gray-200">
                  <span className='leading-5 mb-2'>
                    <span className='font-bold'>
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
                        <span className="border-gray-500">
                          <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-red-300 text-red-800 font-bold '>
                            <span className="pr-1"><i className="ai ai-arxiv"></i></span>
                            arXiv
                          </span>
                          <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-red-200 text-red-800 font-mono decoration-red-700'>2007.05944</span>
                        </span>
                      </Link>
                      <Link href="https://doi.org/10.5281/zenodo.4172951">
                        <span className="border-gray-500">
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
              <h2 id="teaching" className='scroll-mt-20'>Teaching</h2>
              <p>
                You can find most of my teaching activity in the Github repository <Link href="https://github.com/lamBOOO/teaching">@lamBOOO/teaching</Link>.
                <span className='text-xs text-gray-400'>[TODO Add all other teaching with PDF previews.]</span>
              </p>
              <h3>Selected classes</h3>
              <article>
                <div className="border flex flex-col justify-between h-full bg-white rounded-md p-4 shadow-md border-gray-200">
                  <span className='leading-5 mb-2'>
                    <span className='font-bold'>
                      Vortragsübung Höhere Mathematik 1 für Ingenieure
                    </span>
                    <br />
                    <i className="text-xs">
                      (global exercise higher mathematics 1 for engineers)
                    </i>
                  </span>
                  <div className='m-0 flex flex-wrap gap-1 mb-1'>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                      <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                      WS22
                    </span>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border-red-500">
                      <span className="pr-1"><FontAwesomeIcon icon={faUsers} /></span>
                      ~1000
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded border-blue-500">
                      <span className="pr-1"><FontAwesomeIcon icon={faBuildingColumns} /></span>
                      Unversity of Stuttgart
                    </span>
                  </div>

                  <div>
                    <p className='font-normal text-xs leading-4 text-justify my-2'>
                      The class is about the basic concepts of linear algebra. For example:
                    </p>
                    <ul className='font-normal text-xs leading-3'>
                      <li key="0">logics</li>
                      <li key="1">numbers, sets, inequalities</li>
                      <li key="2">euclidian vectorspace</li>
                      <li key="3">linear systems of equations</li>
                      <li key="4">transformations and transformation groups</li>
                      <li key="5">principal axis transformations</li>
                    </ul>
                    <div>
                    </div>
                    <Link href="https://github.com/lamBOOO/teaching/tree/main/uni-stuttgart/ws22-nmh-hm1">
                      <span className="border-gray-500 hover:border-black">
                        <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-green-300 text-green-800 font-bold'>
                          <span className="pr-1"><FontAwesomeIcon icon={faBook} /></span>
                          Course notes
                        </span>
                        <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-green-200 text-green-800 font-mono'>LINK</span>
                      </span>
                    </Link>



                  </div>
                </div>
              </article>
            </section>

            <section>
              <h2 id="projects" className="scroll-mt-20">
                Selected Projects
              </h2>
              <p>
                The tool <Link href="http://gradescaler.com">gradescaler.com</Link> provides a graphical overveiw of exam grading schemes.
                <span className='text-xs text-gray-400'>[TODO: Add grammarly script, latex templates, check Git repos, ...]</span>
              </p>
            </section>

            <section>
              <h2 id="contact" className="scroll-mt-20 mb-5">
                Contact
              </h2>
              <h3>
                Matrix Protocol
              </h3>
              <p>
                <span className='text-xs text-gray-400'>[TODO Add direct chat link.]</span>
              </p>
              <h3>
                E-Mail
              </h3>
              <p className='leading-6'>
                You can contact me via the e-mail address <mark className='font-mono bg-gray-100 rounded-sm p-0'>lambert (dot) theisen (at) rwth (minus) aachen (dot) de</mark>, preferrable using PGP encryption. My PGP key can be found on the keyserver <Link href="https://keys.openpgp.org/">keys.openpgp.org</Link> or you can directlty download it here using the link <Link href="/lt-pgpkey.asc">lt-pgpkey.asc</Link>. The corresponding sigature reads <mark className='font-mono bg-gray-100 rounded-sm p-0'>9C32 B2D9 E59B 09C1 72AB C577 F2C2 52C0 F331 EB87</mark>.
              </p>
              <h3>
                Profiles
              </h3>
              <p>
                I am part of the major science and networking sites, for example:

              </p>
              <div className='flex flex-wrap gap-1 leading-3'>
                <Link href="https://git.rwth-aachen.de/lamBOO">
                  <span className="border-gray-500">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-orange-300 text-orange-800 font-bold'><span><FontAwesomeIcon className="pr-1" icon={faGitlab} />RWTH</span></span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-orange-200 text-orange-800 font-mono'>@lamBOO</span>
                  </span>
                </Link>
                <Link href="https://scholar.google.com/citations?user=ZD8cDyEAAAAJ">
                  <span className="border-gray-500">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-blue-300 text-blue-800 font-bold'>
                      <span>
                        <span className="pr-1"><i className="ai ai-google-scholar"></i></span>
                        GScholar
                      </span>
                    </span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-blue-200 text-blue-800 font-mono'>LINK</span>
                  </span>
                </Link>
                <Link href="https://github.com/lamBOOO">
                  <span className="border-gray-500">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-gray-300 text-gray-800 font-bold'>
                      <span>
                        <span className="pr-1"><FontAwesomeIcon icon={faGithub} /></span>
                        Github
                      </span>
                    </span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-gray-200 text-gray-800 font-mono'>@lamBOO</span>
                  </span>
                </Link>
                <Link href="https://arxiv.org/a/theisen_l_1.html">
                  <span className="border-gray-500">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-red-300 text-red-800 font-bold'>
                      <span>
                        <span className="pr-1"><i className="ai ai-arxiv"></i></span>
                        arXiv
                      </span>
                    </span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-red-200 text-red-800 font-mono'>theisen_l_1</span>
                  </span>
                </Link>
                <Link href="https://orcid.org/0000-0001-5460-5425">
                  <span className="border-gray-500">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-lime-300 text-lime-800 font-bold'>
                      <span>
                        <span className="pr-1"><i className="ai ai-orcid"></i></span>
                        ORCID
                      </span>
                    </span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-lime-200 text-lime-800 font-mono'>0000-0001-5460-5425</span>
                  </span>
                </Link>
                <Link href="https://www.researchgate.net/profile/Lambert-Theisen">
                  <span className="border-gray-500">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-teal-300 text-teal-800 font-bold'>
                      <span>
                        <span className="pr-1"><i className="ai ai-researchgate-square"></i></span>
                        ResearchGate
                      </span>
                    </span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-teal-200 text-teal-800 font-mono'>Lambert-Theisen</span>
                  </span>
                </Link>
                <Link className='no-underline' href="https://www.linkedin.com/in/lambert-theisen-4027b3184/">
                  <span className="border-gray-500">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 bg-blue-700 text-white font-bold'>
                      <span>
                        <span className="pr-1"><FontAwesomeIcon icon={faLinkedin} /></span>
                        LinkedIn
                      </span>
                    </span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 bg-blue-500 text-white font-mono'>Lambert-Theisen</span>
                  </span>
                </Link>
                <span className='text-xs text-gray-400'>[TODO Add all other from ACOM website.]</span>
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
