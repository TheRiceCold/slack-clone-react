import Link from "next/link"

import {
  HiChevronDown, 
  HiOutlinePencilAlt
} from "react-icons/hi"
import {FC} from "react"

import styles from "@/styles/Client.module.scss"

const SidebarHeader: FC = () => (
  <header className={styles.sidebarHeader}>
    <p>Avion School</p>
    <HiChevronDown/>
    <Link href="client/new_message">
      <a><HiOutlinePencilAlt size={18} color={'#000'}/></a>
    </Link> 
  </header>
)

export default SidebarHeader
