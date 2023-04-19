import Link from 'next/link';

import URLS from '@utils/PathURL';

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <div className="container mx-auto px-32">
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <div>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href={URLS.home()}>Home</NavLink>
                <NavLink href={URLS.about()}>About</NavLink>
                <NavLink href={URLS.projects()}>Projects</NavLink>
                <NavLink href={URLS.articles()}>Articles</NavLink>
                <NavLink href={URLS.contacts()}>Contacts</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Cátia Barroco. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
