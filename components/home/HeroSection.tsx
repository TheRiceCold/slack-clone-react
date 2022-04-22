import {NextFunctionComponent} from 'next'
import styles from "@/styles/Home.module.scss"

const HeroSection: NextFunctionComponent = () => (
  <section className={styles.hero_section}>
    <h1>Slack is your digital HQ</h1>
    <p>
      Transform the way you work with one place for&nbsp;
      everyone and everything you need to get stuff done.
    </p>
    <img 
      src="/slack-campaign-hero.png"
      alt="hero section image"
    />
    <button className={styles.btn_solid_green}>
      TRY FOR FREE
    </button>
    <button className={styles.btn_solid_blue}>
      SIGN UP WITH GOOGLE
    </button>
  </section>
)

export default HeroSection
