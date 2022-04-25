import {FC, useState, Dispatch} from "react"

import MembersModal from "./MembersModal"
import NameModal from "./NameModal"

import styles from "@/styles/Client.module.scss"

interface IProps {
  show: boolean
  setShow: Dispatch<boolean>
}

const AddChannel: FC<IProps> = ({show, setShow}) => {
  const [isOpenNext, setOpenNext] = useState<boolean>(false)
  const [channelName, setChannelName] = useState<string>("")

  const onClose = () => {
    setShow(false)
    setOpenNext(false)
  }

  return (<>
    {show &&
      <div className={styles.overlay} onClick={onClose}>
        <NameModal 
          onClose={onClose}
          isOpenNext={isOpenNext} 
          setOpenNext={setOpenNext} 
          channelName={channelName}
          setChannelName={setChannelName}
        />
        <MembersModal 
          onClose={onClose} 
          isOpenNext={isOpenNext}
          channelName={channelName}
        />
      </div>
    }
  </>)
}

export default AddChannel
