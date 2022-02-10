import PlausibleProvider from 'next-plausible'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
 return (
    <PlausibleProvider domain="daniel.feldroy.com" enabled="true">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
