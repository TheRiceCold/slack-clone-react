import {FC} from "react";

interface IProps {
  alt: string;
  src: string;
  size?: Number;
  onClick?: () => void;
};

const UserAvatar: FC<IProps> = ({
  alt, 
  src, 
  size,
  onClick,
}) => (
  <img 
    alt={alt}
    src={src}
    onClick={onClick}
    style={{
      width: size+"px",
      height: size+"px",
      cursor: "pointer",
      borderRadius: "3px",
    }} 
  />
);

export default UserAvatar;
