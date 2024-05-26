import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';

import '@/application/styles/index.scss';
import './globals.css';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soundmaster Next',
  description: 'Description',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="ru">
    <body className={`${inter.className} ${styles.mainLayout}`}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <nav className={styles.sidebar}>
          <Sidebar />
        </nav>
        <div className={styles.content}>{children}</div>
      </main>
    </body>
  </html>
);

export default RootLayout;
