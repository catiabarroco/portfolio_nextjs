import URLS from '@utils/PathURL';
import { NavLink } from '@components/NavLink';

export function Footer() {
  return (
    <footer className="mt-32 bg-white dark:bg-brand-secondary-800">
      <div className="container mx-auto px-5 md:px-32">
        <div className="border-t border-brand-secondary-200 pb-16 pt-10 dark:border-zinc-700/40">
          <div className="flex flex-col w-full items-center justify-between gap-4 md:gap-6">
            <div className="flex gap-6 text-sm font-medium text-brand-secondary-800 dark:text-brand-secondary-200">
              <NavLink href={URLS.home()}>Home</NavLink>
              <NavLink href={URLS.about()}>About</NavLink>
              <NavLink href={URLS.projects()}>Projects</NavLink>
              <NavLink href={URLS.articles()}>Articles</NavLink>
              <NavLink href={URLS.contacts()}>Contacts</NavLink>
            </div>
            <p className="text-sm text-brand-secondary-300 flex">
              &copy; {new Date().getFullYear()} Cátia Barroco. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
