import {FC, useState} from "react"

import MembersModal from "./MembersModal"
import NameModal from "./NameModal"

export default({show, setShow}): FC => {
  const [openNext, isOpenNext] = useState(false)
  const [channelName, setChannelName] = useState("")

  const onClose = () => {
    setShow(false)
    isOpenNext(false)
  }

  return (<>
    {show &&
      <div className={styles.overlay} onClick={onClose}>
        <NameModal 
          onClose={onClose}
          openNext={openNext} 
          isOpenNext={isOpenNext} 
          channelName={channelName}
          setChannelName={setChannelName}
        />
        <MembersModal 
          onClose={onClose} 
          openNext={openNext}
          channelName={channelName}
        />
      </div>
    }
  </>)
}
