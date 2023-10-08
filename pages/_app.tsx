import '../styles/componentstyles/portfolio.css'
import '../styles/componentstyles/services.css'
import '../styles/componentstyles/contact.css'
import '../styles/componentstyles/workinfo.css'
import '../styles/componentstyles/about.css'
import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import FormState from '../components/FormState'
// import FormState from '../pages/context/forms/FormState'
import { SSRProvider } from 'react-bootstrap';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Praukcy</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Lobster&family=Quicksand:wght@500&display=swap"
          rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" async></script>
        <script src="https://kit.fontawesome.com/694b7597aa.js" async crossOrigin="anonymous"></script>
      </Head>
      <FormState>
        <Component {...pageProps} />
      </FormState>

    </>
  )
}
