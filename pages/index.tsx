import Footer from '../components/Footer'
import Header from '../components/Header'
import Portfolio from "../components/Portfolio"
import Services from "../components/Services"
import Contactandmess from "../components/Contactandmess"
import CustomerReview from '../components/Customerreview'
export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Portfolio/>
      <CustomerReview />
      <Contactandmess/>
      <Footer />
    </>
  )
}