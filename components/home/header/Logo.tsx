import Link from "next/link"
import styles from "../../../styles/Home.module.scss"

export default() => (
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
