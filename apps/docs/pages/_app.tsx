import '@tamagui/core/reset.css'
import 'raf/polyfill'
import '../fonts/montserrat.css';
import Head from 'next/head'
import React from 'react'
import {UIProvider} from "@one-ui/react";

if (process.env.NODE_ENV === 'production') {
    require('../public/tamagui.css')
}

function MyApp({Component, pageProps}: { Component: any; pageProps: any }) {
    return (
        <>
            <Head>
                <title>Tamagui Example App</title>
                <meta name="description" content="Demo Components"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <UIProvider>
                <Component {...pageProps} />
            </UIProvider>
        </>
    )
}


export default MyApp
