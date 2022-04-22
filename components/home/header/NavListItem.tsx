import Link from "next/link"
import {NextFunctionComponent} from 'next'

interface Props {
  link: string
  label: string
  className?: string
}

export default(props : Props): NextFunctionComponent  => {
  const {link, label, className} = props

  return (
    <li>
      <Link href={link}>
        <a className={className}>
          {label}
        </a>
      </Link>
    </li>
  )
}
