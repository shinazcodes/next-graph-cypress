import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { Paths } from '../util/Paths'

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace(Paths.page1)

  });
  return (
    <div className={styles.container}>

    </div>
  )
}

export default Home
