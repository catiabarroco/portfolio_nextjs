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
  project: { stacks, title, description, repoLink, linkOnline, imgSrc },
}: ProjectCardProps) {
  return (
    <article className="dark:bg-brand-secondary-700 rounded rounded-xl flex gap-5 flex-col border dark:border-brand-secondary-700 shadow">
      <section className="w-full">
        <Image
          src={imgSrc}
          alt={title}
          width={900}
          height={900}
          className="rounded rounded-t-lg mx-auto"
        />
      </section>
      <section className="flex flex-col gap-4 px-10 pb-5 h-full">
        <h1 className="text-brand-primary-medium dark:text-brand-secondary-200">
          {title}
        </h1>
        <p className="text-brand-secondary-300 dark:text-brand-secondary-300 text-sm">
          {description}
        </p>
        <div className="flex gap-2">
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

        <footer className="flex justify-center gap-5 mt-auto">
          <NavLink href={linkOnline} newTab>
            <Button variant="secondaryWhite" rounded size="large">
              Online Link
            </Button>
          </NavLink>
          <NavLink href={repoLink} newTab>
            <Button variant="secondaryWhite" rounded size="large">
              Repository
            </Button>
          </NavLink>
        </footer>
      </section>
    </article>
  );
}
