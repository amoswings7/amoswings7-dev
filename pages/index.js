import Head from 'next/head'
import WelcomePage from '../components/WelcomePage'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import MySkills from '../components/MySkills'
import MyProfile from '../components/MyProfile'
import MyServices from '../components/MyServices'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Amos Makupe Web developer</title>
        <meta name="description" content="Amos Makupe is a junior web developer who works on both frontend and backend of web applications" />
        <meta name='keywords' content='Amos Makupe, Junior web developer, portfolio'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar name={{className:'navbar'}}/>
      <WelcomePage/>
      <IntroSection/>
      <MySkills/>
      <MyProfile/>
      <MyServices/>
    </main>
  )
}
