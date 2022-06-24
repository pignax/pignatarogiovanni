import { FC } from "react";
import { HeaderProps } from "../../../types/types";

const Header: FC<HeaderProps> = (props) => {
  console.log("props", props);
  return <div>Header</div>;
};

export default Header;
