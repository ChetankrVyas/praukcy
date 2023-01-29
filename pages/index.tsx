import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Portfolio from "../components/Portfolio"
import Services from "../components/Services"
import Workinfo from "../components/Workinfo"
import Customer from "../components/Customers"
import CustomerReview from '../components/Customerreview'
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Praukcy</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous" async></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" async></script>
        </Head>
      </div>
      <Header />
      <Services />
      <Workinfo/>
      <Portfolio />
      <Customer />
      <CustomerReview />
      <Footer />
    </>
  )
}
