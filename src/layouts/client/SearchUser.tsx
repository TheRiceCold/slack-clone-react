import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {CgClose} from "react-icons/cg";
import {
  MutableRefObject,
  useEffect,
  useState, 
  Fragment,
  useRef, 
  FC, 
} from "react";
import {
  findObjectByKey, 
  getEmailById,
} from "@/utils/helpers";

import {useMessages} from "@/contexts/MessagesContext";
import {useUsers} from "@/contexts/UsersContext";

import UserAvatar from "@/components/UserAvatar";
import UserType from "@/types/UserType";

const SearchUser: FC = () => {
  const {getUsers} = useUsers();
  const {selectedId, setSelectedId} = useMessages();

  const inputRef = useRef<HTMLInputElement>();
  const [users, setUsers] = useState<UserType[]>();
  const [suggestions, setSuggestions] = useState<UserType[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    (async () => setUsers(await getUsers()))()
  }, [])

  const handleChange = () => {
    let matches = [];
    const input = inputRef.current as HTMLInputElement;

    if (!!input.value.length) {
      matches = findObjectByKey(users, "email", input.value)
      setShowSuggestions(true);
      setSuggestions(matches);
    } else {
      matches = [];
      setShowSuggestions(false);
    }
  };

  const handleClick = (id: Number) => {
    setSelectedId(id);
    const input = inputRef.current as HTMLInputElement;
    input.value = "";
    input.placeholder = "";
  };

  const inputProps = {
    onChange: handleChange,
    ref: inputRef as MutableRefObject<HTMLInputElement>,
    placeholder: "#a-channel, @somebody, or somebody@example.com"
  };

  const suggestionItemProps = (user: UserType, key: any) => {
    return {
      key,
      className: styles.item,
      onClick: () => handleClick(user.id),
    };
  };

  const closeIconProps = {
    size: 20,
    onClick: () => setSelectedId(null)
  };

  return (
    <Fragment>
      <div className={styles.search_user}>
        <label>To: </label>
        {selectedId && 
          <div className={styles.selected}>
            <UserAvatar src={images.defaultUser} alt="default user" />
            <p>{getEmailById(users, selectedId)}</p>
            <CgClose {...closeIconProps}/>
          </div> 
        }
        <input {...inputProps}/>
      </div>
      <div
        className={styles.suggestions}
        style={{ display: showSuggestions ? "initial" : "none" }}
      >
        {suggestions.map((user: UserType, index) => (
          <div {...suggestionItemProps(user, index)}>
            <UserAvatar src={images.defaultUser} alt="default user" />
            <p>{user.email}</p>
          </div>
        ))} 
      </div>
    </Fragment>
  );
};

export default SearchUser;
