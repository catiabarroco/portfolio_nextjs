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
      <div className="container flex flex-col gap-5">
        {coursesList.map((props, index) => {
          return <CoursesCard course={props} key={index} />;
        })}
      </div>
      </div>
    </>
  );
}
