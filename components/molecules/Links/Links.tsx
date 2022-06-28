import { FC } from "react";
import Link from "../../atoms/Link/Link";
import { LinksProps } from "../../../types/types";
import styles from "./Links.module.css";

const Links: FC<LinksProps> = (props) => {
  const links = props.links;
  return (
    <div className={styles.links}>
      {links?.map((link, key) => (
        <div key={key}>
          <Link {...link} />
        </div>
      ))}
    </div>
  );
};

export default Links;
