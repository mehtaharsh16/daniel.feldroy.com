import Head from 'next/head'

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  const domain = "https://daniel.feldroy.com/"
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta
          name="description"
          content={postData.description}
        />
        <meta property="og:title" content={postData.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://daniel.feldroy.com/posts/${postData.id}`}
        />

        {postData.description ?
          (
            <meta
              name="og:description"
              content={postData.description}
            />
          ) : (
            <meta
              name="og:description"
              content="Inside the Head of Daniel Roy Greenfeld (aka Daniel Feldroy)"
            />
          )
        }


        {/* Twitter card tags */}
        <meta name="twitter:title" content={postData.title} />


        {postData.image ?
          (
            <>
              <meta
                property="og:image"
                content={`https://daniel.feldroy.com${postData.image}`}
              />
              <meta
                name="twitter:image"
                content={`https://daniel.feldroy.com${postData.image}`}
              />
            </>
          ) : (
            <>
              <meta
                property="og:image"
                content="https://daniel.feldroy.com/images/profile.jpg"
              />
              <meta
                name="twitter:image"
                content="https://daniel.feldroy.com/images/profile.jpg"
              />
            </>
          )
        }




        {/* Twitter card tags */}
        <meta
          name="twitter:description"
          content={postData.description}
        />

      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <section>
          <hr />
          Tags:
          {postData.tags.map((tag) => (
          <span key={tag}>{' '}{tag}</span>
        ))}
        </section>
      </article>
    </Layout>
  )
}
