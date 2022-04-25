import Link from "next/link"

import {HiPaperAirplane} from "react-icons/hi"
import {
  FC, MouseEvent, Dispatch,
  useEffect, useState } from "react"

import styles from "@/styles/ChatInput.module.scss"

interface IProps {
  handleClick: () => void
  setInput: Dispatch<string>
  input: string
  route: string
  type: string
}

const ChatInput: FC<IProps> = props => {
  const {
    handleClick, input, 
    setInput, route, type } = props

  const [active, setActive] = useState(false)

  useEffect(() => setActive(!input), [input])

  const sendBtn = type === 'new' ? (
    <Link href="/">
      <a onClick={handleClick}>
        <HiPaperAirplane size={18} color='#fff'/>
      </a>
    </Link>
  ) : (
    <button onClick={handleClick}>
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
