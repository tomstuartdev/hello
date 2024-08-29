import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import logo from '../../public/images/logo.png'

export default function Header() {
  return (
    <header className="absolute top-4 md:top-6 w-full z-30 pb-4 md:pb-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-center justify-between gap-x-2 h-12 bg-gradient-to-b from-[#A8FF00] to-[#A8FF00] dark:from-neutral-900/80 dark:to-black/70 rounded-lg px-3 shadow">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 bg-indigo-500/15 dark:bg-neutral-800/50 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)] after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)]"
              aria-hidden="true"
            />
            {/* Site branding */}
            <div className="flex-1">
              {/* Logo */}
              <Link href="/">
                <Image src={logo} className="w-32" alt={""}/>
              </Link>
            </div>
            {/* Navigation links */}
            <nav className="flex justify-center">
              <ul className="flex items-center sm:gap-x-3 text-[0.75rem] uppercase text-[0.875rem] font-medium">
                <li>
                  <Link
                    className="text-gray-800 dark:text-neutral-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800/30 py-1.5 px-3"
                    href="/updates"
                  >
                    Updates
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-neutral-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-neutral-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3"
                    href="/contact"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Light switch */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
