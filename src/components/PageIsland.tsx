import React, { FC } from "react";
import parse from "html-react-parser";

import styles from "styles/PageIsland.module.css";
import StdButton from "./StdButton";

interface IPageIsland {
  Title: string;
  Body: string;
  ButtonPath: string;
  ButtonText: string;
}

const PageIsland: FC<IPageIsland> = ({
  Title,
  Body,
  ButtonPath,
  ButtonText,
}) => {
  return (
    <div className={styles["Container"]}>
      <h2>{Title}</h2>
      <p>{parse(Body)}</p>
      <StdButton ButtonPath={ButtonPath} ButtonText={ButtonText} />
    </div>
  );
};

export default PageIsland;
