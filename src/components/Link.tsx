import {Link as RouterLink} from "react-router-dom";
import {FC, ReactNode} from "react";

interface IProps {
  to?: string;
  onClick?: () => void;
  children: ReactNode | ReactNode[];
};

const Link: FC<IProps> = ({to, onClick, children}) => 
  !to ? (
    <span onClick={onClick}> 
      {children} 
    </span>
  ) : /^https?:\/\//.test(to) ?
    (
      <a href={to} onClick={onClick}>
        {children}
      </a>
    ) : (
      <RouterLink to={to} onClick={onClick}>
        {children}
      </RouterLink>
    );

export default Link;
