import { FC } from "react";
import Logo from "../../atoms/Logo/Logo";
import Links from "../../molecules/Links/Links";
import { HeaderProps } from "../../../types/types";
import styles from "./Header.module.css";

const Header: FC<HeaderProps> = (props) => {
  return (
    <header className={styles.header}>
      <Logo {...props.logo} />
      <Links {...props.links} />
    </header>
  );
};

export default Header;
