import styles from "@/styles/home/Home.module.sass";
import images from "@/constants/images";

import {FC} from "react";

import footerLinks from "@/constants/footerLinks";
import Link from "@/components/Link";
import Logo from "./Logo";

const Footer: FC = () => (
  <footer>
    <div className={styles.left}>
      <img src={images.slackLogo}/>
    </div>
    <ul className={styles.right}>
      {footerLinks.top.map(({title, links}) => (
        <li className={styles.item_list} key={title}>
          <h2>{title}</h2>
          <ul className={styles.list}>
            {links.map(({label, link}) => (
              <li key={label} style={{ marginTop: 16 }}>
                <Link to={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))} 
    </ul>
    <div className={styles.bottom}>
      <ul className={styles.nav_list}>
        {footerLinks.bottom.map(({label, link}) => (
          <li key={label}>
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>
      <p>
        &copy;{
          `2022 Slack Technologies, LLC, a Salesforce company. All rights reserved. 
          Various trademarks held by their respective owners.`
        }
      </p>
    </div>
  </footer>
);

export default Footer;
