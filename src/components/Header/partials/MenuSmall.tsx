import { Menu } from '@headlessui/react';
import { SpriteIcon } from '@components/common/SpriteIcon';
import { SpritesCategories } from '@enums';
import { menuLinks } from '@constants/Menu';

export function MenuSmall() {
  return (
    <div className="flex lg:hidden flex-col w-3/4">
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
              {menuLinks.map(({ href, label }) => (
                <Menu.Item
                  as="a"
                  key={href}
                  href={href}
                  className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black hover:text-brand-primary"
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
