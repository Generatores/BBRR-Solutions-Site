import React, { FC } from "react";
import Link from "next/link";

import styles from "../styles/StdButton.module.css";

import { IStdButton } from "../components/interfaces";

const StdButton: FC<IStdButton> = ({
  ButtonPath,
  ButtonText,
  ButtonStatus = false,
}) => {
  return (
    <div className={styles.ButtonContainer}>
      <Link href={ButtonPath}>
        <button className={styles.StdButton} disabled={ButtonStatus}>
          {ButtonText}
        </button>
      </Link>
    </div>
  );
};

export default StdButton;
