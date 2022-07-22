import styles from "@/styles/components/Components.module.sass";

import {CgClose} from "react-icons/cg";
import {FC, ReactNode} from "react";

interface IProps {
  title: string,
  onClose: () => void;
  children: ReactNode | ReactNode;
}

const Modal: FC<IProps> = ({title, onClose, children}) => {
  return (
    <section
      onClick={onClose}
      className={styles.modal_overlay}
    >
      <article
        className={styles.modal}
        onClick={e => e.stopPropagation()}
      >
        <header className={styles.modal_header}>
          <h2>{title}</h2>
          <CgClose onClick={onClose}/>
        </header>
        <div className={styles.modal_body}>
          {children}
        </div>
      </article>
    </section>
  );
};

export default Modal;
