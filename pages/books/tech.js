import Head from 'next/head'
import Image from 'next/image'
import Script from "next/script"

import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'


export default function TechBooks() {
  return (
    <Layout>
      <Head>
        <title>Tech Books</title>
        <meta
          name="description"
          content="Technical books I have co-written"
        />
        <meta property="og:title" content="Technical books I have co-written" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="
          https://daniel.feldroy.com/books/tech"
        />
        <meta
          name="og:description"
          content="With Audrey, I co-write dairy-themed technical books."
        />  
        <meta
          name="twitter:description"
          content="With Audrey, I co-write dairy-themed technical books."
        />        
        <meta name="twitter:title" content="With Audrey, I co-write dairy-themed technical books." />  
        <meta
          property="og:image"
          content="https://daniel.feldroy.com/images/profile.jpg"
        />
        <meta
          name="twitter:image"
          content="https://daniel.feldroy.com/images/profile.jpg"
        />            


      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Tech Books I Have Co-Authored</h1>
        <p>With Audrey, I co-write dairy-themed technical books.</p>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Image
              src="/images/Two-Scoops-of-Django-3-Alpha-Cover_1080x.jpg"
              height="514"
              width="360">
            </Image>            
            <h2>Two Scoops of Django 3.x </h2>
            <p >
              The 4th edition of Two Scoops of Django is out. With over 500 pages of material, you'll find best practices that will improve all your Django projects.
            </p>
            <p>
            <a href="https://transactions.sendowl.com/packages/772159/A329F48B/purchase" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/buy-now.png" /></a> 
            </p>
            <hr />
          </li>

          <li className={utilStyles.listItem}>
            <Image
              src="/images/AWOD-2021-06-29-8x10-Wedge-Front_1080x.png"
              height="450"
              width="360">
            </Image>            
            <h2>A Wedge of Django</h2>
            <p >
              Our guided walkthrough tutorial where we build a real  production-quality Django web application from the ground up.
            </p>
            <p>
            <a href="https://transactions.sendowl.com/packages/754641/749E0298/purchase" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/buy-now.png" /></a> 
            </p>
          </li>

        </ul>
        <Script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" strategy="afterInteractive"></Script>          
      </article>
    
    </Layout>
  )
}
