import React, { FC } from "react";

import styles from "../../styles/Footer.module.css";

import Stdbtn from "../../components/StdButton";

const Footer: FC = () => {
  return (
    <div className={styles.Footer}>
      <Stdbtn ButtonText="Privacy Policy" ButtonPath="/Legal/Privacy-Policy" />
      <Stdbtn ButtonText="Terms of Use" ButtonPath="/Legal/Terms-of-Use" />
      <div className={styles.CompanyFooter}>
        <p>Contact us at:</p>
        <p>+52 (686) 568-6480</p>
        <p>+52 (686) 337-1694</p>
        <p>Creating solutions since 2020</p>
        <p>
          © <span className="copyright-year">{new Date().getFullYear()}</span>{" "}
          <span className="company-name">BBRR Solutions</span> - All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
