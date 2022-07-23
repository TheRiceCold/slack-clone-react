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
  useEffect,
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
  const {getUsers} = useUsers();
  const [input, setInput] = useState<string>("");
  const [users, setUsers] = useState<UserType[]>();
  const [suggestions, setSuggestions] = useState<UserType[]>([]);

  useEffect(() => {
    (async () => setUsers(await getUsers()))()
  }, []);

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
            className={styles.item}
            onClick={() => setSelected(
              (current: Number[]) => uniqueArray([...current, user.id])
            )}
          >
            <UserAvatar 
              alt="default user" 
              src={images.defaultUser} 
              />
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SearchMember;
