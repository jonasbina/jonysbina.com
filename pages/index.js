import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import firebase from '../firebase/initFirebase'

export default function Home() {
  return (
     
    <div className={styles.container}>
      

      <Head>
        <title>Jonas Bina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jonas Bina
        </h1>

         
        <div className={styles.grid}>
          <a href="https://github.com/jonasbina">
            My GitHub
        </a>
        </div>
       <div className={styles.grid}>
        <a href = "/aboutme">
          About me
          </a>
        </div>
<div className={styles.grid}>
        <a href = "https://jonasbina.itch.io">
          Itch.IO
          </a>
        </div>
        <div className={styles.grid}>
        <a href = "/work">
          My Work
          </a>
        </div>
      </main>
      

     
    </div>
  )
}
