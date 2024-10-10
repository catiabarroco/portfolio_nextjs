import Head from 'next/head';
import ProjectCard from '@components/ProjectCard';
import { projectsList, workExperience } from '@constants';
import PageTitle from '@components/PageTitle';

export default function Projects() {
  return (
    <>
      <Head>
        <title>About - Cátia Barroco</title>
        <meta
          name="description"
          content="I’m Cátia Barroco. I live in Portugal."
        />
      </Head>
      <div className="container mx-auto px-5 md:px-32 flex flex-col gap-5">
      <div className="flex flex-col gap-6 mb-16">
          <PageTitle>Exploring Ideas: My Projects in Action</PageTitle>
          <p className="font-light dark:text-brand-secondary-300">
          A collection of projects that turn ideas into innovative solutions. Each one reflects my passion for creativity, technology, and real-world impact.
          </p>
        </div>
        {projectsList.map((props, index) => {
          return <ProjectCard project={props} key={index} />;
        })}
      </div>
    </>
  );
}
