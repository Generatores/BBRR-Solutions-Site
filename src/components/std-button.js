import React from "react";
import { Link } from "react-router-dom";
import "./std-button.css";

export default class Stdbtn extends React.Component {
  render() {
    return (
      <div className='button_container'>
        <Link to={this.props.button_path}>
          <button className='std_button'>{this.props.button_text}</button>
        </Link>
      </div>
    );
  }
}
