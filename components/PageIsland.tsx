import React, { FC } from "react";
import parse from "html-react-parser";

import styles from "../styles/PageIsland.module.css";

import { TitleBody } from "../components/interfaces";

const PageIsland: FC<TitleBody> = ({ Title, Body = "" }) => {
  return (
    <div className={styles["Container"]}>
      <h3 className={styles["Title"]}>{Title}</h3>
      <p className={styles["Body"]}>{parse(Body)}</p>
    </div>
  );
};

export default PageIsland;
