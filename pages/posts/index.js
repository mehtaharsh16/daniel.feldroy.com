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

// function DisplayYear(currentYear, articleYear){}

export default function Home({ allPostsData }) {
  // let year = allPostsData[0]['date'].slice(0,4)
  // year = parseInt(year, 10)
  // console.log(year+1)
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
        <h1>All Articles ({allPostsData.length})</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              {/* <h2 className={utilStyles.headingLg}>2022</h2> */}
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
