import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {useUsers} from "@/contexts/UsersContext";
import {
  findObjectByKey,
  uniqueArray, 
} from "@/utils/helpers";
import {
  SetStateAction,
  ChangeEvent,
  Dispatch,
  Fragment, 
  useState, 
  FC, 
} from "react";

import UserAvatar from "@/components/UserAvatar";
import UserType from "@/types/UserType";

interface IProps {
  setSelected: Dispatch<SetStateAction<Number[]>>;
};

const SearchMember: FC<IProps> = ({setSelected}) => {
  const {users} = useUsers();
  const [input, setInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<UserType[]>([]);

  const handleChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setInput(input.value);
    let matches = input.value.length > 0 ? findObjectByKey(users, "email", input.value) : [];
    setSuggestions(matches);
  };

  return (
    <Fragment>
      <input
        onChange={handleChange}
        placeholder="somebody@example.com"
      />
      <div 
        className={styles.suggestions} 
        style={{
          display: !suggestions.length ? "none" : ""
        }}
      >
        {suggestions.map((user: UserType, index) => (
          <div 
            key={index} 
            onClick={() => setSelected(
              (current: Number[]) => uniqueArray([...current, user.id])
            )}
          >
            <UserAvatar src={images.defaultUser} alt="default user" />
            <span>{user.email}</span>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SearchMember;
