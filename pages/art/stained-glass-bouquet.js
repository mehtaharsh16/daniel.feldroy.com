import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@audreyr/stained-glass-bouquet";
import Layout from "../../components/layout";
import Head from "next/head";

function StainedGlassBouquet() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, Inspector.into(ref.current));
    return () => runtime.dispose();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Stained Glass Bouquet by Audrey Roy Greenfeld</title>
        <meta
          name="description"
          content="Audrey says, 'Here I add x and y scaling factors. Setting only the y scale value results in a bouquet of circles. Color scheme offset of 5 for schemeAccent and opacity 0.8 looks like stained glass.'"
        />
      </Head>
      <div ref={ref} />
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/@audreyr/stained-glass-bouquet">
          Stained Glass Bouquet by Audrey Roy Greenfeld
        </a>
      </p>
    </Layout>
  );
}

export default StainedGlassBouquet;
