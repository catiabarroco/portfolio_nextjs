import Head from 'next/head';
import ProjectCard from '@components/ProjectCard';
import WorkCard from '@components/WorkCard';

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
      <div className="container mx-auto px-5 md:px-32">
        <div className="md:grid md:grid-cols-3 gap-10">
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </div>
    </>
  );
}
