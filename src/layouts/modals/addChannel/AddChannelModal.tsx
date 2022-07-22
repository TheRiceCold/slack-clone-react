import styles from "@/styles/client/Client.module.sass";

import {
  SetStateAction,
  Fragment,
  Dispatch,
  useState,
  FC, 
} from "react";

import MembersModal from "./MembersModal";
import NameModal from "./NameModal";

interface IProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const AddChannelModal: FC<IProps> = ({show, setShow}) => {
  const [channelName, setChannelName] = useState<string>("");
  const [isOpenNext, setIsOpenNext] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
    setIsOpenNext(false);
  };

  const nameModalProps = {
    isOpenNext,
    channelName,
    setIsOpenNext,
    setChannelName,
    onClose: handleClose,
  };

  const membersModalProps = {
    isOpenNext,
    channelName,
    onClose: handleClose,
  };

  return (
    <Fragment>
      {show &&
        <>
          <NameModal {...nameModalProps} />
          <MembersModal {...membersModalProps} />
        </>
      }
    </Fragment>
  );
};

export default AddChannelModal;
