import {FC} from "react";

import Logo from "../Logo";

import NavListLeft from "./NavListLeft";
import NavListRight from "./NavListRight";

import styles from "@/styles/home/Home.module.sass";

const Header: FC = () => (
  <header className={styles.header}>
    <Logo size={100} type="text" />
    <NavListLeft/>
    <NavListRight/>
  </header>
);

export default Header;
