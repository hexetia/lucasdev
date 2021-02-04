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
  externalHref?: boolean
  img: string
}

function ConditionalLink({ href, externalHref, children }: { href?: string; externalHref?: boolean; children: React.ReactNode }) {
  if (href) {
    return (
      <Link href={href}>
        <a target={externalHref ? '_blank' : '_self'}>{children}</a>
      </Link>
    )
  } else {
    return <>{children}</>
  }
}

export const Project = ({ name, description, img, link, href, githubLink, externalHref }: ProjectProps) => (
  <div className='w-full'>
    <h2 className='text-2xl font-bold'>{name}</h2>
    <ConditionalLink href={href} externalHref={externalHref}>
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
