import Link from "next/link"

import {HiPaperAirplane} from "react-icons/hi"
import {FC, useEffect, useState} from "react"

import styles from "@/styles/ChatInput.module.scss"

const ChatInput: FC = props => {
  const {
    handleClick, input, setInput, 
    route, type } = props

  const [active, setActive] = useState(false)

  useEffect(() => setActive(!input), [input])

  const sendBtn = type === 'new' ? (
    <Link
      onClick={handleClick}
      to={route ? route : ''}
      active={active ? 0 : 1}
    >
      <HiPaperAirplane size={18} color='#fff'/>
    </Link>
  ) : (
    <button 
      onClick={handleClick} 
      active={active ? 0 : 1} 
    >
      <HiPaperAirplane size={18} color='#fff'/>
    </button>
  )

  return (
    <div className={styles.chatInput}>
      <div className={styles.container}>
        <input 
          type='text' 
          value={input}
          placeholder='Message here...'
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => {e.key === 'Enter' && handleClick()}}
        />
        {sendBtn}
      </div> 
    </div>
  )
}

export default ChatInput
