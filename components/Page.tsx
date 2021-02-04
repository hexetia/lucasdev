import { PageMenu } from './PageMenu'
import React from 'react'
import { PageFooter } from './PageFooter'

interface PageProps {
  children: JSX.Element | JSX.Element[]
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className='max-w-screen-lg min-h-screen p-2 m-auto'>
      <PageMenu />
      {children}

      <PageFooter />
    </div>
  )
}
