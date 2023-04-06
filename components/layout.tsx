import Stickynavbar from '../components/Stickynavbar'
import Metadata from '../components/Metadata'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Stickynavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
