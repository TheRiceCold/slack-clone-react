import styles from "@/styles/home/Home.module.sass";

import {Link} from "react-router-dom";
import {FC} from "react";

import CompanyType from "@/types/CompanyType";
import companies from "@/constants/companies";


const FeatureSection: FC = () => (
  <section className={styles.feature_section}>
    <h4>trusted by companies all over the world</h4> 
    <article>
      {companies.map(({image, link}) => (
        <Link to={link} key={image}>
          <img src={image} alt={image}/>
        </Link>
      ))}
    </article>
  </section>
);

export default FeatureSection;
