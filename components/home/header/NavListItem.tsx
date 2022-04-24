import Link from "next/link"
import {NextFunctionComponent} from 'next'

import {BiChevronDown} from "react-icons/bi"

interface Props {
  link: string
  label: string
  className?: string
}

export default(props : Props): NextFunctionComponent  => {
  const {
    link, label, 
    className, dropdown} = props

  return (
    <li>
      <Link href={link}>
        <a className={className}>{label}</a>
      </Link>
      {dropdown && <BiChevronDown size={18}/>}
    </li>
  )
}
