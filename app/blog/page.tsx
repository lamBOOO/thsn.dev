import { Metadata } from "next"
import Link from 'next/link'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { getSortedPostsData } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Home() {

  const allPostsData = await getSortedPostsData();
  return <>
    <h1>Blog</h1>
    <div >
      {allPostsData.map(({ id, date, title }: any) => (
        <div className='' key={id}>
          <span className='font-mono font-bold bg-gray-900 text-white p-0.5 mr-1'>{date}</span>
          <Link
            className="no-underline hover:underline" href={"/blog/" + id}
          >
            {title}
          </Link>
          <hr className='m-0 my-2 w-1/4' />
        </div>
      ))}
    </div>
  </>;
}
