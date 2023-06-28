import Link from 'next/link'

interface BadgeLinkProps {
  id: string
  title: string
  href: string
}

export function BadgeLink({ id, title, href }: BadgeLinkProps) {
  return (
    <Link
      href={href}
      className="m-1 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
    >{`${title} #${id}`}</Link>
  )
}
