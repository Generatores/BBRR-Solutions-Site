import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "styles/StdButton.module.css";

interface IStdButton {
  ButtonPath: string;
  ButtonText: string;
}

const StdButton: FC<IStdButton> = ({ ButtonPath, ButtonText }) => {
  return (
    <div className={styles.ButtonContainer}>
      <Link to={ButtonPath}>
        <button className={styles.StdButton}>{ButtonText}</button>
      </Link>
    </div>
  );
};

export default StdButton;
