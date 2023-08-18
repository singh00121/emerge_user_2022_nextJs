import React from 'react';
import Laptop from './Laptop';
import Head from 'next/head';

function index() {
  return (
    <div>
    <Head>
        <title>Laptop  || Computer || Destop || Keybord</title>
        <meta
          name="description"
          content="Emerge Computer Best Computer Best rice"
        />
        <link rel="icon" href="icons/favicon.ico" />
        </Head>
      <Laptop />
    </div>
  );
}

export default index;
