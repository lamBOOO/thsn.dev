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

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import remarkGfm from 'remark-gfm'

import { useMDXComponent } from 'next-contentlayer/hooks';
// import { allPages } from 'contentlayer/generated';

import { MDXProvider } from '@mdx-js/react'
import Post from '../posts/home1.mdx'

import logo_me from '../public/me.jpg'
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

gudes

~~~js
console.log('It works!')
~~~

`
  const components = {
    em: (props: any) => <i {...props} />
  }
  return (
    <div className='relative px-8'>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div className='mt-5 prose mx-auto'>
        <div className="flex mb-6">
          <div className="flex-auto">
            <h1 className="mb-2 text-4xl">
              Lambert Theisen<span className='text-gray-400 text-xl'>, M.Sc.</span>
            </h1>
            <div className='leading-5 mb-2'>
              Researcher & PhD Student
              <br></br>
              @ <Link href="https://www.rwth-aachen.de/">RWTH Aachen University</ Link> / <Link href="https://www.uni-stuttgart.de/">University of Stuttgart</Link>
            </div>
            <div className='leading-4'>
              <i><small>
                # Researching <b>PDE eigenvalue problems</b>, <b>asymptotic analysis</b> of expanding domains, <b>homogenization</b>, <b>preconditioners</b> and <b>numerical methods</b> for <b>moment models</b> in rarefied gas modelling.
              </small></i>
            </div>

          </div>
          <div className="flex-none sm:flex w-32 h-32 hidden">
            <Image
              className="flex-none rounded-full m-0"
              src={logo_me}
              alt="Picture of the author"
            />
          </div>
        </div>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact me!</button>
        <h2 id="research" className="scroll-mt-20">
          Research Interest & Projects
        </h2>
        <div className='transform transition-all rounded-xl w-full bg-gradient-to-r from-[#feb4b4] to-[#f88181] p-1 mb-2'>
          <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
            <span className='font-bold'>
              Domain Decomposition Methods for Electronic Structure Calculations
            </span>
            <div className='m-0'>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                10/2019 – Now
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800">Lambert Theisen</span>
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
              <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
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
                <button type="button" className="mr-2 py-1 px-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DOI</button>
                <button type="button" className="mr-2 py-1 px-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">arXiv TODO</button>
              </div>
              <div className='text-sm mb-2 leading-3 mt-1'>
                <span className='text-xs'>
                [1]: FEniCS Project: Bitbucket Repositories. FEniCS Project. url: https://bitbucket.org/fenics-project/ (visited on 08/28/2019).
                <br></br>
                [2]: Lambert Theisen and Manuel Torrilhon. fenicsR13: Solver Repository. RWTH Aachen University, 2019. url: https://git.rwth-aachen.de/lamBOO/fenicsR13 (visited on 09/15/2019).
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
          Test
        </div>
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
        <title>Lambert Theisen - Researcher, Developer</title>
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
