import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "styles/StdButton.module.css";

import { IStdButton } from "components/interfaces";

const StdButton: FC<IStdButton> = ({
  ButtonPath,
  ButtonText,
  ButtonStatus = false,
}) => {
  return (
    <div className={styles.ButtonContainer}>
      <Link to={ButtonPath}>
        <button className={styles.StdButton} disabled={ButtonStatus}>
          {ButtonText}
        </button>
      </Link>
    </div>
  );
};

export default StdButton;
