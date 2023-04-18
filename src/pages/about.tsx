import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@components/Container';
import imgPerfil from '../../public/assets/imgPerfil.jpeg';
import SocialLink from '@components/SocialLink';
import PageTitle from '@components/PageTitle';

const socialMedia = [
  {
    href: '#',
    icon: 'twitter',
    iconTitle: 'twitter',
    linkText: 'Follow on Twitter',
  },
  {
    href: '#',
    icon: 'instagram',
    iconTitle: 'instagram',
    linkText: 'Follow on Instagram',
  },
  {
    href: '#',
    icon: 'github',
    iconTitle: 'Git Hub',
    linkText: 'Follow on GitHub',
  },
  {
    href: '#',
    icon: 'linkedin',
    iconTitle: 'linkedin',
    linkText: 'Follow on LinkedIn',
  },
  {
    href: 'mailto:catiabarroco@gmail.com',
    icon: 'gmail',
    iconTitle: 'email',
    linkText: 'catiabarroco@gmail.com',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About - Cátia Barroco</title>
        <meta
          name="description"
          content="  I’m Cátia Barroco. I live in Portugal."
        />
      </Head>
      <Container className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={imgPerfil}
                alt="perfil image"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <PageTitle className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Cátia Barroco. I live in Portugal.
            </PageTitle>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 tracking-wide leading-9">
              <h2 className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl font-light">
                My Story
              </h2>
              <p className="font-light">
                It all started in August 2015, when I finished my degree in
                Renewable Energy Engineering. At that time, I knew very little
                about programming, only what I had learned about C language
                during the Engineering degree. However I had always had a huge
                desire to learn more because I loved that whole concept of "see
                it happening" in the middle of "if's and else's and while's" and
                it was a fantastic experience. But this was not my area of
                specialization and I worked until September 2021 in the field of
                engineering projects in energy efficiency and then I worked in
                telecommunications at the multinational Visabeira.
              </p>
              <h2 className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl font-light">
                Why I change my carreer?
              </h2>
              <p className="font-light">
                With the coronavirus pandemic and the obligation to work from
                home, I had free time to work on some new hobbies. I started
                studying Python and then HTML, CSS and JavaScript, and once
                again I fell in love with the concept of programming. After a
                while I decided to dedicate all my time to becoming a front-end
                developer. I quit my job and joined SheCodes Workshops.
              </p>
            </div>
          </div>
          <div className="lg:pl-20 flex flex-col gap-4 ">
            {socialMedia.map((social) => {
              return (
                <SocialLink
                  href={social.href}
                  icon={social.icon}
                  iconTitle={social.iconTitle}
                >
                  {social.linkText}
                </SocialLink>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
