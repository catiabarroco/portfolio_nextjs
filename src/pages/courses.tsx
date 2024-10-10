import Head from 'next/head';
import PageTitle from '@components/PageTitle';
import { coursesList } from '@constants/Courses';
import { NavLink } from '@components/NavLink';
import { SpriteIcon } from '@components/common/SpriteIcon';
import { SpritesCategories } from '@enums/SpritesCategories';
import CoursesCard from '@components/CoursesCard';

export default function Courses() {
  return (
    <>
      <Head>
        <title>Courses - Cátia Barroco</title>
        <meta name="courses" content="My Courses" />
      </Head>
      <div className="container mx-auto px-5 md:px-32">
      <div className="flex flex-col gap-6 mb-16">
          <PageTitle>Continuous Learning: My Journey in Programming</PageTitle>
          <p className="font-light dark:text-brand-secondary-300">
          A curated list of programming courses that sharpened my expertise, driving me to push boundaries and stay at the cutting edge of technology.
          </p>
        </div>
      {/* <div className="container mx-auto px-5 md:px-32">
        <div className="flex flex-col gap-6 mb-16">
          <PageTitle>My Path <span className='text-red-400 '>(Page under development...)</span></PageTitle>
          <p className="font-light dark:text-brand-secondary-300">
             Explore my courses i did
          </p>
        </div>

               <div className="flex flex-col gap-16">
          {coursesList.map(({ href, platform, title, description, notes, repository }, index) => {
            return (
              <article
                key={index}
                className="md:border-l md:border-brand-secondary-200 md:pl-6 md:dark:border-zinc-700/40 flex gap-5 max-w-6xl"
              >
                <div className="text-brand-secondary-700 dark:text-brand-secondary-300 w-1/3 pt-7">
                  {platform}
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
                    <span>Go to Course</span>
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


      </div> */}
      <div className="container flex flex-col gap-5">
        {coursesList.map((props, index) => {
          return <CoursesCard course={props} key={index} />;
        })}
      </div>
      </div>
    </>
  );
}
