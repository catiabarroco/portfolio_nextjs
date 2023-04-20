import { Inter } from 'next/font/google';
import PageTitle from '@components/PageTitle';
import Image from 'next/image';
import SocialLink from '@components/SocialLink';
import handCoding from '../../public/assets/icons/handCoding.svg';
import { socialMedia, workExperience } from '@constants';
import Head from 'next/head';
import WorkCard from '@components/WorkCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Cátia Barroco</title>
        <meta name="home" content="" />
      </Head>
      <div className="container mx-auto px-5 md:px-32">
        <div className="flex flex-col gap-10 md:gap-20">
          <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 lg:gap-40">
            <div className=" flex flex-col justify-center gap-5 leading-8 tracking-wide">
              <PageTitle>Front-end web development</PageTitle>
              <p className="font-light text-zinc-600 dark:text-zinc-400 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <Image src={handCoding} alt="icon" width={500} height={500} />
          </div>

          <div className="bg-brand-secondary-200 dark:bg-brand-secondary-700 p-6 md:p-0 rounded rounded-lg md:rounded-none md:-mx-32 flex flex-col-reverse lg:flex-row gap-10 lg:gap-0">
            <Image
              src="/assets/imgPerfil.jpeg"
              alt="perfil image"
              width={640}
              height={640}
              className="rounded rounded-lg lg:rounded-none mx-auto"
            />
            <div className="md:px-20 flex flex-col justify-center gap-10 md:gap-7">
              <div className="flex flex-col gap-4 dark:text-brand-secondary-200">
                <h2 className="text-2xl tracking-tight text-brand-secondary-800 dark:text-brand-secondary-200 sm:text-3xl font-light">
                  About me
                </h2>
                <p className="leading-8 tracking-wide text-justify ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="flex gap-4">
                {socialMedia.map(({ href, icon, iconTitle }) => {
                  return (
                    <SocialLink
                      key={icon}
                      href={href}
                      icon={icon}
                      iconTitle={iconTitle}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <PageTitle>Work Experience</PageTitle>
            <div className="grid lg:grid-cols-3 gap-10 md:gap-5">
              {workExperience.map((props, index) => (
                <WorkCard experience={props} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
