import URLS from '@utils/PathURL';
import { NavLink } from '@components/NavLink';
import Image from 'next/image';

import { isRouterPath } from '@utils/RouterPath';
import { ModeToggle } from '@components/ModeToggle';
import { Menu } from '@headlessui/react';
import { SpriteIcon } from '@components/common/icons/SpriteIcon';
import { SpritesCategories } from '@enums';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/projects', label: 'Projects' },
  { href: '/articles', label: 'Articled' },
  { href: '/contacts', label: 'Contacts' },
];

function MyMenu() {
  return (
    <div className="flex md:hidden flex-col w-3/4">
      <Menu>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center rounded-full py-2 border shadow shadow-md dark:bg-brand-secondary-700 font-light w-1/3">
            <Menu.Button>
              <div className="flex gap-1">
                <span>Menu</span>
                <span className="flex items-center">
                  <SpriteIcon
                    category={SpritesCategories.CHEVRON}
                    name="down"
                    size="sm"
                    title="menu"
                  />
                </span>
              </div>
            </Menu.Button>
          </div>

          <Menu.Items>
            <div className="flex flex-col gap-2 border rounded rounded-lg shadow shadow-md dark:bg-brand-secondary-700 font-light p-5">
              {links.map(({ href, label }) => (
                <Menu.Item
                  as="a"
                  key={href}
                  href={href}
                  className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black hover:bg-brand-primary rounded rounded-md"
                >
                  {label}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </div>
      </Menu>
    </div>
  );
}

export function Header() {
  return (
    <header className="pt-10 pb-20">
      <div className="container mx-auto px-5 md:px-32 dark:text-white flex justify-between">
        <NavLink href={URLS.home()} className="hidden md:flex">
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

        <MyMenu />
        <ModeToggle />
      </div>
    </header>
  );
}
