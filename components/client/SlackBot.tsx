import Link from "next/link"

import {FC} from "react"
import {MdHelpOutline} from "react-icons/md"

import styles from "@/styles/Channel.module.scss"
import ChatInput from "@/components/client/ChatInput"

const SlackBot: FC = () => (
  <section className={styles.channel}>
    <header>
      <img src="slack-bot.svg" alt='slackbot'/>
      <h4>Slackbot</h4>
    </header>
    <div className={styles.bookmark}>
      <button>+ Add a bookmark</button>
    </div>
    <section className={styles.thread}>
      <article className={styles.intro}>
        <h1>Hi, Slackbot here!</h1>
        <div className={styles.slackBot}>
          <img src="default-user.svg" alt='user avatar'/>
          <div>
            <p>You're here! Hello!</p>
            <p>
              To learn all about using Slack, click the&nbsp;
              <MdHelpOutline size={20}/>&nbsp;
              help icon in the top right corner of the app. (Or, you can visit the&nbsp;
              <Link href='https://slack.com/help' target='_blank'>
                <a>Help Center</a>
              </Link> on the web!)
            </p>
            <p>
              I, however, am not a human. Just a bot (a simple bot, with only a few tricks up my metaphorical sleeve).
              But I'm still happy you're here!
            </p>
          </div>
        </div>
      </article>
      <article className={styles.message}>
        <div className={styles.userAvatar}>
          <img src="/slack-bot.svg"/>
        </div>
        <div className={styles.messageContent}>
          <span className={styles.name}>
            Slackbot
            <span>7:33 AM</span>
          </span>
          <p>👋 You're here! The day just got better. This is Slack,&nbsp;
            the messaging app for teams at work. Let's get you started.</p>
          <span>| <button>Set Up Your Profile</button></span>
        </div>
      </article>
    </section>
    <div style={{marginTop: '0'}}>
      <ChatInput/>
    </div>
  </section>
)

export default SlackBot
