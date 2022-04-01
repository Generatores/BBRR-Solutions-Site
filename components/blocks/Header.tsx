import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Header.module.css";

import BBRRLogo from "../../assets/images/BBRR Solutions Banner without background.png";
import Nav from "../../components/Nav";

const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <div>
        <Link href="/">
          <div className={styles["CompanyBanner"]}>
            <Image src={BBRRLogo} alt="BBRR Solutions Logo" />
          </div>
        </Link>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
