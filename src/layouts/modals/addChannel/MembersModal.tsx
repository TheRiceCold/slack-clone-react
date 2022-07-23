import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {useChannels} from "@/contexts/ChannelsContext";
import {useUsers} from "@/contexts/UsersContext";
import {getEmailById} from "@/utils/helpers";
import {CgClose} from "react-icons/cg";
import {
  useEffect, 
  useState, 
  Fragment,
  FC, 
} from "react";

import SearchMember from "@/layouts/client/SearchMember";
import UserAvatar from "@/components/UserAvatar";
import UserType from "@/types/UserType";
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
  const {getUsers} = useUsers();
  const {createChannel} = useChannels();
  const [users, setUsers] = useState<UserType[]>();
  const [selected, setSelected] = useState<Number[]>([]);

  useEffect(() => {
    (async () => setUsers(await getUsers()))()
  }, []);

  const modalProps = {
    handleClick: () => createChannel(channelName, selected),
    buttonContent: selected.length ? "Create" : "Skip for now",
  };

  console.log(styles.add_members_modal);

  return (
    <Fragment>
      {isOpenNext &&
        <Modal 
          onClose={onClose}
          title="Add Members" 
          className={styles.add_members_modal}
        >
          <p className={styles.name}># {channelName}</p>
          <SearchMember setSelected={setSelected} />
          <h4>Users to be added: </h4>
          {selected && selected.map((id: any) => (
            <div 
              key={id} 
              className={styles.selected}
            >
              <UserAvatar 
                alt="default user"
                src={images.defaultUser} 
              />
              <p>{getEmailById(users, id)}</p>
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
