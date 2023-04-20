import { useRouter } from 'next/router';

export const IsRouterPath = (router?: string) => {
  return useRouter().pathname === router;
};
