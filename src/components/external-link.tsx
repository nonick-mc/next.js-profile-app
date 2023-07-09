import Link from 'next/link';

interface externalLinkProps {
  href: string,
  children: React.ReactNode
}

const ExternalLink = ({ href, children }: externalLinkProps) => {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noreferrer'
      passHref
    >
      {children}
    </Link>
  );
}

export { ExternalLink }