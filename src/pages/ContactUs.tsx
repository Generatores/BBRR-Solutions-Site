import React, { FC } from "react";

const ContactUs: FC = () => {
  return (
    <div className="Body">
      <h2>Contact us</h2>

      <p>
        Please contact our business from 8:00 to 17:00 (UTC-8 or Pacific Time)
        from Monday to Friday for a complete presentation of our business,
        services and products we can offer to you.
      </p>
      <h3>HeadQuarters:</h3>
      <p>+52 (686) 568-6480</p>
      <h3>Sales Department:</h3>
      <p>+52 (686) 337-1694</p>
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
  );
};

export default ContactUs;
