import HeaderData from "./headerData"
import NavListItem from './NavListItem'
import styles from "../../../styles/Home.module.scss"

export default() => (
  <ul className={styles.nav_list_left}> {
    HeaderData.left.map (
      ({label, link}, idx) => (
        idx === HeaderData.left.length ? (
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
