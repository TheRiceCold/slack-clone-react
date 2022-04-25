import {FC} from "react"
import Link from "next/link"
import styles from "../../../styles/Home.module.scss"

const Logo: FC = () => (
  <div className={styles.logo}>
    <Link href="/">
      <a>
        <img
          className={styles.logoImg}
          src="/slack-text-logo.svg" 
          alt="slack text logo"
        />
      </a>
    </Link>
  </div>  
)

export default Logo
