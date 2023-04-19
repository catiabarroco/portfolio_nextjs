import clsx from 'clsx';
import Link from 'next/link';
import { SpritesCategories } from '@enums';
import { SpriteIcon } from '@components/common/icons/SpriteIcon';
import { ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  children?: ReactNode;
  icon: string;
  iconTitle: string;
  textSize?: keyof typeof textSizeVariants;
};

const textSizeVariants = {
  xsmall: 'text-xs', // 12px
  small: 'text-s,', // 14px
  medium: 'text-base', //16px
  large: 'text-lg', // 18px
  extraLarge: 'text-xl', // 20px
} as const;

export default function SocialLink({
  href,
  children,
  icon,
  iconTitle,
  textSize = 'medium',
}: SocialLinkProps) {
  const textSizeValue = textSizeVariants[textSize];
  return (
    <div className="flex">
      <Link
        href={href}
        className="group flex text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <SpriteIcon
          category={SpritesCategories.SOCIAL}
          name={icon}
          size="xl"
          title={iconTitle}
          className="text-zinc-400 dark:text-zinc-500"
        />
        <span className={`ml-4 ${textSizeValue}`}>{children}</span>
      </Link>
    </div>
  );
}
