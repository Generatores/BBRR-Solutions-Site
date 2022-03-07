import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "styles/StdButton.module.css";

const StdButton: FC<any> = ({ button_path, button_text }) => {
  return (
    <div className={styles.ButtonContainer}>
      <Link to={button_path}>
        <button className={styles.StdButton}>{button_text}</button>
      </Link>
    </div>
  );
};

export default StdButton;
