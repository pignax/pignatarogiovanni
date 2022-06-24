import { FC } from "react";
import { HeaderProps } from "../../../types/types";

const Header: FC<HeaderProps> = (props) => {
  const links = props.links;
  return (
    <div>
      {links.map((link, key) => (
        <div key={key}>
          <a href={link.href}>{link.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Header;
