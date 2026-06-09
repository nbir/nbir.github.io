import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="flex flex-row items-center font-sm mt-8 gap-x-4 text-neutral-600 dark:text-neutral-300">
        <p>© {new Date().getFullYear()} Nibir Bora</p>
        <Link
          key="contact"
          href="mailto:nibirbora@gmail.com"
          className="inline-flex items-center gap-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          <span className="leading-none">✉</span>
          <span>contact</span>
        </Link>
      </div>
    </footer>
  )
}
