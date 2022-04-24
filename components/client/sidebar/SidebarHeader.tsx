import {HiChevronDown, HiOutlinePencilAlt} from "react-icons/hi"
import {NextFunctionComponent} from "next"
import Link from "next/link"

import styles from "@/styles/Client.module.scss"

const SidebarHeader: NextFunctionComponent = () => (
  <header className={styles.sidebarHeader}>
    <p>Avion School</p>
    <HiChevronDown/>
    <Link href="client/new_message">
      <a><HiOutlinePencilAlt size={18} color={'#000'}/></a>
    </Link> 
  </header>
)

export default SidebarHeader
