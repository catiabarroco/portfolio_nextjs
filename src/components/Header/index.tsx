import URLS from '@utils/PathURL';
import { NavLink } from '@components/NavLink';
import Image from 'next/image';

import { IsRouterPath } from '@utils/RouterPath';
import { ModeToggle } from '@components/ModeToggle';
import { MenuSmall } from '@components/Header/partials/MenuSmall';
import { menuLinks } from '@constants';
import { MenuPages } from '@components/MenuPages';

export function Header() {
  return (
    <header className="pt-10 pb-20">
      <div className="container lg:items-center mx-auto px-5 md:px-32 dark:text-white flex justify-between">
        <NavLink href={URLS.home()} className="hidden lg:flex">
          <Image
            src="/assets/images/perfilPicture.jpeg"
            alt="perfil image"
            width={64}
            height={64}
            className={`rounded rounded-full ${
              IsRouterPath(URLS.home()) ? 'p-1 bg-brand-primary-medium' : ''
            }`}
          />
        </NavLink>

        <div className="hidden lg:flex rounded-full py-2 px-6 gap-7 border shadow shadow-md dark:bg-brand-secondary-700 font-light items-center">
          <MenuPages />
        </div>

        <MenuSmall />

        <ModeToggle />
      </div>
    </header>
  );
}
