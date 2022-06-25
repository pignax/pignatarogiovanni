import { FC } from "react";
import styles from "./Logo.module.css";

const Logo: FC = () => {
  const LOGO_TEXT = "GP";
  return <h1 className={styles.logo}>{LOGO_TEXT}</h1>;
};

export default Logo;
