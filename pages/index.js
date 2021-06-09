import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'
import generateRssFeed from '../lib/rss'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  // render blog posts
  await generateRssFeed('django');
  await generateRssFeed('python');
  await generateRssFeed('');
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Daniel Roy Greenfeld</title>
        <meta
          name="description"
          content="Inside the head of Daniel Roy Greenfeld (aka Daniel Feldroy)"
        />
        <meta name="og:title" content="Daniel Roy Greenfeld" />
        <meta
          property="og:site_name"
          content="Daniel Roy Greenfeld"
        />


        <meta
          property="og:image"
          content="https://daniel.feldroy.com/images/profile.jpg"
        />
        {/* Twitter card tags */}
        <meta name="twitter:title" content="Daniel Feldroy" />
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
