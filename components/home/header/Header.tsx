import {FC} from "react"

import Logo from "./Logo"
import NavListRight from "./NavListRight"
import NavListLeft from "./NavListLeft"

import styles from "@/styles/Home.module.scss"

const Header: FC = () => (
  <header className={styles.header}>
    <Logo/>
    <NavListLeft/>
    <NavListRight/>
  </header>
)

export default Header
