import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Daniel Roy Greenfeld</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>About Me</h1>
        <p>I do Python and JavaScript out of Los Angeles, California, soon to be Houston, Texas. I love to read, write, hang out with my wife, and play with my daughter. I love space exploration, composting, and potato gardening. I work at <a target="_blank" href="https://octopusenergy.com">Octopus Energy</a> to address global climate change. I also write{' '}
          <Link href="/books">
            <a>books</a>
          </Link>.
      </p>

        <ul>
          <li>
            <a href="https://www.linkedin.com/in/danielfeldroy/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/pydanny" target="_blank">Twitter</a>

          </li>
        </ul>
      </section>
    </Layout>
  )
}
