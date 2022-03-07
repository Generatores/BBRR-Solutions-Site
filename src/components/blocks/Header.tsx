import React, { FC } from "react";

import styles from "styles/Header.module.css";

import BBRRLogo from "assets/images/BBRR Solutions Banner without background.png";

const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <div>
        <img
          className={styles.CompanyBanner}
          src={BBRRLogo}
          alt="BBRR Solutions Logo"
        />
      </div>
      <div>
        <p>Navigation goes here!</p>
      </div>
    </div>
  );
};

export default Header;
