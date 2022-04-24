import styles from "@/styles/Client.module.scss"

import {FC, useState} from "react"
import {CgLock} from "react-icons/cg"

import {useChannels} from "@/contexts/ChannelsProvider"
import {useMessages} from "@/contexts/MessagesProvider"

import AddChannel from "../modal/AddChannel"
import SidebarHeader from "./SidebarHeader"
import ListItems from "./ListItems"
import TabItems from "./TabItems"
import Huddle from "./Huddle"

const Sidebar: FC = () => {
  // const {getRecentDMs} = useMessages()
  // const {getOwnedChannels} = useChannels()
  const [showModal, setShowModal] = useState(false)

  // const { data: recentDMs } = useQuery('recentDMs', getRecentDMs)
  // const { data: channels } = useQuery('channels', getOwnedChannels)

  return (
    <aside className={styles.sidebar}>
      <SidebarHeader/>
      <div className={styles.sidebarContent}>
        <TabItems/>
        <ListItems 
          path='channel'
          itemKey='name'
          // list={channels}
          label='Channels' 
          addGeneral={true}
          itemImg={<CgLock/>}
          addClick={() => setShowModal(true)}
        />
        <ListItems 
          path='user'
          itemKey='email'
          slackbot={true}
          // list={recentDMs}
          label='Direct messages' 
          addClick={() => navigate('new')}
          // itemImg={<UserAvatar size={20} src={DEFAULT_USER_IMG}/>}
        />
      </div>
      <Huddle/>
      <AddChannel 
        setShow={setShowModal}
        show={showModal}
      />
    </aside>
  )
}

export default Sidebar
