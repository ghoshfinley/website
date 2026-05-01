import Head from 'next/head'
import Hero from '@components/Hero'
import About from '@components/About'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import SideNav from '@components/SideNav'
import RightNodes from '@components/RightNodes'

export default function Home() {
  return (
    <>
      <Head>
        <title>Finley Ghosh</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Finley Ghosh, Product Engineer based in Sydney." />
      </Head>
      <div style={{ background: 'linear-gradient(to bottom, #030712 0%, #0f172a 100%)' }}>
        <SideNav />
        <Hero />
        <div className="relative">
          <RightNodes />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
