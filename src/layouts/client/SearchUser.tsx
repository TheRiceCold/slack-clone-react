import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {findObjectByKey} from "@/utils/helpers";
import {CgClose} from "react-icons/cg";
import {
  MutableRefObject,
  useState, 
  Fragment,
  useRef, 
  FC, 
} from "react";

import {useMessages} from "@/contexts/MessagesContext";
import {useUsers} from "@/contexts/UsersContext";

import UserAvatar from "@/components/UserAvatar";
import UserType from "@/types/UserType";

const SearchUser: FC = () => {
  const {users, getEmailById} = useUsers();
  const inputRef = useRef<HTMLInputElement>();
  const {selectedId, setSelectedId} = useMessages();
  const [suggestions, setSuggestions] = useState<UserType[]>([]);

  const handleChange = () => {
    const input = inputRef.current as HTMLInputElement;
    let matches = input.value.length > 0 ? findObjectByKey(users, "email", input.value) : [];
    setSuggestions(matches);
  };

  const handleClick = (id: Number) => {
    setSelectedId(id);
    const input = inputRef.current as HTMLInputElement;
    input.value = "";
    input.placeholder = "";
  };

  const inputProps = {
    ref: inputRef as MutableRefObject<HTMLInputElement>,
    onChange: handleChange,
    placeholder: "#a-channel, @somebody, or somebody@example.com"
  };

  const suggestionProps = (suggestions: UserType[]) => {
    return {
      show: suggestions.length,
      className: styles.suggestions
    };
  };

  const suggestionItemProps = (user: UserType, key: any) => {
    return {
      key,
      className: styles.item,
      onClick: () => handleClick(user.id)
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
            <p>{getEmailById(selectedId)}</p>
            <CgClose {...closeIconProps}/>
          </div> 
        }
        <input {...inputProps}/>
      </div>
      <div {...suggestionProps(suggestions)}>
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
