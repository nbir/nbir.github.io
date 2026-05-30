import Image from 'next/image'
import Link from 'next/link'
import { formatDate, getBlogPosts, getExternalPosts } from 'app/blog/utils'
import ArrowIcon from 'app/components/arrow-icon'

function PostCard({ post, href, external }) {
  const image = post.metadata.image

  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      className="flex flex-col mb-8"
    >
      <div className="flex items-center gap-2 mb-1">
        <p className="text-neutral-900 dark:text-neutral-100 font-medium tracking-tight">
          {post.metadata.title}
        </p>
        {external && <ArrowIcon />}
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
        {formatDate(post.metadata.publishedAt, false)}
      </p>

      {image ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-video">
            <Image
              src={image}
              alt={post.metadata.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {post.metadata.summary}
          </p>
        </div>
      ) : (
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.metadata.summary}
        </p>
      )}
    </Link>
  )
}

export function BlogPosts() {
  const allBlogs = [...getBlogPosts(), ...getExternalPosts()]
    .sort((a, b) =>
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
    )

  return (
    <div>
      {allBlogs.map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          href={post.metadata.url || `/blog/${post.slug}`}
          external={!!post.metadata.url}
        />
      ))}
    </div>
  )
}
