import Head from 'next/head';
import { Container } from '@components/Container';
import PageTitle from '@components/PageTitle';
import { SpriteIcon } from '@components/common/icons/SpriteIcon';
import { SpritesCategories } from '@enums';
import SocialLink from '@components/SocialLink';

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

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contacts - Cátia Barroco</title>
        <meta name="contacts" content="My contacts" />
      </Head>
      <div className="container mx-auto px-32 flex flex-col gap-10">
        <PageTitle>Let's get in touch!</PageTitle>
        <div className="text-base text-zinc-600 dark:text-zinc-400 tracking-wide leading-9">
          <p className="underline">Contact me:</p>
          <p>
            I'm here to provide the information and services you need quickly
            and to answer any questions you may have.{' '}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {socialMedia.map((social) => {
            return (
              <SocialLink
                href={social.href}
                icon={social.icon}
                iconTitle={social.iconTitle}
                textSize="large"
              >
                {social.linkText}
              </SocialLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
