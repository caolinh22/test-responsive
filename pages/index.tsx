/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ratio ratio-16x9`}>
        <div className={styles.content}>
          <div className={`${styles.certificate} ratio ratio-1x1`}>Preview
          </div>
          <div className={styles.main}>
            <div className={`${styles.logo} ratio ratio-300x172`}>
              <img
                className='img-fluid'
                src='/brand-logo.png'
                alt='logo-image'
              />
            </div>
            <p className={`${styles.text} text-center`}>textEnter</p>
            <div className={`${styles.input} ratio ratio-10x1`}>
              <input
                autoComplete="off"
                type="text"
                placeholder='Eg. Emily Lee'
                id='input-name'
              />
            </div>
            <div className={active ? `${styles.downloadBtn} ${styles.active}` : `${styles.downloadBtn}`}>
              <a className={styles.a}>textDownload</a>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Home
