import Link from 'next/link'

import dynamic from 'next/dynamic'

const ThemeChangerDynamic = dynamic(() => import('./ThemeChanger'), { ssr: false })

export const PageMenu = () => (
  <div className='flex justify-between pt-3 md:pt-6'>
    <nav className='flex text-xl'>
      <Link href='/'>
        <a className='px-3 lg:px-6 pl-0 lg:pl-0'>Início</a>
      </Link>
      <a className='px-3 pr-0 lg:px-6' target='_blank' href='https://github.com/hexetia'>
        Github
      </a>
      <a className='px-3 pr-0 lg:px-6' target='_blank' href='https://www.linkedin.com/in/lucasdev7'>
        Linkedin
      </a>
      {/*<Link href='/'>*/}
      {/*  <a className='px-3 lg:px-6' href='#contact'>*/}
      {/*    Sobre*/}
      {/*  </a>*/}
      {/*</Link>*/}
    </nav>

    <ThemeChangerDynamic />
  </div>
)
