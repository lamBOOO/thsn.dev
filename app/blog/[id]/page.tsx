import { getAllPostIds, getPostData } from '../../../lib/posts';

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

import Head from 'next/head'

// export async function getStaticProps({ params }: any) {
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }


// TODO: getStaticPaths: What was that for?
// export async function getStaticPaths() {
//   // generate on build
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export default async function Page({ params }: any) {
  const postData = await getPostData(params.id);
  return <>
    <Head>
      <title>{postData.title} | Lambert Theisen</title>
    </Head>
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }], [remarkMath]]}
      rehypePlugins={[rehypeKatex]}
    >
      {postData.content}
    </ReactMarkdown>
    <span className='font-mono font-bold bg-gray-900 text-white p-0.5 mr-1'>{postData.date}</span>
  </>;
}
