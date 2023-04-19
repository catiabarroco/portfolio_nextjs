import PageTitle from '@components/PageTitle';
import Link from "next/link";
import {articlesList, socialMedia} from "@constants";
import Head from "next/head";

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
                      Explore my collection of long-form articles. Delve into a chronologically
                      ordered archive of my thoughts and insights on these topics, providing
                      a comprehensive view of my growth and development as a professional.
                      From early explorations of programming concepts to nuanced reflections
                      on leadership and product design, this collection covers a wide range
                      of topics and perspectives. Join me on this journey of discovery and
                      exploration, as I share my experiences, lessons learned, and tips for
                      success in the tech industry.
                  </p>
              </div>
              <div className="flex flex-col gap-16">
                  {articlesList.map(({ href, date, title, description}) => {
                      return (
                          <div className="md:border-l md:border-brand-secondary-200 md:pl-6 md:dark:border-zinc-700/40 flex gap-5 max-w-6xl">
                              <div className="text-brand-secondary-700 dark:text-brand-secondary-300 w-1/3 pt-7">
                                  {date}
                              </div>
                              <Link
                                  href={href}
                                  className="flex flex-col gap-4 group flex transition hover:bg-brand-secondary-200 dark:hover:bg-brand-secondary-700 rounded-2xl p-5"
                              >
                                  <h2 className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl font-light">
                                      {title}
                                  </h2>
                                  <div className="text-sm text-brand-secondary-700 dark:text-brand-secondary-200">
                                      {description}
                                  </div>
                                  <div className="text-brand-primary">Read article ></div>
                              </Link>
                          </div>
                      )})}
              </div>


          </div>
      </>

  );
}
