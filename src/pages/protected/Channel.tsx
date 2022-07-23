import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {BsPinAngleFill} from "react-icons/bs";
import {HiChevronDown} from "react-icons/hi";
import {useParams} from "react-router-dom";
import {ImLock} from "react-icons/im";
import {HiPlus} from "react-icons/hi";
import {
  useEffect, 
  useState, 
  Fragment,
  FC, 
} from "react"; 

import {useChannels} from "@/contexts/ChannelsContext";

import Conversations from "@/layouts/client/Conversations";
import ChannelMemberType from "@/types/ChannelMemberType";
import UserAvatar from "@/components/UserAvatar";

const Channel: FC = () => {
  const {id} = useParams();
  const numberId = Number(id);
  const {getChannelDetails} = useChannels();
  const [channelName, setChannelName] = useState<string>();
  const [members, setMembers] = useState<ChannelMemberType[]>();

  useEffect(() => {
    (async() => {
      const { name, channel_members } = await getChannelDetails(numberId);
      setMembers(channel_members);
      setChannelName(name);
    })()
  }, [id]);


  return (
    <section className={styles.channel}>
      <nav className={styles.channel_nav_top}>
        <h4>
          <ImLock />
          {channelName}
          <HiChevronDown/>
        </h4>
        <button className={styles.members_button}>
          <UserAvatar 
            size={22}
            alt="default user"
            src={images.defaultUser}
          />
          <p>{members?.length}</p>
        </button>
      </nav>
      <nav className={styles.channel_nav_bottom}>
        <button onClick={() => alert("Not available yet")}>
          <BsPinAngleFill />
          13 Pinned
        </button>
        <button onClick={() => console.log("Not available yet")}>
          <HiPlus />
          Add a bookmark
        </button>
      </nav>
      <Conversations type="Channel" id={numberId} />
    </section> 
  );
};

export default Channel;
