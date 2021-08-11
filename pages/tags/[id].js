import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'

import { getAllTags, getSortedPostsByTagData } from '../../lib/tags'

export async function getStaticProps({ params }) {
  const allTagsData = getSortedPostsByTagData(params.id)
  return {
    props: {
      allTagsData,
      tag: params.id
    }
  }
}

export async function getStaticPaths() {
  let paths = []
  for (const path of getAllTags()){
    paths.push({params: {id: path.id}})
  }
  return {
    paths,
    fallback: false
  }
}




export default function Home({ allTagsData, tag }) {
  const prettyTag = `${tag[0].toUpperCase()}${tag.slice(1)}`
  return (
    <Layout>
      <Head>
        <title>{prettyTag} Articles ({allTagsData.length})</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{prettyTag} Articles  ({allTagsData.length})</h2>
        <ul className={utilStyles.list}>
          {allTagsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}