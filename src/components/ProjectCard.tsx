import { SpriteIcon } from '@components/common/SpriteIcon';
import { SpritesCategories, Stacks } from '@enums';
import { NavLink } from '@components/NavLink';
import Button from '@components/common/Button';
import Image from 'next/image';

type ProjectCardProps = {
    project: {
      title: string;
      repoLink: string;
      stacks: Stacks[];
      description: string;
      linkOnline: string;
      imgSrc: string;
    };
  };
  



export default function ProjectCard({
  project: { title, description, repoLink, linkOnline, stacks, imgSrc  },
}: ProjectCardProps) {
  return (
    <article className="rounded gap-5 p-5 items-center border dark:border-brand-secondary-700 shadow">
     <section className='flex flex-col gap-4 md:flex-row md:gap-10'>
      <section className="w-full basis-1/4 rounded place-content-center">
          <Image
            src={imgSrc}
            alt={title}
            width={900}
            height={900}
            className='rounded-xl'
          />
        </section>
        <section className="flex flex-col gap-4 h-full w-full">
  
              <h1 className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl font-light ">
                {title}
              </h1>
              <p className="text-brand-secondary-700 dark:text-brand-secondary-300 text-sm text-justify">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 ">
            {stacks.map((stack) => {
              return (
                <SpriteIcon
                  category={SpritesCategories.STACK}
                  name={stack}
                  title={stack}
                  size="xl"
                  className="text-brand-secondary-700 dark:text-brand-secondary-300"
                  key={stack}
                />
              );
            })}
          </div>


        
          <footer className="flex gap-5 text-brand-primary border-t-2 border-brand-secondary-700 dark:border-brand-secondary-300 pt-4 ">
            <NavLink
              href={linkOnline}
              newTab
            >
              <SpriteIcon
                category={SpritesCategories.COMMON}
                name="link"
                size="xl"
                title="link"
              />
            </NavLink>
            <NavLink href={repoLink} newTab>
              <SpriteIcon
                category={SpritesCategories.SOCIAL}
                name="github"
                title="github"
                size="xl"
                key="github"
              />
            </NavLink>
          </footer>
        </section>

     </section>
    </article>
  );
}
