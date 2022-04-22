import HeaderData from "./headerData"
import NavListItem from './NavListItem'
import styles from "../../../styles/Home.module.scss"

export default() => (
  <ul className={styles.nav_list_left}> {
    HeaderData.right.map (
      ({label, link}, idx) => (
        label === "Product" ? (
          <NavListItem 
            key={idx} 
            link={link} 
            label={label}/>
        ) : (
          <NavListItem 
            key={idx} 
            link={link} 
            label={label}/>
          ))
    )}
  </ul>
)
