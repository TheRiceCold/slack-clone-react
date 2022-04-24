import type {NextPage} from "next"

import styles from "@/styles/Client.module.scss"

import SlackBot from "@/components/client/SlackBot"
import Navbar from "@/components/client/navbar/Navbar"
import Sidebar from "@/components/client/sidebar/Sidebar"

const NewMessage: NextPage = () => (
  <main className={styles.clientPage}>
    <Navbar/>
    <section className={styles.container}>
      <Sidebar/>
      <article className={styles.new_message}>
        <h4>New message</h4>
      </article>
    </section>
  </main>
)

export default NewMessage
