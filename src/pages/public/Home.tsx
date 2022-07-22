import styles from "@/styles/home/Home.module.sass";

import {FC} from "react";

import BetterTomorrowSection from "@/layouts/home/BetterTomorrowSection";
import FeatureSection from "@/layouts/home/FeatureSection";
import FooterSection from "@/layouts/home/FooterSection";
import HeroSection from "@/layouts/home/HeroSection";
import Header from "@/layouts/home/header/Header";

const Home: FC = () => (
  <main className={styles.main}>
    <Header/>
    <HeroSection/>
    <FeatureSection/>
    <BetterTomorrowSection/>
    <FooterSection/>
  </main>
);

export default Home;
