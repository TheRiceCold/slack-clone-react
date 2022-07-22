import {BiChevronDown} from "react-icons/bi";
import {FC} from "react";

import Link from "@/components/Link";

interface INavListItem {
  link: string;
  label: string;
  dropdown?: boolean;
}

const NavListItem: FC<INavListItem> = ({ link, label, dropdown }) => (
  <li>
    <Link to={link}>
      {label} 
    </Link>
    {dropdown && <BiChevronDown size={18} />}
  </li>
);

export default NavListItem;
