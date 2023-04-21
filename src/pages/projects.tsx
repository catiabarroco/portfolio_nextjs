import Head from 'next/head';
import ProjectCard from '@components/ProjectCard';
import { projectsList, workExperience } from '@constants';

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
      <div className="container mx-auto px-5 md:px-32 grid lg:grid-cols-3 gap-5">
        {projectsList.map((props, index) => {
          return <ProjectCard project={props} key={index} />;
        })}
      </div>
    </>
  );
}
