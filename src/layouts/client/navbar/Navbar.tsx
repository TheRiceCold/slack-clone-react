import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {MdHelpOutline} from "react-icons/md";
import {CgSearch} from "react-icons/cg";
import {BiTime} from "react-icons/bi";
import {FC, useState} from "react";

import UserAvatar from "@/components/UserAvatar";
import DropdownMenu from "./DropdownMenu";

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const userAvatarProps = {
    size: 28,
    alt: "default user",
    src: images.defaultUser,
    onClick: () => setOpen(!open)
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.search}>
        <BiTime 
          size={22} 
          style={{ marginRight: "20px" }}
          onClick={() => alert("Not yet available")}
        />
        <div className={styles.content}>
          <input type="text" placeholder="Search Avion School" />
          <CgSearch size={18}/>
        </div>
      </div> 
      <div className={styles.user_content}>
        <MdHelpOutline 
          size={22}
          onClick={() => alert("Not yet available")}
        />
        {open && <DropdownMenu/>}
        <UserAvatar {...userAvatarProps} />
      </div>
    </header>
  );
};

export default Navbar;
