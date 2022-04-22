import {NextFunctionComponent} from 'next'

import styles from "../../../styles/Home.module.scss"
import Logo from "./Logo"
import NavListRight from "./NavListRight"
import NavListLeft from "./NavListLeft"

const Header: NextFunctionComponent = () => (
  <header className={styles.header}>
    <Logo/>
    <NavListRight/>
    <NavListLeft/>
  </header>
)

export default Header
