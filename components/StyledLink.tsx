import clsx from 'clsx'
interface StyledLinkProps extends React.HTMLProps<HTMLAnchorElement> {}

export function StyledLink({ className, children, ...rest }: StyledLinkProps) {
  return (
    <a className={clsx('underline text-blue-600 hover:text-blue-800 visited:text-purple-600', className)} {...rest}>
      {children}
    </a>
  )
}
