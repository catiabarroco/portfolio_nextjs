import { SpriteIcon } from '@components/common/icons/SpriteIcon';
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
  };
};

export default function ProjectCard({
  project: { stacks, title, description, repoLink, linkOnline },
}: ProjectCardProps) {
  return (
    <article className="dark:bg-brand-secondary-700 p-10 rounded rounded-xl flex gap-5 flex-col border dark:border-brand-secondary-700 shadow">
      <div className="flex flex-col gap-4">
        <h1 className="text-brand-primary-medium dark:text-brand-secondary-200">
          {title}
        </h1>
        <Image
          src="/assets/images/projectPortfolio.png"
          alt="project portfolio"
          width={400}
          height={400}
          className="rounded rounded-lg mx-auto"
        />
        <p className="text-brand-secondary-300 dark:text-brand-secondary-300">
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
      </div>

      <div className="flex justify-center gap-5 ">
        <NavLink href={linkOnline} newTab>
          <Button variant="secondaryWhite" rounded size="large">
            Portfolio
          </Button>
        </NavLink>
        <NavLink href={repoLink} newTab>
          <Button variant="secondaryWhite" rounded size="large">
            Repository
          </Button>
        </NavLink>
      </div>
    </article>
  );
}
