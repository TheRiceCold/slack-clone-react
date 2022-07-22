import styles from "@/styles/client/Client.module.sass";

import {HiChevronDown, HiOutlinePencilAlt} from "react-icons/hi";
import {Link} from "react-router-dom";
import {FC} from "react";

const Header: FC = () => (
  <div className={styles.sidebar_header}>
    <p>Avion School</p>
    <HiChevronDown/>
    <Link to="new_message" className={styles.new_message}>
      <HiOutlinePencilAlt size={18} color={"#000"}/>
    </Link>
  </div>
);

export default Header;
