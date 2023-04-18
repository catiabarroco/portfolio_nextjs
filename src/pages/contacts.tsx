import Head from 'next/head';
import { Container } from '@components/Container';
import PageTitle from '@components/PageTitle';
import { SpriteIcon } from '@components/common/icons/SpriteIcon';
import { SpritesCategories } from '@enums';

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contacts - Cátia Barroco</title>
        <meta name="contacts" content="My contacts" />
      </Head>
      <Container className="container mx-auto">
        <PageTitle className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Let's get in touch!
        </PageTitle>
        <div className=" text-base text-zinc-600 dark:text-zinc-400 tracking-wide leading-9">
          <p className="underline">Contact me:</p>
          <p>
            I'm here to provide the information and services you need quickly
            and to answer any questions you may have.{' '}
          </p>
        </div>
        <div>AAA</div>
      </Container>
    </>
  );
}
