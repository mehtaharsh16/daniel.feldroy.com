import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Metatags from "../components/metatags";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Random() {
  const { data, error } = useSwr("/api/random", fetcher);

  if (error) return <div>Oops!</div>;
  if (!data) return <div>Randomizing...</div>;
  return <div>{data.value}</div>;
}

export default function Counter() {
  const meta = {
    title: "Randomizer",
    description: "A demonstration of random and API calls",
  };
  return (
    <>
      <Metatags meta={meta} />
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>Randomizer</h1>
        <p>Refresh the page to get a random number from the server.</p>
        <h2>
          <Random />
        </h2>
      </section>
    </>
  );
}
``;
