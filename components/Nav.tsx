import React, { FC } from "react";
import StdButton from "./StdButton";

const Nav: FC = () => {
  return (
    <>
      <StdButton ButtonPath="/" ButtonText="Home" />
      <StdButton ButtonPath="/About-us" ButtonText="About us" />
      <StdButton ButtonPath="/Services" ButtonText="Services" />
      <StdButton ButtonPath="/Contact-us" ButtonText="Contact Us" />
    </>
  );
};

export default Nav;
