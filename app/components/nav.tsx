import Link from 'next/link'


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
              className="flex align-middle relative py-1 px-2 m-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100"
                height="100"
                aria-label="Logo"
                className="fill-black dark:fill-white hover:fill-[#8494FF] dark:hover:fill-[#8494FF] transition-colors"
              >
                <path
                  d="M 10 27.5 L 10 32 14 32 L 18 32 18 54.5 L 18 77 27.5 77 L 37 77 37 59 L 37 41 45.5 41 L 54 41 54 59 L 54 77 63.5 77 L 73 77 73 50 L 73 23 41.5 23 L 10 23 10 27.5 M 81 72 L 81 77 86 77 L 91 77 91 72 L 91 67 86 67 L 81 67 81 72"
                  stroke="none"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              key="linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/nibirbora"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center py-1 px-2 m-1"
            >
              <p className="ml-2 h-7">linkedin</p>
            </Link>
            <Link
              key="/rss"
              target="_blank"
              href="/rss"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center py-1 px-2 m-1"
            >
              <p className="ml-2 h-7">rss</p>
            </Link>
            <Link
              key="publications"
              target="_blank"
              href="https://scholar.google.com/citations?user=24CLkbsAAAAJ"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center py-1 px-2 m-1"
            >
              <p className="ml-2 h-7">academia</p>
            </Link>
            <Link
              key="/credly"
              href="/credly"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center py-1 px-2 m-1"
            >
              <p className="ml-2 h-7">credly</p>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
