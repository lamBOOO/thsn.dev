import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer() {
  const currentDate = new Date().toJSON();
  return (
    <>
      <hr className='border-0' />
      <footer className=" bg-white dark:bg-neutral-800/90 py-4 border-t">
        <span className="px-4 block text-sm text-gray-500 text-center">
          © 2024 Lambert Theisen. All Rights Reserved.
          <br></br>
          <span className='text-xs text-gray-500 font-mono'>{"//"} build time: {currentDate}</span>
        </span>
      </footer>
    </>
  )
}
