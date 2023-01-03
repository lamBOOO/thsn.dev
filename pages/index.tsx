

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar'

import ReactMarkdown from 'react-markdown'

import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

import 'academicons'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import remarkGfm from 'remark-gfm'

import { useMDXComponent } from 'next-contentlayer/hooks';
// import { allPages } from 'contentlayer/generated';

import { MDXProvider } from '@mdx-js/react'
import Post from '../posts/home1.mdx'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'
import { faGithub, faStaylinked } from '@fortawesome/free-brands-svg-icons'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faCode } from '@fortawesome/free-brands-svg-icons'
// import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faCode, faPerson } from '@fortawesome/free-solid-svg-icons'


import logo_me from '../public/me.jpg'
import logo_me_large from '../public/me_large.jpg'
import dd_teaser from '../public/lambert_eigendd_teaser.jpg'
import plot1 from '../public/plot1.jpg'
import plot2 from '../public/plot2.jpg'
import sticker from '../public/sticker.png'

// export async function getPostData(id) {
//   const fullPath = path.join("public", `index.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   // const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     // ...matterResult.data,
//   };
// }


export async function getStaticProps() {
  // Add the "await" keyword like this:
  const postData = 2
  const fileName = fs.readFileSync(`public/index.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {

    props: {

      frontmatter,
      content
    },

  };
}

export default function Home({ frontmatter, content }: any) {
  const markdown = `
# Hello *world*! \n $a^2$ https://reactjs.com. \n\n $$a^2+b^2=c^2$$
A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

| 1    | 2   | 3    | 4       | 5    |
|------|-----|------|---------|------|
| 2    | 12  | 4214 | 12421   | 4124 |
| 12   | 124 | 124  | 21421   | 14   |
| 4142 | 124 | 124  | 2141241 | 124  |

~~~js
console.log('It works!')
~~~

`
  const components = {
    em: (props: any) => <i {...props} />
  }
  return (
    <div id="1" className='relative px-4'>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div className='mt-5 prose mx-auto'>
        <div className="flex mb-4">
          <div className="flex-auto">
            <div className='flex justify-between'>
              <div>
                <h1 className="my-2 mb-0 text-4xl mt-0">
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
                # Researching <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-amber-100 relative inline-block -z-10"><span className="relative"><b>PDE eigenvalue problems</b></span></span>, <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-red-100 relative inline-block -z-10"><span className="relative"><b>asymptotic analysis</b></span></span> of expanding domains, directional <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-teal-100 relative inline-block -z-10"><span className="relative"><b>homogenization</b></span></span>, <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-orange-100 relative inline-block -z-10"><span className="relative"><b>preconditioners</b></span></span> for <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-orange-100 relative inline-block -z-10"><span className="relative"><b>eigenvalue algorithms</b></span></span>, <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-blue-100 relative inline-block -z-10"><span className="relative"><b>preconditioners</b></span></span> for <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-blue-100 relative inline-block -z-10"><span className="relative"><b>linear solvers</b></span></span>, <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-cyan-100 relative inline-block -z-10"><span className="relative"><b>spectral coarse spaces</b></span></span> for <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-cyan-100 relative inline-block -z-10"><span className="relative"><b>domain decomposition</b></span></span>, and <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-pink-100 relative inline-block -z-10"><span className="relative"><b>Galerkin methods</b></span></span> for <span className="before:block before:absolute before:inset-0.5 before:-skew-y-1 before:bg-pink-100 relative inline-block -z-10"><span className="relative"><b>moment models</b></span></span> in rarefied gas modelling.
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
        {/* <div
  class="
    w-full
    h-screen
    bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500
    background-animate
  "
></div> */}
          <span className="text-3xl mr-2 align-middle animate-waving-hand">👋</span>
          {/* <Link type="button" className="inline-block transform transition-all duration-100 hover:scale-105 text-white bg-gradient-to-br from-red-500 to-violet-500 hover:from-red-600 hover:to-violet-600 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md sm:px-5 px-2 py-2.5 text-center mr-2 no-underline scroll-smooth" href="#contact" scroll={false}> */}
          <Link type="button" className="inline-block transform transition-all duration-100 hover:scale-105 text-white bg-gradient-to-br     from-red-500     via-violet-500     to-teal-500     background-animate focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md sm:px-5 px-2 py-2.5 text-center mr-2 no-underline scroll-smooth" href="#contact" scroll={false}>
            <span className='font-extralight'>Say </span>
            <i className='font-extrabold'>Ei Gude, wie?</i>
            <span className='font-extralight'> [a​͜igud​ə​ʼwi​ː]</span>
          </Link>
          {/* workaround, see https://stackoverflow.com/questions/69825670/smooth-scroll-in-next-js */}
          <Link className="transform transition-all duration-100 hover:scale-105 relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-violet-500 hover:from-red-600 hover:to-violet-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 no-underline" href="#">
            <span className="text-md relative sm:px-5 px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <FontAwesomeIcon icon={faFile} /> CV <span className='sm:inline hidden'>(soon)</span>
            </span>
          </Link>
        </div>
        <h2 id="research" className="scroll-mt-20">
          Research Interest & Projects
        </h2>
        <h3>Journal Publications</h3>
        <div className='transform transition-all rounded-lg w-full bg-black p-0.5 mb-2'>
          <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-md p-4">
            <span className='font-bold leading-5 mb-2'>
              A Quasi-Optimal Factorization Preconditioner for Periodic Schrödinger Eigenstates in Anisotropically Expanding Domains
            </span>
            <div className='m-0 flex flex-wrap gap-1 mb-1'>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 border">
                <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                09/2022
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 border border-red-500">
                <span className="pr-1"><FontAwesomeIcon icon={faPerson} /></span>
                Lambert Theisen
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 border border-blue-500"><Link href="https://www.ians.uni-stuttgart.de/institute/team/Stamm/">
                <span className="pr-1"><FontAwesomeIcon icon={faPerson} /></span>
                Benjamin Stamm
              </ Link></span>
            </div>
            <span className="border-gray-500 ">
              <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-tl rounded-bl px-2 py-0.5 bg-gray-300 text-gray-800 font-bold'>SINUM</span>
              <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-tr rounded-br px-2 py-0.5 bg-gray-200 text-gray-800 font-mono'>Volume 60, Issue 5</span>
            </span>
            <div>
              <p className='font-norma text-xs leading-4 text-justify my-2'>
                <Image
                  className="float-right sm:w-48 w-32 ml-1 mb-1 m-0"
                  src={dd_teaser}
                  alt="Picture of the author"
                />
                This paper provides a provably quasi-optimal preconditioning strategy of the linear Schrödinger eigenvalue problem with periodic potentials for a possibly nonuniform spatial expansion of the domain. The quasi-optimality is achieved by having the iterative eigenvalue algorithms converge in a constant number of iterations for different domain sizes. In the analysis, we derive an analytic factorization of the spectrum and asymptotically describe it using concepts from the homogenization theory. This decomposition allows us to express the eigenpair as an easy-to-calculate cell problem solution combined with an asymptotically vanishing remainder. We then prove that the easy-to-calculate limit eigenvalue can be used in a shift-and-invert preconditioning strategy to bound the number of eigensolver iterations uniformly. Several numerical examples illustrate the effectiveness of this quasi-optimal preconditioning strategy.
              </p>
              <div>
              </div>
              {/* <div className='text-sm'>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="text-sm relative px-2 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <FontAwesomeIcon icon={faFile} /> PDF @ Publisher
                  </span>
                </button>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-rose-500 to-red-500 group-hover:from-rose-500 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-rose-200 dark:focus:ring-rose-800">
                  <Link className="hover:text-white text-sm relative px-2 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 no-underline" href="https://arxiv.org/abs/2110.14982">

                    <FontAwesomeIcon icon={faFile} /> PDF @ arXiv

                  </Link>
                </button>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-green-500 group-hover:from-teal-500 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
                  <span className="text-sm relative px-2 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <FontAwesomeIcon icon={faFile} /> PDF @ Publisher
                  </span>
                </button>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-violet-500 group-hover:from-red-500 group-hover:to-violet-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800">
                  <span className="text-sm relative px-2 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <FontAwesomeIcon icon={faCode} /> Code @ Zenodo
                  </span>
                </button>
              </div> */}

              <div className='text-sm mb-2'>
                {/* <span className='text-xs'>Keywords: </span> */}
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
                      (<span className="bg-gray-50 text-gray-800 text-xs font-medium mr-1 py-0 rounded-sm dark:bg-gray-200 dark:text-gray-800" key={b}># {a}</span>)
                  )
                }
              </div>

              <div className='flex flex-wrap gap-1 leading-none my-2'>

                <Link href="https://doi.org/10.1137/21M1456005">
                  <span className="border-gray-500 hover:border-black">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-tl rounded-bl px-2 py-0.5 bg-gray-300 text-gray-800 font-bold'>
                      <span className="pr-1"><i className="ai ai-doi"></i></span>
                      DOI
                    </span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-tr rounded-br px-2 py-0.5 bg-gray-200 text-gray-800 font-mono'>10.1137/21M1456005</span>
                  </span>
                </Link>
                <Link className="m-0" href="https://doi.org/10.1137/21M1456005">
                  <span className="border-gray-500">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-red-700 dark:text-red-300 rounded-tl rounded-bl px-2 py-0.5 bg-red-300 text-red-800 font-bold '>
                      <span className="pr-1"><i className="ai ai-arxiv"></i></span>
                      arXiv
                    </span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-red-700 dark:text-red-300 rounded-tr rounded-br px-2 py-0.5 bg-red-200 text-red-800 font-mono decoration-red-700'>2110.14982</span>
                  </span>
                </Link>
                <Link href="https://doi.org/10.1137/21M1456005">
                  <span className="border-gray-500 ">
                    <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-blue-700 dark:text-blue-300 rounded-tl rounded-bl px-2 py-0.5 bg-blue-300 text-blue-800 font-bold'>
                      <span className="pr-1"><i className="ai ai-zenodo"></i></span>
                      Zenodo
                    </span>
                    <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-blue-700 dark:text-blue-300 rounded-tr rounded-br px-2 py-0.5 bg-blue-200 text-blue-800 font-mono'>10.1137/21M1456005</span>
                  </span>
                </Link>
              </div>



            </div>
          </div>
        </div>
        <h3>Projects</h3>
        <div className='transform transition-all rounded-xl w-full bg-gradient-to-r from-[#feb4b4] to-[#f88181] p-1 mb-2'>
          <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
            <span className='font-bold'>
              Domain Decomposition Methods for Electronic Structure Calculations
            </span>
            <div className='m-0 flex space-x-2'>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                10/2019 – Now
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800">Lambert Theisen</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"><Link href="https://www.ians.uni-stuttgart.de/institute/team/Stamm/">Benjamin Stamm</ Link></span>
            </div>
            <div>
              <p className='font-normal text-sm leading-5 text-justify'>
                <Image
                  className="float-right sm:w-48 w-32 p-2 m-0"
                  src={dd_teaser}
                  alt="Picture of the author"
                />
                The solution of eigenvalue problems on long (chain-like) domain is difficult due to the increased computational complexity and an often collapsing spectrum of the considered operator. We therefore want to rewrite the steps of an (possibly non-linear) eigenvalue problem solver (eigensolver) to a sequence of local linear eigenvalue problems. If the domain is the union of simpler sub-domains (say balls in 3D), then classical Schwartz-like domain decomposition algorithms can be applied to have a weakly scalable linear eigenvalue solver for some operators. However, the global solution algorithm convergence behavior also changes dramatically with an increasing domain length. Therefore, efficient preconditioning techniques have to be developed to also take these effects into account.
                <br></br>
                The possible range of applications includes electronic structure calculations in computational chemistry or quantum mechanical simulations.
              </p>
              <div>
              </div>
              <div className='text-sm mb-2'>
                <span className='text-xs'>Keywords: </span><span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800">Homogenization Theory</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800">Domain Decompositon Method</span>
              </div>
            </div>
          </div>
        </div>
        <div className='transform transition-all rounded-xl w-full bg-gradient-to-r from-[#beb4fe] to-[#8187f8] p-1 mb-2'>
          <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
            <span className='font-bold'>
              Simulation of Non-Equilibrium Gas Flows Using the FEniCS Computing Platform (Master Thesis @ MathCCES)
            </span>
            <div className='m-0 flex flex-wrap'>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                04/2019 – 09/2019
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800">Lambert Theisen</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"><Link href="https://www.acom.rwth-aachen.de/5people/torrilhon/start">Manuel Torrilhon</ Link></span>
            </div>
            <div>
              <p className='font-normal text-sm leading-5 text-justify'>
                <Image
                  className="float-right sm:w-28 w-20 p-2 m-0"
                  src={sticker}
                  alt="Picture of the author"
                />
                <Image
                  className="float-right sm:w-48 w-32 p-2 m-0"
                  src={plot1}
                  alt="Picture of the author"
                />
                <Image
                  className="float-right sm:w-48 w-32 p-2 m-0"
                  src={plot2}
                  alt="Picture of the author"
                />
                This thesis provides a framework to simulate non-equilibrium gas flows using the finite element method within the FEniCS computing platform [1]. The main model equations, i.e. the R13 equations, are introduced after a motivational discussion about the classical models, given by Navier–Stokes and Fourier. The resulting system of equations is simplified to obtain a set of steady-state and linearized balance laws for two-dimensional domains.
                <br></br>
                During a validation process of the numerical method with exact solutions, particular focus is put on the intuitive implementation using the tensor capabilities of FEniCS. This allows having an almost one-to-one correspondence between the mathematical formulation and the implemented source code. A documented and validated solver is developed and can be obtained from [2]. This solver allows simulating gas flows for arbitrary shaped two-dimensional geometries using a variety of boundary conditions.
                <br></br>
                In order to justify the use of extended model equations for gas flows with moderate Knudsen number, typical examples, with occurring rarefaction effects, are presented and solved. In these application cases, the Knudsen paradox and a thermal transpiration flow are observed.
              </p>
              <div>
              </div>
              <div className='text-sm mb-2'>
                <span className='text-xs'>Keywords: </span>
                {
                  [
                    "R13 equations",
                    "FEniCS project",
                    "Non-equilibrium gas flows",
                    "Finite element method",
                    "CIP stabilization"
                  ].map(
                    (a, b) =>
                      (<span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800" key={b}>{a}</span>)
                  )
                }
              </div>
              <div className='text-sm'>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="text-sm relative px-2 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <FontAwesomeIcon icon={faFile} /> PDF
                  </span>
                </button>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-violet-500 group-hover:from-red-500 group-hover:to-violet-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800">
                  <span className="text-sm relative px-2 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <FontAwesomeIcon icon={faCode} /> Code @ RWTH-Gitlab
                  </span>
                </button>
              </div>
              <div className='text-sm mb-2 leading-3 mt-1 text-gray-500'>
                <span className='text-xs'>
                  [1]: FEniCS Project: Bitbucket Repositories. FEniCS Project. url: https://bitbucket.org/fenics-project/ (visited on 08/28/2019).
                  <br></br>
                  [2]: Lambert Theisen and Manuel Torrilhon. fenicsR13: Solver Repository. RWTH Aachen University, 2019. url: https://git.rwth-aachen.de/lamBOO/fenicsR13 (visited on 09/15/2019).
                </span>
              </div>
            </div>
          </div>
        </div>

        <h2 id="contact" className="scroll-mt-20 mb-5">
          Contact
        </h2>
        <h3>
          Matrix Protocol
        </h3>
        <p>
          TODO Add direct chat link.
        </p>
        <h3>
          E-Mail
        </h3>
        <p className='leading-6'>
          You can contact me via the e-mail address <mark className='font-mono bg-gray-100 rounded-sm p-0'>lambert (dot) theisen (at) rwth (minus) aachen (dot) de</mark>, preferrable using PGP encryption. My PGP key can be found on the keyserver <Link href="https://keys.openpgp.org/">keys.openpgp.org</Link> or can be downloaded <Link href="/lt-pgpkey.asc">here</Link>. The corresponding sigature reads <mark className='font-mono bg-gray-100 rounded-sm p-0'>9C32 B2D9 E59B 09C1 72AB C577 F2C2 52C0 F331 EB87</mark>.
        </p>
        <h3>
          Find my also on ..
        </h3>
        <p>
          I am part of the major science and networking sites, for example:
        </p>
        <div className='flex flex-wrap gap-1 leading-3'>
          <Link href="https://doi.org/10.1137/21M1456005">
            <span className="border-gray-500">
              <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-tl rounded-bl px-2 py-0.5 bg-orange-300 text-orange-800 font-bold'><span><FontAwesomeIcon className="pr-1" icon={faGitlab} />RWTH</span></span>
              <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-tr rounded-br px-2 py-0.5 bg-orange-200 text-orange-800 font-mono'>@lamBOO</span>
            </span>
          </Link>
          <Link href="https://doi.org/10.1137/21M1456005">
            <span className="border-gray-500">
              <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-blue-700 dark:text-blue-300 rounded-tl rounded-bl px-2 py-0.5 bg-blue-300 text-blue-800 font-bold'>
                <span>
                  <span className="pr-1"><i className="ai ai-google-scholar"></i></span>
                  GScholar
                </span>
              </span>
              <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-blue-700 dark:text-blue-300 rounded-tr rounded-br px-2 py-0.5 bg-blue-200 text-blue-800 font-mono'>LINK</span>
            </span>
          </Link>
          <Link href="https://doi.org/10.1137/21M1456005">
            <span className="border-gray-500">
              <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-tl rounded-bl px-2 py-0.5 bg-gray-300 text-gray-800 font-bold'>
                <span>
                  <span className="pr-1"><FontAwesomeIcon icon={faGithub} /></span>
                  Github
                </span>
              </span>
              <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-tr rounded-br px-2 py-0.5 bg-gray-200 text-gray-800 font-mono'>@lamBOO</span>
            </span>
          </Link>
          <Link href="https://doi.org/10.1137/21M1456005">
            <span className="border-gray-500">
              <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-red-700 dark:text-red-300 rounded-tl rounded-bl px-2 py-0.5 bg-red-300 text-red-800 font-bold'>
                <span>
                  <span className="pr-1"><i className="ai ai-arxiv"></i></span>
                  arXiv
                </span>
              </span>
              <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-red-700 dark:text-red-300 rounded-tr rounded-br px-2 py-0.5 bg-red-200 text-red-800 font-mono'>theisen_l_1</span>
            </span>
          </Link>
          <Link href="https://doi.org/10.1137/21M1456005">
            <span className="border-gray-500">
              <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-lime-700 dark:text-lime-300 rounded-tl rounded-bl px-2 py-0.5 bg-lime-300 text-lime-800 font-bold'>
                <span>
                  <span className="pr-1"><i className="ai ai-orcid"></i></span>
                  ORCID
                </span>
              </span>
              <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-lime-700 dark:text-lime-300 rounded-tr rounded-br px-2 py-0.5 bg-lime-200 text-lime-800 font-mono'>0000-0001-5460-5425</span>
            </span>
          </Link>
          <Link href="https://doi.org/10.1137/21M1456005">
            <span className="border-gray-500">
              <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-teal-700 dark:text-teal-300 rounded-tl rounded-bl px-2 py-0.5 bg-teal-300 text-teal-800 font-bold'>
                <span>
                  <span className="pr-1"><i className="ai ai-researchgate-square"></i></span>
                  ResearchGate
                </span>
              </span>
              <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-teal-700 dark:text-teal-300 rounded-tr rounded-br px-2 py-0.5 bg-teal-200 text-teal-800 font-mono'>Lambert-Theisen</span>
            </span>
          </Link>
          <Link href="https://doi.org/10.1137/21M1456005">
            <span className="border-gray-500">
              <span className='border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center dark:bg-blue-700 dark:text-blue-300 rounded-tl rounded-bl px-2 py-0.5 bg-blue-300 text-blue-800 font-bold'>
                <span>
                  <span className="pr-1"><FontAwesomeIcon icon={faLinkedin} /></span>
                  LinkedIn
                </span>
              </span>
              <span className='border-inherit border-t border-r border-b text-xs inline-flex items-center dark:bg-blue-700 dark:text-blue-300 rounded-tr rounded-br px-2 py-0.5 bg-blue-200 text-blue-800 font-mono'>Lambert-Theisen</span>
            </span>
          </Link>
          <Link className='no-underline' href="https://doi.org/10.1137/21M1456005">
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

        <MDXProvider components={components}>
          <Post />
        </MDXProvider>
        <div>
          <ReactMarkdown
            remarkPlugins={[[remarkGfm, { singleTilde: false }], [remarkMath]]}
            rehypePlugins={[rehypeKatex]}
          >
            {markdown}
          </ReactMarkdown>
        </div>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <h2>
          Research
        </h2>
        <div>
          Test
        </div>
        <h2 id="test" className="text-3xl font-bold underline hover:text-2xl">
          Hello world!
        </h2>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
          <button className=" hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Button 2
          </button>
        </div>
      </div>
      <Head>
        <title>Lambert Theisen - Computational Engineering Scientist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
