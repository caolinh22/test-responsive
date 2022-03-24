/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ratio ratio-16x9`}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={`${styles.certificate} ratio ratio-1x1`}>Preview
            </div>
          </div>
          <div className={styles.main}>
            <div className={`${styles.logo}`}>
              <img
                className='img-fluid'
                src='/brand-logo.png'
                alt='logo-image'
              />
            </div>
            <div className={styles.padding}></div>
            <div className={`${styles.text} text-center`}>Enter your name</div>
            <input
              autoComplete="off"
              type="text"
              id='input-name'
            />
          </div>
        </div>
      </div >
    </div >
  )
}

export default Home
