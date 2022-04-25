import {FC} from "react"
import Link from "next/link"
import {BiChevronDown} from "react-icons/bi"

interface INavListItem {
  link: string
  label: string
  className?: string
  dropdown?: boolean
}

const NavListItem: FC<INavListItem> = props => {
  const { link, label, className, dropdown} = props

  return (
    <li>
      <Link href={link}>
        <a className={className}>{label}</a>
      </Link>
      {dropdown && <BiChevronDown size={18}/>}
    </li>
  )
}

export default NavListItem
