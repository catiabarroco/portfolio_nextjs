import { Inter } from 'next/font/google';
import PageTitle from '@components/PageTitle';
import Image from 'next/image';
import imgPerfil from '../../public/assets/imgPerfil.jpeg';
import SocialLink from '@components/SocialLink';
import handCoding from '../../public/assets/icons/handCoding.svg';

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

export default function Home() {
  return (
    <div className="container mx-auto px-32">
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-2 gap-40">
          <div className=" flex flex-col justify-center gap-5 leading-8 tracking-wide">
            <PageTitle>Front-end web development</PageTitle>
            <p className="font-light text-zinc-600 dark:text-zinc-400 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <Image src={handCoding} alt="icon" width={500} height={500} />
        </div>

        <div className="-mx-32 flex">
          <Image src={imgPerfil} alt="perfil image" width={640} height={640} />
          <div className="bg-gray-600 px-20 flex flex-col justify-center gap-20">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl font-light">
                About me
              </h2>
              <p className="leading-8 tracking-wide text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="flex gap-4">
              {socialMedia.map((social) => {
                return (
                  <SocialLink
                    href={social.href}
                    icon={social.icon}
                    iconTitle={social.iconTitle}
                    textSize="large"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
