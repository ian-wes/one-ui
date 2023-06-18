import '@tamagui/core/reset.css'
import 'raf/polyfill'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import Head from 'next/head'
import React from 'react'
import {TamaguiProvider} from 'tamagui'
import {config} from "@one-ui/react";

if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css')
}

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as any)
      }}
    >
      <TamaguiProvider config={config} disableRootThemeClass defaultTheme={theme}>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  )
}

export default MyApp
