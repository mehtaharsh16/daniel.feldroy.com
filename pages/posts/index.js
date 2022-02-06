import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'

import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Full archive of Daniel Roy Greenfeld</title>
        <meta
          name="description"
          content="Everything written for many years"
        />
        <meta name="og:title" content="Full archive of Daniel Roy Greenfeld" />
        <meta
          property="og:site_name"
          content="Daniel Roy Greenfeld"
        />


        <meta
          property="og:image"
          content="https://daniel.feldroy.com/images/profile.jpg"
        />
        {/* Twitter card tags */}
        <meta name="twitter:title" content="Daniel Roy Greenfeld" />
        <meta
          name="twitter:image"
          content="https://daniel.feldroy.com/images/profile.jpg"
        />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {description &&
                (
                  <>
                    <small className={utilStyles.lightText}>
                      {description}
                    </small>
                    <br />
                  </>
                )
              }
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
