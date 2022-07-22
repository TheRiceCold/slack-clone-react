import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {FC, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {useChannels} from "@/contexts/ChannelsContext";
import {useMessages} from "@/contexts/MessagesContext";

import MessageSenderType from "@/types/MessageSenderType";
import ChannelType from "@/types/ChannelType";

import AddChannelModal from "@/layouts/modals/addChannel/AddChannelModal";
import UserAvatar from "@/components/UserAvatar";
import ListItems from "./ListItems";
import TabItems from "./TabItems";
import Header from "./Header";
import Huddle from "./Huddle";

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const {getRecentDMs} = useMessages();
  const {getOwnedChannels} = useChannels();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [channels, setChannels] = useState<ChannelType[]>([]);
  const [recentDMs, setRecentDMs] = useState<MessageSenderType[]>([]);

  useEffect(() => {
    (async() => {
      setRecentDMs(await getRecentDMs());
      setChannels(await getOwnedChannels());
    })();
  }, []);

  const channelListProps = {
    list: channels,
    path: "channel",
    itemKey: "name",
    label: "Channels",
    withGeneralChannel: true,
    addOnClick: () => setShowModal(true),
  };

  const messageListProps = {
    path: "user",
    list: recentDMs,
    itemKey: "email",
    label: "Direct Messages",
    withSlackbotChannel: true,
    addOnClick: () => navigate("new_message"),
    itemImg: <UserAvatar size={20} src={images.defaultUser} alt="default user" />
  };

  return (
    <aside className={styles.sidebar}>
      <Header /> 
      <div className={styles.content}>
        <TabItems />
        <ListItems {...channelListProps} />
        <ListItems {...messageListProps} />
      </div>
      <Huddle />
      <AddChannelModal 
        show={showModal}
        setShow={setShowModal} 
      />
    </aside>
  );
};

export default Sidebar;
