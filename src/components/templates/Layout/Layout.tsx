import Head from 'next/head';
import React, { ReactNode, useEffect } from 'react';



interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
}
