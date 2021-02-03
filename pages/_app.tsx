import React from 'react'
import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
