// components/Layout.tsx
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Potato Traveler' }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const isActive = false;

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;