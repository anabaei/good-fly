import React, { Component } from 'react'
import { ThemeProvider } from '@theme-ui/core'
import theme from '../theme.js';

export default function App({Component, pageProps}){
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}