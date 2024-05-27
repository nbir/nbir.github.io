import { baseUrl } from 'app/sitemap'
import { getBlogPosts, getExternalPosts } from 'app/blog/utils'

function getPostItemString(post) {
  if (post.metadata.url) {
    return `<item>
              <title>${post.metadata.title}</title>
              <link>${post.metadata.url}</link>
              <description>${post.metadata.summary || ''}</description>
              <pubDate>${new Date(
                post.metadata.publishedAt
              ).toUTCString()}</pubDate>
            </item>`
  } else {
    return `<item>
              <title>${post.metadata.title}</title>
              <link>${baseUrl}/blog/${post.slug}</link>
              <description>${post.metadata.summary || ''}</description>
              <pubDate>${new Date(
                post.metadata.publishedAt
              ).toUTCString()}</pubDate>
            </item>`
  }
}

export async function GET() {
  let allBlogs = [...getBlogPosts(), ...getExternalPosts()]

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .map(getPostItemString)
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Nibir Bora</title>
        <link>${baseUrl}</link>
        <description>This is my blog RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
