import React, { FC } from "react";

import styles from "styles/Header.module.css";

import BBRRLogo from "assets/images/BBRR Solutions Banner without background.png";
import Nav from "components/Nav";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <div>
        <Link to="/">
          <img
            className={styles.CompanyBanner}
            src={BBRRLogo}
            alt="BBRR Solutions Logo"
          />
        </Link>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
