import styles from "@/styles/client/Client.module.sass";

import {FiMoreVertical} from "react-icons/fi";
import {BsChatText} from "react-icons/bs";
import {HiAtSymbol} from "react-icons/hi";
import {NavLink} from "react-router-dom";
import {FC} from "react";

const TabItems: FC = () => {
  const listItemNavStyle = {
    color: "#b0b2b4",
    textDecoration: "none",
    _hover: { background: "#313843" },
  }

  const linkProps = {
    style: listItemNavStyle,
    className: styles.tab_item
  };

  return (
    <>
      <NavLink to="threads" {...linkProps}>
        <BsChatText size={18} />
        <span>Threads</span>
      </NavLink>
      <NavLink to="activity" {...linkProps}>
        <HiAtSymbol size={18} />
        <span>Mentions & reactions</span>
      </NavLink>
      <div className={styles.more_items}>
        <FiMoreVertical size={18} />
        <span>More</span>
      </div>
    </>
  );        
}

export default TabItems;
