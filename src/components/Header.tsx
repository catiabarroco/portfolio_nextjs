import URLS from '@utils/PathURL';
import { NavLink } from '@components/NavLink';
import Image from 'next/image';

import { isRouterPath } from '@utils/RouterPath';
import { ModeToggle } from '@components/ModeToggle';

export function Header() {
  return (
    <header className="pt-10 pb-20">
      <div className="container mx-auto px-5 md:px-32 dark:text-white flex justify-between">
        <NavLink href={URLS.home()}>
          <Image
            src="/assets/imgPerfil.jpeg"
            alt="perfil image"
            width={64}
            height={64}
            className={`rounded rounded-full ${
              isRouterPath(URLS.home()) ? 'p-1 bg-brand-primary-medium' : ''
            }`}
          />
        </NavLink>

        <div className="hidden md:flex rounded-full py-3 px-5 gap-10 border shadow shadow-md dark:bg-brand-secondary-700 font-light items-center">
          <NavLink
            href={URLS.about()}
            selectedStyle={isRouterPath(URLS.about())}
            style="primaryStyle"
          >
            About
          </NavLink>
          <NavLink
            href={URLS.projects()}
            selectedStyle={isRouterPath(URLS.projects())}
            style="primaryStyle"
          >
            Projects
          </NavLink>
          <NavLink
            href={URLS.articles()}
            selectedStyle={isRouterPath(URLS.articles())}
            style="primaryStyle"
          >
            Articles
          </NavLink>
          <NavLink
            href={URLS.contacts()}
            selectedStyle={isRouterPath(URLS.contacts())}
            style="primaryStyle"
          >
            Contacts
          </NavLink>
        </div>

        <ModeToggle />
      </div>
    </header>
  );
}
