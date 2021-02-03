import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className='bg-white text-black dark:bg-dark dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
