import './globals.css';
import { Poppins } from 'next/font/google';
import SideMenu from '@/components/SideMenu';
import TopMenu from '@/components/TopMenu';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700', '800'],
});

export const metadata = {
  title: 'Mohammad Shariar Parvez',
  description: 'Full Stack Developer Portfolio Website',
  image: '/public/assets/head.PNG',
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* Add the link to your favicon here */}

      {/* Add the meta image tag */}
      <meta property='og:image' content={metadata.image} />

      <html lang='en' className='scroll-smooth'>
        <body className={poppins.className}>
          <main className='flex flex-row'>
            <SideMenu />
            <section className='overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0'>
              <TopMenu />
              {children}
            </section>
          </main>
        </body>
      </html>
    </>
  );
}
