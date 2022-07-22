import {FC} from "react";
import {Link} from "react-router-dom";
import images from "@/constants/images";

interface IProps {
  size: Number;
  type: string;
};

const Logo: FC<IProps> = ({ size, type })=> (
  <div 
    style={{
      width: size+"px",
      display: "flex",
      marginLeft: "4em",
      marginRight: "2em",
      alignItems: "center",
    }}
  >
    <Link to="/">
      <img
        alt="slack text logo"
        style={{ width: "100%" }}
        src={images.slackTextLogo}
      />
    </Link>
  </div>
);

export default Logo;
