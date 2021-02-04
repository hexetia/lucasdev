import Link from 'next/link'
import { ThemeChanger } from './ThemeChanger'

export const Menu = () => (
  <div className='flex justify-between pt-3 md:pt-6'>
    <nav className='flex text-xl'>
      <Link href='/'>
        <a className='px-3 lg:px-6 pl-0 lg:pl-0'>Início</a>
      </Link>
      <Link href='/'>
        <a className='px-3 pr-0 lg:px-6' target='_blank' href='https://github.com/morhogg'>
          Github
        </a>
      </Link>
      <Link href='/'>
        <a className='px-3 pr-0 lg:px-6' target='_blank' href='/Lucas Nascimento - Curriculo.pdf'>
          Currículo
        </a>
      </Link>
      {/*<Link href='/'>*/}
      {/*  <a className='px-3 lg:px-6' href='#contact'>*/}
      {/*    Sobre*/}
      {/*  </a>*/}
      {/*</Link>*/}
    </nav>

    <ThemeChanger />
  </div>
)
