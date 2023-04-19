import { SpriteIcon } from '@components/common/icons/SpriteIcon';
import { SpritesCategories } from '@enums';
import { NavLink } from '@components/NavLink';

export default function WorkCard() {
  return (
    <NavLink href="https://www.wtx.com">
      <div className="hover:bg-brand-secondary-200 dark:hover:bg-brand-secondary-700 p-10 rounded rounded-xl flex gap-5 flex-col">
        <div className="h-12 w-12 bg-brand-secondary-700 rounded-full flex items-center justify-center">
          <SpriteIcon
            category={SpritesCategories.COMMON}
            name="wtx-icon"
            // size="xl"
            title="wtx icon"
            className="h-10 w-10"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-brand-primary-medium dark:text-brand-secondary-200">
            WTX
          </div>
          <div className="text-brand-secondary-700 dark:text-brand-secondary-300">
            Changing the way truck's are traded over the globe by simplifying
            the process while adding more security and efficiency
          </div>
        </div>

        <div className="flex gap-2 text-brand-primary-medium dark:text-brand-secondary-200">
          <SpriteIcon
            category={SpritesCategories.COMMON}
            name="link"
            title="copy link"
            size="xl"
          />
          <div>wtx.com</div>
        </div>
      </div>
    </NavLink>
  );
}
