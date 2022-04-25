import Link from "next/link"
import {FC} from "react"

import {FaPlay} from "react-icons/fa"

import styles from "@/styles/Home.module.scss"

const BetterTomorrowSection: FC = () => (
  <section className={styles.better_tomorrow_section}>
    <article className={styles.video_showcase}>
      <Link href="/">
        <a>
          <img src="/better-tomorrow-thumbnail.jpg" 
            alt="better tomorrow thumbnail"/>
          <FaPlay size={36}/>          
        </a>     
      </Link>
    </article>
    <article className={styles.better_tomorrow_content}>
      <h2>Now is your moment to build a <br/> better tomorrow</h2>
      <p>We’ve seen what the future can be. Now it’s time to decide <br/> what it will be.</p>
      <Link href="#better-tomorrow">
        <a>watch video</a>
      </Link>
    </article>
  </section>
)

export default BetterTomorrowSection
