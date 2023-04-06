import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <hr className='border-0' />
      <footer className=" bg-white py-4 -mx-4 border-gray-100 border-t">
        <span className="px-4 block text-sm text-gray-500 text-center">
          © 2023 Lambert Theisen. All Rights Reserved.
        </span>
      </footer>
    </>
  )
}
