import { getAllPostIds, getPostData } from '../../lib/posts';

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData } : any) {
  return (
    <div className='px-4'>
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
    </div>

  );
}



export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
