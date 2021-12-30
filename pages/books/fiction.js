import Head from 'next/head'
import Image from 'next/image'
import Script from "next/script"
import Link from "next/link"

import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'


export default function FictionBooks() {
  return (
    <Layout>
      <Head>
        <title>Fiction Books</title>
        <meta
          name="description"
          content="Fiction books I have written or co-authored"
        />
        <meta property="og:title" content="Fiction books I have written or co-authored" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="
          https://daniel.feldroy.com/books/fiction"
        />
        <meta
          name="og:description"
          content="Fiction books I have written or co-authored"
        />  
        <meta
          name="twitter:description"
          content="Fiction books I have written or co-authored"
        />        
        <meta name="twitter:title" content="Daniel's Fiction Books" />  
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
        <div className={utilStyles.backToHome}>
          <Link href="/books">
              <a>← Back to books</a>
          </Link>
        </div>          
        <h1 className={utilStyles.headingXl}>Fiction Books</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <a target="_blank" href="https://www.amazon.com/kindle-vella/story/B09P5C9V2F">
              <Image
                src="/images/necropolis-2021-12-30.jpg"
                height="360"
                width="360">
              </Image>         
            </a>   
            <h2>Necropolis</h2>
            <p >
              Necropolis is a dystopian horror story where an undead ruler dominates the land. Against her, a rebellion has risen, people fighting against the current order willing to commit the greatest evils in their attempts to win. Thrown into this fight is a young woman named Toma, winning impossible battles thanks to a combination of courage and a destiny she does not want to serve.
            </p>
            <p>This is a serialization of a 40 chapter story written in 2020. New episodes are released every Monday.</p>
            <p>
            <a target="_blank" href="https://www.amazon.com/kindle-vella/story/B09P5C9V2F" rel="nofollow">Read on Kindle Vella</a> 
            </p>
            <hr />
          </li>
          <li className={utilStyles.listItem}>
          <h2>More Fiction Books</h2>
          <p>More of my efforts at writing fiction can be found on <a target="_blank" href="https://www.feldroy.com/fiction">here</a>.</p>

          </li>
        </ul>        
      </article>
    
    </Layout>
  )
}
