import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {MdHelpOutline} from "react-icons/md";
import {Link} from "react-router-dom"; 
import {FC} from "react";

import ChatInput from "@/layouts/client/ChatInput";
import UserAvatar from "@/components/UserAvatar";
import Button from "@/components/Button";

const Slackbot: FC = () => {
  const heading = "Hi, Slackbot here!";
  const message = `
    👋 You're here! The day just got better. 
    This is Slack, the messaging app for teams at work. 
    Let's get you started.`;

  return (
    <section className={styles.channel}>
      <header className={styles.channel_nav_top}>
        <UserAvatar src={images.slackbot} alt="slackbot" />
        <h4>Slackbot</h4>
      </header>
      <header className={styles.channel_nav_bottom}>
        <button onClick={() => alert("Not yet available")}>
          + Add a bookmark
        </button>
      </header>
      <section className={styles.slackbot_thread}>
        <article className={styles.channel_intro}>
          <h1>{heading}</h1>
          <div className={styles.slackbot}>
            <UserAvatar src={images.slackbot} alt="slackbot" />
            <div>
              <p>{"You're here! Hello!"}</p>
              <p>
                To learn all about using Slack, click the&nbsp;
                <MdHelpOutline size={20}/>&nbsp;
                help icon in the top right corner of the app. (Or, you can visit the&nbsp;
                <Link to="https://slack.com/help">Help Center</Link> on the web!)
              </p>
              <p>
                {`
                  I, however, am not a human. 
                  Just a bot (a simple bot, 
                  with only a few tricks up my metaphorical sleeve). 
                  But I'm still happy you're here!
                `}
              </p>
            </div>
          </div>
        </article>
        <article className={styles.message}>
          <UserAvatar 
            size={36} 
            alt="slackbot"
            src={images.slackbot} 
          />
          <div className={styles.message_content}>
            <span className={styles.name}>
              Slackbot
              <span className={styles.date}>
                7:33 AM
              </span>
            </span>
            <p>{message}</p>
            <span className={styles.set_up_profile_button}>
              |&nbsp;
              <Button 
                style={{ marginTop: 8, fontSize: 13 }}
                onClick={() => alert("Not yet available")}
              >
                Set Up Your Profile
              </Button>
            </span>
          </div>
        </article>
      </section> 
      <div style={{ marginTop: "0" }}>
        {/* <ChatInput /> */}
      </div>
    </section>
  );
}

export default Slackbot;
