import {MdSignalCellular4Bar} from "react-icons/md"
import {BiChevronRight} from "react-icons/bi"
import {FaRegSmile} from "react-icons/fa"
import {FC} from "react"

import {useAuth} from "@/contexts/AuthProvider"

import styles from "@/styles/Client.module.scss"
  
const DropdownMenu: FC = () => {
  // const email = useAuth().auth.uid

  return (
    <article className={styles.dropdownMenu}>
      <nav> 
        <img src="/default-user.svg"
          className={styles.userAvatar}
          alt="default user image" />
        <div className={styles.details}>
          <p>Email</p>
          <span>
            <MdSignalCellular4Bar color={'#007a5a'}/>
            Active
          </span>
        </div>
      </nav>

      <button className={styles.statusBtn}>
        <FaRegSmile size={20}/>
        Update your status
      </button>

      <div className={styles.content}>
        <span>Set yourself as away</span>
        <span>
          <p>Pause notifications</p>
          <BiChevronRight/>
        </span>
      </div>

      <div className={styles.content}>
        <span>Profile</span>
        <span>Preferences</span>
      </div>

      <footer style={{paddingTop: "8px"}}>
        <span onClick={() => localStorage.removeItem('user')}>
          Sign out of Avion School
        </span>
      </footer>  
    </article>
  )
}

export default DropdownMenu
