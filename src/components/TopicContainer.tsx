import React, { FC } from "react";

import styles from "styles/TopicContainer.module.css";

import parse from "html-react-parser";
import { ITopicContainer } from "components/interfaces";
import StdButton from "./StdButton";

const TopicContainer: FC<ITopicContainer> = ({
  Title,
  Body,
  ImageSrc,
  ImageAlt,
  RenderButton = false,
  ButtonPath = "",
}) => {
  return (
    <div className={styles["Container"]}>
      <div>
        <img src={ImageSrc} alt={ImageAlt} className={styles["Image"]} />
      </div>
      <div>
        <h3 className={styles["Title"]}>{Title}</h3>
        <p>{parse(Body || "")}</p>
        {RenderButton ? (
          <StdButton ButtonPath={ButtonPath} ButtonText="See more..." />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TopicContainer;
