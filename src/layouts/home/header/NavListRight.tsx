import {BsSearch} from "react-icons/bs";
import {FC} from "react";

import navLinks from "@/constants/headerNavLinks";
import NavLinkType from "@/types/NavLinkType";
import NavListItem from "./NavListItem";

import styles from "@/styles/home/Home.module.sass";

const NavListRight: FC = () => {
  const data: NavLinkType[] = navLinks.right;

  return (
    <ul className={styles.nav_list_right}>
      <BsSearch size={18} color={"#fff"}/>
      {data.map(({label, link}, index: any) => (
        index === data.length ? (
          <NavListItem
            key={index}
            link={link}
            label={label}
          />
        ) : (
          <NavListItem
            key={index}
            link={link}
            label={label}
          />
        )
      ))}
    </ul>
  );
};

export default NavListRight;
