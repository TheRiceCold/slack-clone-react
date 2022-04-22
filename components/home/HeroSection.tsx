import {NextFunctionComponent} from "next"
import styles from "@/styles/Home.module.scss"

const HeroSection: NextFunctionComponent = () => (
  <section className={styles.hero_section}>
    <article className={styles.hero_content}>
      <h1>Slack is your <br/> digital HQ</h1>
      <p>
        Transform the way you work with one place for <br/>
        everyone and everything you need to get stuff done.
      </p>
      <button className={styles.btn_solid_green}>
        TRY FOR FREE
      </button>
      <button className={styles.btn_solid_blue}>
        SIGN UP WITH GOOGLE
      </button>
    </article>
    <img src="/slack-campaign-hero.png" alt="hero section image"/>
  </section>
)

export default HeroSection
