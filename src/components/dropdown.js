import React from "react";

import "./dropdown.css";

import Stdbtn from "./std-button.js";

export default class Dropdown extends React.Component {
  render() {
    return (
      <div className='dropdown_block'>
        <Stdbtn
          button_text={this.props.button_text1}
          button_path={this.props.button_path1}
        />
        <Stdbtn
          button_text={this.props.button_text2}
          button_path={this.props.button_path2}
        />
        <Stdbtn
          button_text={this.props.button_text3}
          button_path={this.props.button_path3}
        />
      </div>
    );
  }
}
