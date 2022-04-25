import Link from "next/link"

import {FC} from "react"
import {FcGoogle} from "react-icons/fc"

import styles from "@/styles/Home.module.scss"

const HeroSection: FC = () => {
  return (
    <section className={styles.hero_section}>
      <article className={styles.hero_content}>
        <h1>Great teamwork starts 
          <br/> with a <span>digital HQ</span>
        </h1>
        <p>
          Transform the way you work with one place for <br/>
          everyone and everything you need to get stuff done.
        </p>
        <div className={styles.hero_buttons}>
          <Link href="/register">
            <a>sign up with email</a>
          </Link>
          <button>
            <FcGoogle size={28}/>
            <span>sign up with google</span>
          </button>
        </div>
      </article>
      <img src="/slack-campaign-hero.png" alt="hero section image"/>
    </section>
  )
}

export default HeroSection
