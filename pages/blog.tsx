import Link from 'next/link'

import Navbar from '../components/Stickynavbar'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { getSortedPostsData } from '../lib/posts';

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
    <div id="1" className='relative px-4'>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div className='mt-5 prose mx-auto'>
      <h1>Blog</h1>
        <div >
          {allPostsData.map(({ id, date, title }: any) => (
            <div className='' key={id}>
              <span className='font-mono font-bold bg-gray-900 text-white p-0.5 mr-1'>{date}</span>
              <Link className="no-underline hover:underline" href={"/blog/" + id}>{title}</Link>
              <hr className='m-0 my-2 w-1/4' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
