import { NavLink } from '@components/NavLink';
import { menuLinks } from '@constants';
import { IsRouterPath } from '@utils/RouterPath';

export function MenuPages() {
  return (
    <>
      {menuLinks.map(({ href, label }) => (
        <NavLink
          href={href}
          selectedStyle={IsRouterPath(href)}
          style="primaryStyle"
          key={label}
        >
          {label}
        </NavLink>
      ))}
    </>
  );
 }

