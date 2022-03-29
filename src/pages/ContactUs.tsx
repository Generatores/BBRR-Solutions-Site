import React, { FC } from "react";

const ContactUs: FC = () => {
  return (
    <div className="Body">
      <h2>Contact us</h2>
      <div className="PageContainer">
        <p>
          Please contact our business from 8:00 to 17:00 (UTC-8 or Pacific Time)
          from Monday to Friday for a complete presentation of our business,
          services and products we can offer to you and your business.
        </p>
      </div>

      <div className="PageContainer">
        <h3>HeadQuarters:</h3>
        <p>+52 (686) 568-6480</p>

        <h3>Sales Department:</h3>
        <p>+52 (686) 337-1694</p>
      </div>
      <div className="PageContainer">
        <h3>Address Book</h3>
        <ul>
          <li>
            <a href="mailto:sales@bbrr.solutions">Sales Team</a>
          </li>
          <li>
            <a href="mailto:support@bbrr.solutions">Support Team</a>
          </li>
        </ul>
      </div>

      <div className="PageContainer">
        <h3>Follow us at:</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/company/bbrrsolutions/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/BBRR-Solutions">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
