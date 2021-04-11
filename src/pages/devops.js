import "./body.css";
import "./devops.css";

import DevopsLogo from "../assets/images/BBRR DevOps without background.png";

export default function Devops() {
  return (
    <div className='body'>
      <div className='logo_div'>
        <img src={DevopsLogo} alt='BBRR Devops Logo' className='devops_logo' />
      </div>
      <h2>BBRR Solutions DevOps Team</h2>
      <p>
        The improvement of current technologies and the development of newer
        tools it's a goob that <b>BBRR Solutions</b> does on a daily basis.
      </p>
      <br />
      <p>
        Starting at the same time <b>BBRR Solutions</b> was founded, the{" "}
        <b>CEO and Founder</b> Bruno Ruiz formed a non-profit team under{" "}
        <b>BBRR Solutions</b> guidence and support.
      </p>
      <br />
      <p>
        Working under the values of <i>Integrity</i> and <i>Innovation</i>,{" "}
        <b>BBRR Solutions DevOps Team</b> will always be a paralell organization
        started and founded by <b>BBRR Solutions</b> but with the main idea of:
        <ul>
          <li>Innovate.</li>
          <li>Improve.</li>
          <li>Transform.</li>
        </ul>
        the technologies.
      </p>
      <br />
      <p>
        For more information about <b>BBRR Solutions DevOps Team</b> please
        visit the main site at{" "}
        <a href='https://dev.bbrr.solutions' target='_blank'>
          dev.bbrr.solutions
        </a>
      </p>
    </div>
  );
}
