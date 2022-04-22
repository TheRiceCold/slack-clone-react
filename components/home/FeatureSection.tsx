import Link from "next/link"
import {NextFunctionComponent} from "next"

import companies from "./companiesData"
import styles from "@/styles/Home.module.scss"

const FeatureSection: NextFunctionComponent = () => (
  <section className={styles.feature_section}>
  {companies.map(({img, link}, i) => (
    <Link href={link} key={i}>
      <a><img src={`/companies/${img}.png`} alt={img+ " image"}/></a>
    </Link>
  ))}
  </section>
)

export default FeatureSection
