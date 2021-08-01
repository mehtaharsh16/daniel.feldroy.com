import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Random() {
  const { data, error } = useSwr('/api/random', fetcher)

  if (error) return <div>Oops!</div>
  if (!data) return <div>Randomizing...</div>
  return <div>{data.value}</div>  
}

export default function Counter() {

  return (
    <Layout>
    <Head>
      <title>Randomizer</title>
    </Head>
    <section className={utilStyles.headingMd}>
    <h1 className={utilStyles.headingXl}>Randomizer</h1>
    <p>Refresh the page to get a random number from the server.</p>
    <h2><Random /></h2>

    </section>
    </Layout>
  )
}


