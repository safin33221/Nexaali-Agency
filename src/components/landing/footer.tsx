export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-background pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a
              href="#top"
              className="font-display mb-6 block text-3xl font-bold tracking-tighter text-white"
            >
              NEXAALI<span className="text-accent-blue">.</span>
            </a>
            <p className="max-w-sm leading-relaxed text-gray-400">
              A premium creative branding &amp; digital growth agency helping
              modern businesses dominate their market.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="transition-colors hover:text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#packages" className="transition-colors hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#why-us" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="mailto:hello@nexaali.com"
                  className="transition-colors hover:text-white"
                >
                  hello@nexaali.com
                </a>
              </li>
              <li>
                <a href="#cta" className="transition-colors hover:text-white">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex gap-4 pt-4">
                <a
                  href="#top"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
                >
                  <span className="sr-only">X</span>
                  X
                </a>
                <a
                  href="#top"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
                >
                  <span className="sr-only">Instagram</span>
                  In
                </a>
                <a
                  href="#top"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
                >
                  <span className="sr-only">LinkedIn</span>
                  Li
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Nexaali Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
