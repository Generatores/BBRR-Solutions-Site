import "./nav.css";

import Stdbtn from "../components/std-button.js";
import Dropdown from "../components/dropdown.js";

export default function Nav() {
  return (
    <div className='nav header_container'>
      <Stdbtn button_text='Home' button_path='/' />
      <div className='dropdown_container'>
        <Stdbtn button_text='Our Services' button_path='/Our-Services' />
        <Dropdown
          button_text1='IT Support'
          button_path1='/Our-Services/IT-Support'
          button_text2='Consulting'
          button_path2='/Our-Services/Consulting'
          button_text3='DevOps'
          button_path3='/Our-Services/DevOps'
        />
      </div>
      <div className='dropdown_container'>
        <Stdbtn button_text='About us' button_path='/About-us' />
        <Dropdown
          button_text1='History'
          button_path1='/About-us/History'
          button_text2='News/Events'
          button_path2='/About-us/News-and-Events'
          button_text3='Careers'
          button_path3='/About-us/Careers'
        />
      </div>
    </div>
  );
}
