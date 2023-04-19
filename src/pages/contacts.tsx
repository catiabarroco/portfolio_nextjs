import Head from 'next/head';
import PageTitle from '@components/PageTitle';
import SocialLink from '@components/SocialLink';
import Image from 'next/image';
import contact from '../../public/assets/icons/contact.svg';
import { socialMedia } from '@constants';

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contacts - Cátia Barroco</title>
        <meta name="contacts" content="My contacts" />
      </Head>
      <div className="container mx-auto px-5 md:px-32 flex flex-col gap-10">
        <PageTitle>Let's get in touch!</PageTitle>
        <div className="flex flex-col gap-16">
          <div className="text-base text-zinc-600 dark:text-zinc-400 tracking-wide leading-9">
            <p className="underline">Contact me:</p>
            <p>
              I'm here to provide the information and services you need quickly
              and to answer any questions you may have.{' '}
            </p>
          </div>
          <div className="flex flex-col gap-10 md:flex-row justify-between">
            <div className="flex justify-center flex-col gap-6">
              {socialMedia.map(({ href, icon, iconTitle, linkText }) => {
                return (
                  <SocialLink
                    href={href}
                    icon={icon}
                    iconTitle={iconTitle}
                    textSize="large"
                  >
                    {linkText}
                  </SocialLink>
                );
              })}
            </div>
            <Image src={contact} alt="icon" width={500} height={500} />
          </div>
        </div>
      </div>
    </>
  );
}
