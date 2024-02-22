import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Finley Ghosh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Header title="Finley Ghosh" />
          <p>Software Engineer</p>
          <a href='https://www.linkedin.com/in/finleyghosh/'>LinkedIn</a>
      </main>

      <Footer />
    </div>
  )
}
