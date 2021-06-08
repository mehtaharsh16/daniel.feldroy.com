const Feed = require('feed').Feed;
import remark from 'remark'
import html from 'remark-html'
const fs = require('fs');
import { getSortedPostsDataWithHtml } from './posts'

export async function generateRssFeed(tag) {
  if (process.env.NODE_ENV === 'development') {
    return;
  }


  const baseUrl = "https://daniel.feldroy.com";
  const date = new Date();
  const author = {
    name: 'Daniel Roy Greenfeld',
    email: 'daniel@feldroy.com',
    link: 'https://daniel.feldroy.com'
  };

  const feed = new Feed({
    title: `Daniel Feldroy`,
    description: 'Inside the head of Daniel Feldroy (aka Daniel Roy Greenfeld)',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: `${baseUrl}/images/pydanny-cartwheel.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Daniel Roy Greenfeld`,
    updated: date,
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      rss2: `${baseUrl}/feeds/feed.xml`
    },
    author
  });

  const posts = getSortedPostsDataWithHtml().slice(0, 1)

  for (const post of posts) {
    if (tag.length > 0 && post.tags.indexOf(tag) === -1) {
      continue;
    }

    // TODO instead of slug get filename
    const url = `${baseUrl}/posts/${post.slug}`;
    const processedContent = await remark()
      .use(html)
      .process(post.content)
    const contentHtml = processedContent.toString()

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: contentHtml,
      author: [author],
      contributor: [author],
      date: new Date(post.date)
    });
  };

  fs.mkdirSync('./public/feeds', { recursive: true });
  if (tag.length > 0) {
    fs.writeFileSync(`./public/feeds/${tag}.atom.xml`, feed.atom1());
  } else {
    fs.writeFileSync(`./public/feeds/atom.xml`, feed.atom1());
  }
}

export default generateRssFeed;
