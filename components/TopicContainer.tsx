import React, { FC } from "react";
import parse from "html-react-parser";
import Image from "next/image";

import styles from "../styles/TopicContainer.module.css";

import { ITopicContainer } from "../components/interfaces";
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
      <div className={styles["Image"]}>
        <Image src={ImageSrc} alt={ImageAlt} />
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
