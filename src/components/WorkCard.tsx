import { SpriteIcon } from '@components/common/icons/SpriteIcon';
import { SpritesCategories } from '@enums';
import { NavLink } from '@components/NavLink';

type WorkCardProps = {
  experience: {
    href: string;
    iconName: string;
    iconTitle: string;
    iconClassName: string;
    companyName: string;
    companyDescription: string;
    companyLink: string;
  };
};

export default function WorkCard({
  experience: {
    href,
    companyDescription,
    companyName,
    companyLink,
    iconName,
    iconClassName,
    iconTitle,
  },
}: WorkCardProps) {
  return (
    <NavLink href={href} newTab>
      <article className="hover:bg-brand-secondary-200 h-full dark:hover:bg-brand-secondary-700 border dark:border-brand-secondary-700  p-10 rounded rounded-xl flex gap-5 flex-col shadow">
        <div className="p-1.5 h-12 w-12 bg-brand-secondary-700 rounded-full flex items-center justify-center">
          <SpriteIcon
            category={SpritesCategories.COMMON}
            name={iconName}
            title={iconTitle}
            className={iconClassName}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-brand-primary-medium dark:text-brand-secondary-200">
            {companyName}
          </h3>
          <p className="text-brand-secondary-300 dark:text-brand-secondary-300">
            {companyDescription}
          </p>
        </div>

        <p className="flex gap-2 text-brand-primary-medium dark:text-brand-secondary-200 mt-auto">
          <SpriteIcon
            category={SpritesCategories.COMMON}
            name="link"
            title="copy link"
            size="xl"
          />
          <span>{companyLink}</span>
        </p>
      </article>
    </NavLink>
  );
}
