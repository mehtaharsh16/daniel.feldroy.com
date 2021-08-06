import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

export default function Jobs() {
  return (
    <Layout>
      <Head>
        <title>Jobs</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>Jobs</h1>
        <p>Jobs that I have vetted
      </p>

        <ul>
          <li>
            <a href="https://jobs.lever.co/octoenergy?location=Houston" target="_blank">Octopus Energy</a>
          </li>
          <li>
            <a href="" target="_blank">TODO</a>

          </li>
        </ul>
      </section>
    </Layout>
  )
}
