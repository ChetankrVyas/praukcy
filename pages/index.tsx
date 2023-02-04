import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Portfolio from "../components/Portfolio"
import Services from "../components/Services"
import Customer from "../components/Customers"
import CustomerReview from '../components/Customerreview'
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Praukcy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Header />
      <Services />
      <Portfolio/>
      <CustomerReview />
      <Footer />
    </>
  )
}
