import styles from "@/styles/home/Home.module.sass";
import images from "@/constants/images";

import {FaPlay} from "react-icons/fa";
import {Link} from "react-router-dom";
import {FC} from "react";

const BetterTomorrowSection: FC = () => (
  <section className={styles.better_tomorrow}>
    <article className={styles.thumbnail}>
      <Link to="/">
        <img 
          src={images.betterTomorrow}
          alt="better tomorrow thumbnail"
        />
        <FaPlay size={36}/>          
      </Link>
    </article>
    <article className={styles.content}>
      <h1>Now is your moment to build a <br/> better tomorrow</h1>
      <p>We’ve seen what the future can be. Now it’s time to decide <br/> what it will be.</p>
      <Link to="#better-tomorrow">watch video</Link>
    </article>
  </section>
);

export default BetterTomorrowSection;
