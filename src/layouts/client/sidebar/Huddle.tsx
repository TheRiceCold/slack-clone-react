import styles from "@/styles/client/Client.module.sass";

import {MdPodcasts} from "react-icons/md";
import {FC} from "react";

const Huddle: FC = () => {
  const label = "batch15";

  return (
    <div className={styles.huddle}>
      <MdPodcasts size={20} />
      <p>{label}</p>
    </div>
  );
};

export default Huddle;
