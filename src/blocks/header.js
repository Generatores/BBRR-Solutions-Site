import "./header.css";

import BBRRLogo from "../assets/images/BBRR Solutions without background.png";

import Nav from "./nav.js";

export default function Header() {
  return (
    <div className='header'>
      <div className='header_container'>
        <img
          src={BBRRLogo}
          alt='BBRR Logo'
          id='bbrr_logo'
          className='header_item'
        />
        <h1 className='header_item'>You have the idea, we got you there...</h1>
      </div>
      <Nav />
    </div>
  );
}
