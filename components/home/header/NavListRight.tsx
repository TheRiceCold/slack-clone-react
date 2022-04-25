import {FC} from "react"

import NavListItem from './NavListItem'
import {headerData} from "@/data/homeData"
import {HeaderLinkType} from "@/types/homeTypes"

import styles from "../../../styles/Home.module.scss"

const NavListRight: FC = () => {
  const data: HeaderLinkType[] = headerData.left

  return (
    <ul className={styles.nav_list_right}> {
      data.map(({label, link}, idx: any) => (
          idx === data.length ? (
            <NavListItem
              key={idx}
              link={link}
              label={label}
              className={styles.btnPrimary}/>
            ) : (
              <NavListItem
                key={idx}
                link={link}
                label={label}/>
            )
        ))
      }
    </ul>
  )
}

export default NavListRight
