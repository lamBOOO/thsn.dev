// Import your Client Component
// import HomePage from './home-page';

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

import { getAllPostIds, getPostData } from '../../../lib/posts';

export default async function Page({ params }: any) {
  const postData = await getPostData(params.id);
  return (
    <div className='px-4'>
      {/* <Metadata /> */}
      {/* <Stickynavbar /> */}
      <main className='my-10'>
        <div className='prose mx-auto'>
          <ReactMarkdown
            remarkPlugins={[[remarkGfm, { singleTilde: false }], [remarkMath]]}
            rehypePlugins={[rehypeKatex]}
          >
            {postData.content}
          </ReactMarkdown>
        </div>
      </main>
      {/* <Footer /> */}
    </div>

  );
}

export async function generateStaticParams() {
  // TODO: Why needed?
  const paths = getAllPostIds();
  console.log(paths)
  return [
    paths
  ]
}
