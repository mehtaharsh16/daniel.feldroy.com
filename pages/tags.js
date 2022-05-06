import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import MyDate from "../components/date";

import { getAllTags } from "../lib/tags";

export async function getStaticProps() {
  const allTagsData = getAllTags();
  return {
    props: {
      allTagsData,
    },
  };
}

export default function Home({ allTagsData }) {
  const meta = {
    title: "All tags",
  };
  return (
    <Layout home meta={meta}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tags</h2>
        <p className={utilStyles.listItem}>
          {allTagsData.map(({ id, value }) => (
            <>
              <Link href={`/tags/${id}`}>
                <a>
                  {id} ({value})
                </a>
              </Link>{" "}
            </>
          ))}
        </p>
      </section>
    </Layout>
  );
}
