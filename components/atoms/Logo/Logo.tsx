import { FC } from "react";
import { LogoProps } from "../../../types/types";
import styles from "./Logo.module.css";

const Logo: FC<LogoProps> = (props) => {
  const text = props.text;
  return <h1 className={styles.logo}>{text}</h1>;
};

export default Logo;
