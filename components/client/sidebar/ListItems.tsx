import styles from "@/styles/Client.module.scss"

import Link from "next/link"

import {RiArrowRightSFill} from "react-icons/ri"
import {FiMoreVertical} from "react-icons/fi"
import {HiPlus} from "react-icons/hi"
import {FC, useState} from "react"

const ListItems: FC = props => {
  const {
    addClick, itemKey, 
    itemImg, label, list, 
    path, addGeneral, slackbot } = props

  const [isRotate, setIsRotate] = useState(false)
  const [showOptions, isShowOptions] = useState(false)

  return (
    <div className={styles.sidebar_list_items}>
      <div
        isRotate={isRotate} 
        showOptions={showOptions}
        className={styles.sidebar_tab_item}
        onMouseEnter={() => isShowOptions(true)}
        onMouseLeave={() => isShowOptions(false)}>
        <div className={styles.sidebar_tab_btn}>
          <button onClick={() => setIsRotate(!isRotate)}>
            <RiArrowRightSFill size={20}/>
          </button>
          <p style={{marginLeft: '8px'}}>{label}</p>
        </div>
        <div>
          <button>
            <FiMoreVertical size={18}/>
          </button>
          <button onClick={addClick}>
            <HiPlus size={18}/>
          </button>
        </div>
      </div>
      <ul isRotate={isRotate}>
        {addGeneral && 
          <Link href="channel/general">
            <a className={styles.sidebar_list_item}>
              # general
            </a>
          </Link>
        }
        {slackbot && 
          <Link href="/client">
            <a className={styles.sidebar_list_item}>
              <img src="/slack-bot.svg" className={styles.user_avatar}/>
              <p>Slackbot</p>
            </a>
          </Link>
        }
        {list?.map((item, i) => (
          <Link key={i} href={path+'/'+item.id}>
            <a className={styles.sidebar_list_item}>
              {itemImg}
              <p>{item[itemKey]}</p>
            </a>
          </Link> 
        ))}
      </ul>
    </div>
  )
}

export default ListItems
