import Stickynavbar from '../components/Stickynavbar'
import Metadata from '../components/Metadata'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Stickynavbar />
      <Metadata />
      <main className='px-4 my-10 prose mx-auto'>{children}</main>
      <Footer />
    </>
  )
}
