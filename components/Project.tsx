import type React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StyledLink } from './StyledLink'

interface ProjectProps {
  name: string
  href?: string
  description: React.ReactNode
  link?: string
  githubLink?: string
  img: string
}

function ConditionalLink({ href, children }: { href?: string; children: React.ReactNode }) {
  if (href) {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    )
  } else {
    return <>{children}</>
  }
}

export const Project = ({ name, description, img, link, href, githubLink }: ProjectProps) => (
  <div className='w-full'>
    <h2 className='text-2xl font-bold'>{name}</h2>
    <ConditionalLink href={href}>
      <div className='text-center'>
        <Image src={img} width={456} height={257} objectFit='cover' quality='90' />
      </div>
    </ConditionalLink>

    {description}

    <div className='flex flex-col'>
      {githubLink && (
        <StyledLink href={githubLink} className='inline-flex text-sm no-underline' target='_blank'>
          {githubLink?.replace('http://', '').replace('https://', '')} 🔗
        </StyledLink>
      )}

      {link && (
        <StyledLink href={link} className='inline-flex text-sm no-underline' target='_blank'>
          {link?.replace('http://', '').replace('https://', '')} 🔗
        </StyledLink>
      )}
    </div>
  </div>
)
