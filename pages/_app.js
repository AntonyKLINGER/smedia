import Head from 'next/head'
import '@/styles/responsify.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700;800&display=swap" rel="stylesheet" />        
      </Head>
      <Component {...pageProps} />
    </>
  )
}
