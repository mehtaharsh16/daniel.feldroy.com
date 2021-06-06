import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Daniel Feldroy'
export const siteTitle = 'Daniel Feldroy'

export default function Layout({ children, home }) {
  const date = new Date();
  const copyright = `All rights reserved ${date.getFullYear()}, Daniel Roy Greenfeld`
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Inside the head of Daniel Feldroy (aka Daniel Roy Greenfeld)"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <p>Inside the head of Daniel Feldroy (aka Daniel Roy Greenfeld)<br /></p>
            <p>
              <Link href="/about">
                <a>About</a>
              </Link>{' '}|{' '}
              <Link href="/books">
                <a>Books</a>
              </Link>
            </p>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
            <p>
              <Link href="/about">
                <a>About</a>
              </Link>{' '}|{' '}
              <Link href="/books">
                <a>Books</a>
              </Link>
            </p>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className={styles.footer}>
        <p>
          <a href="/feeds/atom.xml">Atom Feed</a>
        </p>
        <p>
          {copyright}
        </p>
      </footer>
    </div>
  )
}
