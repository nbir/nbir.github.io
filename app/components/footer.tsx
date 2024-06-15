import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="flex flex-row items-center font-sm mt-8 space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <p className="h-7">
          © {new Date().getFullYear()} Nibir Bora
        </p>
        <Link
            key="contact"
            href="mailto:nibirbora@gmail.com"
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center"
          >
            ✉
            <p className="ml-2 h-7">contact</p>
          </Link>
      </div>
    </footer>
  )
}
