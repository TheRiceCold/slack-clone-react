import images from "@/constants/images";
import styles from "@/styles/home/Home.module.sass";

import {FC} from "react";
import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

const HeroSection: FC = () => (
  <section className={styles.hero}>
    <article>
      <h1>
        Great teamwork starts
        <br/> with a <span>digital HQ</span>
      </h1>
      <p>
        Transform the way you work with one place for <br/>
        everyone and everything you need to get stuff done.  
      </p>
      <div className={styles.buttons}>
        <Link to="/signup">
          sign up with email 
        </Link>
        <button>
          <div className={styles.google_icon}>
            <FcGoogle size={26} />
          </div>
          <span>sign up with google</span>
        </button>
      </div>
      <p>
        <strong>Slack is free try</strong> 
        &nbsp;for as long as you'd like</p>
    </article>
    <img 
      src={images.slackCampaign} 
      alt="hero section image"
    />
  </section>
);

export default HeroSection;
