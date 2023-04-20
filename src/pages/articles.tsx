import PageTitle from '@components/PageTitle';
import { articlesList } from '@constants';
import Head from 'next/head';
import { NavLink } from '@components/NavLink';
import { SpritesCategories } from '@enums';
import { SpriteIcon } from '@components/common/icons/SpriteIcon';

export default function Articles() {
  return (
    <>
      <Head>
        <title>Articles - Cátia Barroco</title>
        <meta name="articled" content="My Articles" />
      </Head>
      <div className="container mx-auto px-5 md:px-32">
        <div className="flex flex-col gap-6 mb-16">
          <PageTitle>The Coding Corner</PageTitle>
          <p className="font-light dark:text-brand-secondary-300">
            Explore my collection of articles. Delve into a chronologically
            ordered archive of my thoughts and insights on these topics,
            providing a comprehensive view of my growth and development as a
            professional.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          {articlesList.map(({ href, date, title, description }) => {
            return (
              <article className="md:border-l md:border-brand-secondary-200 md:pl-6 md:dark:border-zinc-700/40 flex gap-5 max-w-6xl">
                <div className="text-brand-secondary-700 dark:text-brand-secondary-300 w-1/3 pt-7">
                  {date}
                </div>
                <NavLink
                  href={href}
                  newTab
                  className="flex flex-col gap-4 group flex transition hover:bg-brand-secondary-200 dark:hover:bg-brand-secondary-700 rounded-2xl p-5"
                >
                  <h2 className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl font-light">
                    {title}
                  </h2>
                  <div className="text-sm font-light text-brand-secondary-700 dark:text-brand-secondary-300 ">
                    {description}
                  </div>
                  <p className="text-brand-primary items-center flex gap-2">
                    <span>Read article</span>
                    <SpriteIcon
                      category={SpritesCategories.CHEVRON}
                      name="right"
                      size="sm"
                      title="menu"
                    />
                  </p>
                </NavLink>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
