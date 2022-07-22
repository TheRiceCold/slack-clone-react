import styles from "@/styles/client/Client.module.sass";

import {useUsers} from "@/contexts/UsersContext";
import {FC, useEffect, useState} from "react"; 
import {useParams} from "react-router-dom";
import {BiLockAlt} from "react-icons/bi";

import Conversations from "@/layouts/client/Conversations";
import UserType from "@/types/UserType";

const DirectMessage: FC = () => {
  const {id} = useParams();
  const numberId = Number(id);
  const {getAllUsers, getEmailById} = useUsers();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    (async() => {
      const users = await getAllUsers();
      const found = users.find((user: UserType) => user.id === Number(id));
      setEmail(current => found ? found.email : current);
    })()
  }, [id]);

  return (
    <section className={styles.channel}>
      <nav className={styles.channel_nav_top}>
        <BiLockAlt />
        <h4>{email}</h4>
      </nav>
      <Conversations type="User" id={numberId} />
    </section>
  );
};

export default DirectMessage;
