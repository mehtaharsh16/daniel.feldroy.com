import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

export default function About() {
  return (
    <Layout>
    <Head>
      <title>Books by Daniel Feldroy</title>
    </Head>
    <section className={utilStyles.headingMd}>
    <h1 className={utilStyles.headingXl}>Books I've Written</h1>
      <p>Writing is a passion of mine, here are my published books. Most are co-authored with my wife, Audrey.</p>

      <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>
          <a target="_blank" href="https://www.feldroy.com/collections/two-scoops-press">Technical
          </a>
          <br />
          <small >
            With Audrey, I co-write dairy-themed technical books.
          </small>
        </li>
        <li className={utilStyles.listItem}>
            <a target="_blank" href="https://www.feldroy.com/collections/impossible-hero-books">Fiction
          </a>
          <br />
          <small >
            I also write fiction, also mostly with Audrey. Dairy isn't mentioned in any of them.
          </small>
        </li>
      </ul>
    </section>
    </Layout>
  )
}
