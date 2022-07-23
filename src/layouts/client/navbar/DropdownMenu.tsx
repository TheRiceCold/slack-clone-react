import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {MdSignalCellular4Bar} from "react-icons/md";
import {BiChevronRight} from "react-icons/bi";
import {FaRegSmile} from "react-icons/fa";
import {FC} from "react";

import {useAuth} from "@/contexts/AuthContext";
import {useStorage} from "@/hooks/useStorage";

import UserAvatar from "@/components/UserAvatar";

const DropdownMenu: FC = () => {
  const {authData} = useAuth();
  const storage = useStorage();

  const handleSignOut = () => {
    storage.removeItem("auth");
    location.reload(); 
  };

  return (
    <article className={styles.dropdown}>
      <nav className={styles.dropdown_header}>
        <UserAvatar size={38} src={images.defaultUser} alt="default user"/>
        <div style={{
          display: "flex",
          paddingLeft: 10,
          flexDirection: "column"
        }}>
          <p style={{
            color: "lightgray",
            fontWeight: "bold"
          }}>{authData.uid}</p>
          <span style={{
            fontSize: 13,
            color: "gray",
            display: "flex",
            alignItems: "center",
          }}>
            <MdSignalCellular4Bar color={"#007a5a"} style={{ marginRight: 4 }}/>
            Active
          </span>
        </div>
      </nav>
      <button className={styles.status_button}>
        <FaRegSmile size={20} />
        Update your status
      </button>

      <div className={styles.dropdown_content}>
        <span className={styles.dropdown_item}>
          Set yourself as away
        </span> 
        <span className={styles.dropdown_item}>
          <p>Pause notifications</p>
          <BiChevronRight />
        </span>
      </div>

      <div className={styles.dropdown_content}>
        <span className={styles.dropdown_item}>
          Profile
        </span>
        <span className={styles.dropdown_item}>
          Preferences
        </span>
      </div>

      <footer style={{ paddingTop: "8px" }}>
        <span 
          onClick={handleSignOut}
          className={styles.dropdown_item}
        >
          Sign out of Avion School
        </span>
      </footer>
    </article>
  );
}

export default DropdownMenu;
