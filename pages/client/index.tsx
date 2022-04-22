import type {NextPage} from "next"

import styles from "@/styles/Client.module.scss"

import Navbar from "@/components/client/navbar/Navbar"
import Sidebar from "@/components/client/sidebar/Sidebar"

const ClientPage: NextPage = () => (
  <main className={styles.clientPage}>
    <Navbar/>
    <section className={styles.container}>
      <Sidebar/>
    </section>
  </main>
)

export default ClientPage
