import Image from 'next/image'
import Link from 'next/link'
import ArrowIcon from 'app/components/arrow-icon'


export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 items-center">
            <Link
              key="/"
              href="/"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              <Image
                className="relative dark dark:invert"
                src="/logo_100x100.png"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </Link>
            <Link
              key="linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/nibirbora"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center py-1 px-2 m-1"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">linkedin</p>
            </Link>
            <Link
              key="/rss"
              target="_blank"
              href="/rss"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center py-1 px-2 m-1"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">rss</p>
            </Link>
            <Link
              key="publications"
              target="_blank"
              href="https://scholar.google.com/citations?user=24CLkbsAAAAJ"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center py-1 px-2 m-1"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">publications</p>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
