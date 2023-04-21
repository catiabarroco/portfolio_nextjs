import { Stacks } from '@enums/Stacks';

export const projectsList = [
  {
    title: 'My Portfolio',
    imgSrc: '/assets/images/projectPortfolio.png',
    linkOnline: 'https://portfolio-nextjs-sand.vercel.app/',
    repoLink: 'https://github.com/catiabarroco/portfolio_nextjs',
    stacks: [
      Stacks.HTML,
      Stacks.CSS,
      Stacks.JAVASCRIPT,
      Stacks.REACT,
      Stacks.TAILWIND,
      Stacks.TYPESCRIPT,
    ],
    description:
      'Showcasing My Professional Journey: A Portfolio Presentation.',
  },
  {
    title: 'ReactJS Fundamentals',
    imgSrc: '/assets/images/projectIgnite22-01.png',
    linkOnline: 'https://rs-ignite22-proj1.vercel.app/',
    repoLink: 'https://github.com/catiabarroco/rs-ignite22-proj1',
    stacks: [
      Stacks.HTML,
      Stacks.CSS,
      Stacks.JAVASCRIPT,
      Stacks.REACT,
      Stacks.TAILWIND,
      Stacks.TYPESCRIPT,
    ],
    description:
      'React application with React concepts: componentization, properties, states, immutability and hooks.',
  },
];
