import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import MyDate from "../../components/date";

import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const yearsBlogging = new Date().getFullYear() - 2007;

  return {
    props: {
      allPostsData,
      yearsBlogging,
      title: "Full archive of Daniel Roy Greenfeld",
      description: `Everything written by Daniel Roy Greenfeld for the past ${yearsBlogging} years`,
    },
  };
}

export default function Home({ allPostsData, yearsBlogging }) {
  return (
    <>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1>All Articles ({allPostsData.length})</h1>
        <p>
          Everything written by Daniel Roy Greenfeld for the past{" "}
          {yearsBlogging} years
        </p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              {/* <h2 className={utilStyles.headingLg}>2022</h2> */}
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {description && (
                <>
                  <small className={utilStyles.lightText}>{description}</small>
                  <br />
                </>
              )}
              <small className={utilStyles.lightText}>
                <MyDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
