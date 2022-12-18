/* eslint-disable @next/next/inline-script-id */
import Layout from '../src/components/templates/Layout/Layout';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import { v4 as uuidv4 } from 'uuid';

// import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      localStorage.setItem('deviceId', uuidv4());
    }
  }, []);

  return (
    <>
      <Layout>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
        </Script>

        <Head>
          <title>Mockterview</title>
          {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
          <meta
            property="og:image"
            content="https://i.postimg.cc/C5Mvnbg7/og-img.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:title" content="Mockterview" />
          <meta
            property="og:url"
            content="https://mockterview-frontend.vercel.app/"
          />
          <meta
            property="og:description"
            content="검증된 문제로 시간을 아끼는 면접 준비"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
