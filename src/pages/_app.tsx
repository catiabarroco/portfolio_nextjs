import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
         <Header />
      <main className="min-h-[50vh] bg-white dark:bg-brand-secondary-800">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
    // <div className="relative min-h-screen container mx-auto bg-white shadow-sm shadow-zinc-100 dark:bg-brand-secondary-800 dark:shadow-zinc-300">
 
    // </div>
  );
}
