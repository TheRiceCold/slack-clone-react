import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {FC, useEffect, useState} from "react"; 
import {useParams} from "react-router-dom";
import {HiPlus} from "react-icons/hi";

import {useChannels} from "@/contexts/ChannelsContext";

import Conversations from "@/layouts/client/Conversations";

const Channel: FC = () => {
  const {id} = useParams();
  const numberId = Number(id);
  const [channel, setChannel] = useState();
  const {getChannelDetails} = useChannels();
  const [members, setMembers] = useState(0);

  useEffect(() => {

  }, [id]);

  return (
    <section className={styles.channel}>
      <nav className={styles.channel_nav_top}>
        <h4>{channel}</h4>
      </nav>
      <nav className={styles.channel_nav_bottom}>

      </nav>
      <Conversations type="Channel" id={numberId} />
    </section> 
  );
};

export default Channel;
