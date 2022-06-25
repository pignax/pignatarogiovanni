import { FC } from "react";
import { LinkProps } from "../../../types/types";
import styles from "./Link.module.css";

const Link: FC<LinkProps> = (link) => {
  const href = link.href;
  const name = link.name;
  return (
    <div className={styles.link}>
      <a href={href}>{name}</a>;
    </div>
  );
};

export default Link;
