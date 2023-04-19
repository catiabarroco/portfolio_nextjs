import { useRouter } from 'next/router';

export const isRouterPath = (router?: string) => {
  return useRouter().pathname === router;
};
