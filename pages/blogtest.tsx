import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Stickynavbar'

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
import Post from '../posts/testpost.mdx'

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
    </div>
  )
}
