import Head from 'next/head';
import { FC, ReactNode } from 'react';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>G-Mates</title>
        <meta name="description" content="Find your gaming partners" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="p-4 min-h-screen h-full bg-[#06011d]
			text-white"
      >
        {children}
      </main>
    </>
  );
};
