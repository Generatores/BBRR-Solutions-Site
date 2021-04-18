import React from "react";

import "./body.css";
import "./our-services.css";

import Extendableisland from "../components/extendable-island";
import Service1 from "../assets/JSON/services/it-support.json";
import Service2 from "../assets/JSON/services/consulting.json";
import Service3 from "../assets/JSON/services/devops.json";

import GoToTop from "../assets/scripts/go-to-top";

export default function Ourservices() {
  return (
    <div className='body ourservices_body'>
      <h2>BBRR Solutions Services</h2>
      <Extendableisland
        title={Service1.title}
        text={Service1.text}
        button_text='IT Support'
        button_path='/Our-Services/IT-Support'
      />
      <Extendableisland
        title={Service2.title}
        text={Service2.text}
        button_text='Consulting'
        button_path='/Our-Services/Consulting'
      />
      <Extendableisland
        title={Service3.title}
        text={Service3.text}
        button_text='DevOps'
        button_path='/Our-Services/DevOps'
      />
      <GoToTop />
    </div>
  );
}
