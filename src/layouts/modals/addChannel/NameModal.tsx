import styles from "@/styles/client/Client.module.sass";

import {CgClose} from "react-icons/cg";
import {
  SetStateAction,
  Fragment,
  Dispatch,
  FC
} from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";

interface IProps {
  onClose: () => void;
  isOpenNext: boolean;
  channelName: string;
  setIsOpenNext: Dispatch<SetStateAction<boolean>>;
  setChannelName: Dispatch<SetStateAction<string>>;
};

const NameModal: FC<IProps> = ({
  onClose, 
  isOpenNext,
  channelName,
  setIsOpenNext,
  setChannelName
}) => {
  const bodyText = `
    Channels are where your team communicates. They're best when 
    organized around a topic - #marketing, for example.`;

  const handleClick = () => {
    if (!channelName || channelName.length < 3 || channelName.length > 15)
      alert("Name should be within 3-15 characters long");
    else
      setIsOpenNext(true);
  };

  return (
    <Fragment>
      {!isOpenNext &&
        <Modal title="Create a channel" onClose={onClose}>
          <article className={styles.modal_body}>
            <p>{bodyText}</p> 
            <label>Name</label>
            <div style={{
              marginTop: 10,
              display: "flex",
              alignItems: "center"
            }}>
              <span
                style={{
                  width: 8,
                  height: 39,
                  padding: 10,
                  fontSize: 14,
                  color: "gray",
                  border: "1px solid gray",
                  borderRightStyle: "none",
                  borderRadius: "4px 0 0 4px"
                }}
              >
                #
              </span>
              <input 
                style={{
                  width: "100%",
                  padding: 10,
                  color: "lightgray",
                  background: "none",
                  border: "1px solid gray",
                  borderLeftStyle:"none",
                  borderRadius: "0 4px 4px 0",
                }}
                placeholder="e.g plan-budget"
                onChange={e => setChannelName(e.target.value)}
              />
            </div>
            <Button 
              style={{ 
                marginTop: 16,
                float: "right",
              }}
              onClick={handleClick}
            >Next</Button>
          </article>
        </Modal>
      }
    </Fragment>
  );
};

export default NameModal;
