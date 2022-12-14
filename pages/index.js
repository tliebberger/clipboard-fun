import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [c, setC] = useState("")
  const ref = useRef(null);

  useEffect(() => {
    const handlCopy = event => {
      setC(event.target.innerText)
      navigator.clipboard.writeText("Random stuff injected by the site omega lol").then(() => {
        console.log("hacked")
      })

    };

    const element = ref.current;

    element.addEventListener('copy', handlCopy);

    return () => {
      element.removeEventListener('copy', handlCopy);
    };
  }, []);


  useEffect(() => {
    const text = "Welcome to Clipboard Fun"
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Async: Copying to clipboard was successful!');
      })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Clipboard Fun
        </h1>
        <p className={styles.description}>
          This is a simple app that will copy the text Welcome to Clipboard Fun to the clipboard. Without asking you for permission.
        </p>
        <br />
        <span ref={ref}>Now copy this line and check your clipboard</span>
        <br />
        {c.length > 0 &&
          <>
            <div>
              <p>you have copied:</p>
              <p>{c}</p>
              <input
                style={{ width: '100%' }}
                placeholder='copy your clipboard in here'
              />

            </div>
          </>}
      </main>
    </div>
  )
}
