import Link from "next/link"
import {FC} from "react"

import {Company} from "@/types/homeTypes"
import {companiesData} from "@/data/homeData"
import styles from "@/styles/Home.module.scss"

const FeatureSection: FC = () => {
  const data: Company[] = companiesData

  return (
    <section className={styles.feature_section}>
    {data.map(({img, link}, idx: any) => (
      <Link href={link} key={idx}>
        <a><img src={`/companies/${img}.png`} alt={img+ " image"}/></a>
      </Link>
    ))}
    </section>
  )
}

export default FeatureSection
