import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-background pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display mb-6 block text-3xl font-bold tracking-tighter text-white"
            >
              SOFTILO<span className="text-accent-blue">.</span>
            </Link>
            <p className="max-w-sm leading-relaxed text-gray-400">
              A premium creative branding &amp; digital growth agency helping
              modern businesses dominate their market.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/#services" className="transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="transition-colors hover:text-white">
                  Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="transition-colors hover:text-white">
                  Pricing Packages
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Contact &amp; Inquiries</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="mailto:hello@softilo.com"
                  className="transition-colors hover:text-white"
                >
                  hello@softilo.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Book a Consultation
                </Link>
              </li>
              <li className="flex gap-4 pt-4">
                <Link
                  href="/"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xs font-semibold transition-colors hover:bg-white/10"
                >
                  <span className="sr-only">X</span>
                  X
                </Link>
                <Link
                  href="/"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xs font-semibold transition-colors hover:bg-white/10"
                >
                  <span className="sr-only">Instagram</span>
                  In
                </Link>
                <Link
                  href="/"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xs font-semibold transition-colors hover:bg-white/10"
                >
                  <span className="sr-only">LinkedIn</span>
                  Li
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Softilo Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
