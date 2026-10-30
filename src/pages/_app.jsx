import '../sass/app.sass';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${mono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
