import "./footer.css";

import Stdbtn from "../components/std-button.js";

export default function Footer() {
  return (
    <div className='footer'>
      <Stdbtn
        button_text='Privacy Policy'
        button_path='/Legal/Privacy-Policy'
      />
      <Stdbtn button_text='Terms of Use' button_path='/Legal/Terms-of-Use' />
      <div className='company_footer'>
        <p>Contact us at:</p>
        <p>+52 (686) 568-6480</p>
        <p>+52 (686) 337-1694</p>
        <p>Creating solutions since 2020</p>
        <p>
          © <span className='copyright_year'>{new Date().getFullYear()}</span>{" "}
          <span className='company_name'>BBRR Solutions</span> - All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}
