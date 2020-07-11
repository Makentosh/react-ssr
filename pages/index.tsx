import Head from 'next/head';
import React from 'react';
import MainLayout from '../components/MainLayout';

export default function Index() {
  return (
      <MainLayout>
        <Head>
          <title>Next title index hello</title>
        </Head>
        <div>hello</div>

      </MainLayout>
  )
}
