import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen container mx-auto bg-white shadow-sm shadow-zinc-100 dark:bg-brand-secondary-800 dark:shadow-zinc-300">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
