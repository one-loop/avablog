import '../styles/globals.scss';
// import 'tailwindcss/tailwind.css';
import { NextUIProvider } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { Layout } from '../components';
import { createTheme } from "@nextui-org/react"

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    // colors: {...}, // override dark theme colors
  }
});

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp;
