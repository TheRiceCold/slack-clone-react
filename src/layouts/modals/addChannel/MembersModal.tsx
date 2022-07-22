import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {useChannels} from "@/contexts/ChannelsContext";
import {useUsers} from "@/contexts/UsersContext";
import {useState, FC, Fragment} from "react";
import {CgClose} from "react-icons/cg";

import SearchMember from "@/layouts/client/SearchMember";
import UserAvatar from "@/components/UserAvatar";
import Modal from "@/components/Modal";

interface IProps {
  onClose: () => void;
  isOpenNext: boolean;
  channelName: string;
};

const MembersModal: FC<IProps> = ({
  onClose,
  isOpenNext, 
  channelName, 
}) => {
  const {getEmailById} = useUsers();
  const {createChannel} = useChannels();
  const [selected, setSelected] = useState<Number[]>([]);

  const modalProps = {
    handleClick: () => createChannel(channelName, selected),
    buttonContent: selected.length ? "Create" : "Skip for now",
  };

  return (
    <Fragment>
      {isOpenNext &&
        <Modal title={`# ${channelName}`} onClose={onClose}>
          <SearchMember setSelected={setSelected}/>
          <h4>Users to be added: </h4>
          {selected && selected.map((id: any) => (
            <div 
              key={id} 
              className={styles.members_selected}
            >
              <UserAvatar 
                alt="default user"
                src={images.defaultUser} 
              />
              <p>{getEmailById(id)}</p>
              <CgClose 
                size={18} 
                onClick={() => {
                  const filtered = selected.filter(_id => id !== id);
                  setSelected(filtered);
                }}
              />
            </div>
          ))}
        </Modal>
      }
    </Fragment>
  );
};

export default MembersModal;
