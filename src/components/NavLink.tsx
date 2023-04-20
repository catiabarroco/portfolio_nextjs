import Link from 'next/link';
import { ReactNode } from 'react';

type NaveLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: keyof typeof styleSelectedVariant;
  selectedStyle?: boolean;
  newTab?: boolean;
};

const styleSelectedVariant = {
  primaryStyle: 'text-brand-primary font-semibold',
  default: '',
} as const;

export function NavLink({
  href,
  children,
  className = '',
  style = 'default',
  selectedStyle = false,
  newTab = false,
}: NaveLinkProps) {
  const selectStyle = selectedStyle ? styleSelectedVariant[style] : '';

  return (
    <Link
      href={href}
      className={`${className} ${selectStyle}`}
      target={newTab ? '_blank' : ''}
    >
      {children}
    </Link>
  );
}
