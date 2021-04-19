import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

import "./home-island.css";

export default class Homeisland extends Component {
  render() {
    return (
      <div className='homeisland'>
        <h2 className='island_title'>{ReactHtmlParser(this.props.title)}</h2>
        <p className='island_text'>{ReactHtmlParser(this.props.text)}</p>
      </div>
    );
  }
}
