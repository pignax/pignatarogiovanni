import { FC } from "react";
import { MainProps } from "../../../types/types";

const Main: FC<MainProps> = (props) => {
  const title = props.title;
  return (
    <main>
      <h2>{title}</h2>
    </main>
  );
};

export default Main;
