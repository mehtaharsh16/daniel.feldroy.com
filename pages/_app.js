import Layout, { siteTitle } from "../components/layout";
import PlausibleProvider from "next-plausible";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="daniel.feldroy.com" enabled="true">
      <Layout
        meta={pageProps.markdoc ? pageProps.markdoc.frontmatter : pageProps}
      >
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  );
}
