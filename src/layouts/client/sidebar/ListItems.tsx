import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {RiArrowRightSFill} from "react-icons/ri";
import {useState, FC, ReactNode} from "react";
import {FiMoreVertical} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import {HiPlus} from "react-icons/hi";

import MessageSenderType from "@/types/MessageSenderType";
import UserAvatar from "@/components/UserAvatar";
import ChannelType from "@/types/ChannelType";

interface IProps {
  path: string;
  itemKey: any;
  label: string;
  itemImg?: ReactNode;
  addOnClick: () => void;
  withGeneralChannel?: boolean;
  withSlackbotChannel?: boolean;
  list: ChannelType[] | MessageSenderType[];
};

const ListItems: FC<IProps> = ({
  path,
  list, 
  label, 
  itemKey, 
  itemImg,
  addOnClick,
  withGeneralChannel, 
  withSlackbotChannel,
}) => { 

  const [isRotate, setIsRotate] = useState(false);
  const [isShowOptions, setShowOptions] = useState(false);
  const rotateAnimStyle = {
    transition: "transform 0.1s ease",
    transform: `rotate(${isRotate ? "90deg" : "0deg"})`
  };
  const opacityAnimStyle = {
    opacity: isShowOptions ? "1" : "0",
    transition: "opacity 0.1s ease-out",
  };

  const itemTabProps = {
    className: styles.list_items_tab,
    onMouseEnter: () => setShowOptions(true),
    onMouseLeave: () => setShowOptions(false),
  };

  return (
    <div className={styles.list_items} style={{ marginTop: 10 }}>
      <div {...itemTabProps}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={() => setIsRotate(!isRotate)}>
            <RiArrowRightSFill size={20} style={rotateAnimStyle} />
          </button> 
          <p style={{ marginLeft: "8px" }}>{label}</p>
        </div>
        <div style={opacityAnimStyle}>
          <button>
            <FiMoreVertical size={18}/>
          </button>    
          <button onClick={addOnClick}>
            <HiPlus size={18}/>
          </button>
        </div>
      </div>
      <div style={{ display: !isRotate ? "none" : "" }}>
        {withGeneralChannel && 
          <NavLink to="channel/general" className={styles.list_item}>
            # general
          </NavLink>
        }
        {withSlackbotChannel && 
          <NavLink to="" className={styles.list_item}>
            <UserAvatar size={20} src={images.slackbot} alt="slackbot" />
            <p>Slackbot</p>
          </NavLink>
        }
        {list && list.map((item: any, index) => (
          <NavLink key={index} to={`${path}/${item.id}`}>
            {itemImg}
            <p>{item[itemKey]}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default ListItems;
