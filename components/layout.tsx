import Stickynavbar from '../components/stickynavbar'
import Metadata from '../components/metadata'
import Footer from '../components/footer'

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
