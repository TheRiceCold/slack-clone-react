import {FC} from "react"

import NavListItem from './NavListItem'
import {headerData} from "@/data/homeData"
import {HeaderLinkType} from "@/types/homeTypes"

import styles from "@/styles/Home.module.scss"

const NavListLeft: FC = () => {
  const data: HeaderLinkType[] = headerData.right

  return (
    <ul className={styles.nav_list_left}> {
      data.map (
        ({label, link}, idx: any) => (
          label === "Product" ? (
            <NavListItem 
              key={idx} 
              link={link} 
              label={label}
              dropdown={true}/>
          ) : (
            <NavListItem 
              key={idx} 
              link={link} 
              label={label}/>
            ))
      )}
    </ul>
  )
}

export default NavListLeft
