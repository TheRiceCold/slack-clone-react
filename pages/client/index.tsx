import type {NextPage} from "next"

import styles from "@/styles/Client.module.scss"

import SlackBot from "@/components/client/SlackBot"
import Navbar from "@/components/client/navbar/Navbar"
import Sidebar from "@/components/client/sidebar/Sidebar"

const ClientPage: NextPage = () => (
  <main className={styles.clientPage}>
    <Navbar/>
    <section className={styles.container}>
      <Sidebar/>
      <SlackBot/>
    </section>
  </main>
)

export default ClientPage
