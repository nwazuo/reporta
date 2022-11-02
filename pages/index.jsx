import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { HeaderResponsive } from '../components/Header'

const links = [
  {link: '#', label: 'Home'},
  {link: '#', label: 'About'},
  {link: '#', label: 'Us'},
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACME Reporta</title>
        <meta name="description" content="Report an incident with ACME app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderResponsive links={links}/>
    </div>
  )
}