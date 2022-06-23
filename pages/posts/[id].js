import Link from "next/link";
import Head from "next/head";

import { getAllPostIds, getPostData } from "../../lib/posts";
import MyDate from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import "highlight.js/styles/gml.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const domain = "https://daniel.feldroy.com/";
  const meta = {
    title: postData.title,
    description: postData.description,
    image: postData.image,
    twitter_image: postData.twitter_image,
    og_url: `https://daniel.feldroy.com/posts/${postData.id}`,
  };
  return (
    <>
      <Head>
        <title>{meta.title ? meta.title : "Daniel Roy Greenfeld"}</title>
        <meta
          content={
            meta.description
              ? meta.description
              : "Inside the head of Daniel Roy Greenfeld"
          }
          name="description"
        />
        <meta
          content={
            meta.description
              ? meta.description
              : "Inside the head of Daniel Roy Greenfeld"
          }
          name="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Daniel Roy Greenfeld" />
        <meta
          property="og:url"
          content={meta.og_url ? meta.og_url : "https://daniel.feldroy.com"}
        />
        <meta name="twitter:site" content="@pydanny" />
        <meta name="twitter:creator" content="@pydanny" />
        <meta
          name="twitter:title"
          content={meta.title ? meta.title : "Daniel Roy Greenfeld"}
        />
        {meta.image ? (
          <>
            <meta
              property="og:image"
              content={`https://daniel.feldroy.com${meta.image}`}
            />
          </>
        ) : (
          <>
            <meta
              property="og:image"
              content="https://daniel.feldroy.com/images/profile.jpg"
            />
          </>
        )}
        {meta.twitter_image ? (
          <meta
            name="twitter:image"
            content={`https://daniel.feldroy.com${meta.twitter_image}`}
          />
        ) : (
          <meta
            name="twitter:image"
            content="https://daniel.feldroy.com/images/profile.jpg"
          />
        )}
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <MyDate dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <section>
          <hr />
          Tags:
          {postData.tags.map((tag) => (
            <span key={tag}>
              {" "}
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </span>
          ))}
        </section>
      </article>
    </>
  );
}
