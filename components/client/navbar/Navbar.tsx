import {MdHelpOutline} from "react-icons/md"
import {CgSearch} from "react-icons/cg"
import {BiTime} from "react-icons/bi"
import {FC, useState} from "react"

import DropdownMenu from "@/components/client/navbar/DropdownMenu"

import styles from "@/styles/Client.module.scss"

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className={styles.navbar}>
      <section>
        <BiTime size={22}/>
        <div className={styles.searchBox}>
          <input type='text' placeholder='Search Avion School' />
          <CgSearch size={18}/>
        </div>
      </section>
      <section className={styles.userContent}>
        <MdHelpOutline size={22}/>
          {open && <DropdownMenu/>}
          <img
            src="/default-user.svg" height="28" 
            alt="default user image"
            className={styles.userAvatar}
            onClick={() => setOpen(!open)}
          />  
      </section>
    </header>
  )
}

export default Navbar
