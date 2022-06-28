import { FC } from "react";
import { LinkProps } from "../../../types/types";
import styles from "./Link.module.css";

const Link: FC<LinkProps> = (props) => {
  const href = props.href;
  const name = props.name;
  return (
    <div className={styles.link}>
      <a href={href}>{name}</a>
    </div>
  );
};

export default Link;
