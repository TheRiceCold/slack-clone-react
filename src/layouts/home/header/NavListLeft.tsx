import {FC} from "react";

import NavListItem from "./NavListItem";
import NavLinkType from "@/types/NavLinkType";
import navLinks from "@/constants/headerNavLinks";

import styles from "@/styles/home/Home.module.sass";

const NavListLeft: FC = () => {
  const data: NavLinkType[] = navLinks.left;

  return (
    <ul className={styles.nav_list_left}>
      {data.map(({label, link}, idx: any) => (
          label === "Product" ? (
            <NavListItem 
              key={idx}
              link={link}
              label={label}
              dropdown={true}
            />
          ) : (
            <NavListItem
              key={idx}
              link={link}
              label={label}
            />
          )
        )
      )}
    </ul>
  );
};

export default NavListLeft;
