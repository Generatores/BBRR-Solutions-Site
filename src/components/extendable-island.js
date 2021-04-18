import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

import "./extendable-island.css";

import Stdbtn from "./std-button.js";

export default class Extendableisland extends Component {
  render() {
    return (
      <div className='extendable_island'>
        <div className='ei_container ei_title_container'>
          <h3>{ReactHtmlParser(this.props.title)}</h3>
        </div>
        <div className='ei_container ei_body_container'>
          {ReactHtmlParser(this.props.text)}
          <Stdbtn
            button_text={this.props.button_text}
            button_path={this.props.button_path}
          />
        </div>
      </div>
    );
  }
}
