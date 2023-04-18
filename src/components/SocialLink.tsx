import clsx from 'clsx';
import Link from 'next/link';
import { SpritesCategories } from '@enums';
import { SpriteIcon } from '@components/common/icons/SpriteIcon';
import { ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  children: ReactNode;
  icon: string;
  iconTitle: string;
};

export default function SocialLink({
  href,
  children,
  icon,
  iconTitle,
}: SocialLinkProps) {
  return (
    <div className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500 font-light"
      >
        <SpriteIcon
          category={SpritesCategories.SOCIAL}
          name={icon}
          size="xl"
          title={iconTitle}
          className="text-zinc-400 dark:text-zinc-500"
        />
        <span className="ml-4 ">{children}</span>
      </Link>
    </div>
  );
}
