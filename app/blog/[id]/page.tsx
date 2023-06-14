import { getPostData } from '../../../lib/posts';

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params }: any,
): Promise<Metadata> {
  const postData = await getPostData(params.id);
  // console.log(postData)
  return {
    title: postData.title,
  };
}


export default async function Page({ params }: any) {
  const postData = await getPostData(params.id);
  return <>
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }], [remarkMath]]}
      rehypePlugins={[[rehypeKatex],[rehypeRaw]]}
    >
      {postData.content}
    </ReactMarkdown>
    <span className='font-mono font-bold bg-gray-900 text-white p-0.5 mr-1'>{postData.date}</span>
  </>;
}
