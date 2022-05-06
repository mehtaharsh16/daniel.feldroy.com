import Image from "next/image";
import Link from "next/link";

import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function FictionBooks() {
  const meta = {
    title: "Daniel's Fiction Books",
    description: "Fiction books I have written or co-authored",
    og_url: "https://daniel.feldroy.com/books/fiction",
  };
  return (
    <Layout meta={meta}>
      <article>
        <div className={utilStyles.backToHome}>
          <Link href="/books">
            <a>← Back to books</a>
          </Link>
        </div>
        <h1 className={utilStyles.headingXl}>Fiction Books</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <a
              target="_blank"
              href="https://www.amazon.com/kindle-vella/story/B09P5C9V2F"
            >
              <Image
                src="/images/necropolis-2021-12-30.jpg"
                height="360"
                width="360"
              ></Image>
            </a>
            <h2>Necropolis</h2>
            <p>
              Necropolis is a dystopian horror story where an undead ruler
              dominates the land. Against her, a rebellion has risen, people
              fighting against the current order willing to commit the greatest
              evils in their attempts to win. Thrown into this fight is a young
              woman named Toma, winning impossible battles thanks to a
              combination of courage and a destiny she does not want to serve.
            </p>
            <p>
              Cover by{" "}
              <a target="_blank" href="https://xeroproject.com/">
                Jamie Kashetta
              </a>
              .
            </p>
            <p>
              This is a serialization of a 40 chapter story written in 2020. New
              episodes are released every Monday.
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.amazon.com/kindle-vella/story/B09P5C9V2F"
                rel="nofollow"
              >
                Read on Kindle Vella
              </a>
            </p>
            <hr />
          </li>
          <li className={utilStyles.listItem}>
            <h2>More Fiction Books</h2>
            <p>
              More of my efforts at writing fiction can be found on{" "}
              <a target="_blank" href="https://www.feldroy.com/fiction">
                here
              </a>
              .
            </p>
          </li>
        </ul>
      </article>
    </Layout>
  );
}
