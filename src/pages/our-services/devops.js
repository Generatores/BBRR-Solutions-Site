import "../body.css";
import "./devops.css";

import DevopsLogo from "../../assets/images/BBRR DevOps without background.png";

import GoToTop from "../../assets/scripts/go-to-top";

export default function Devops() {
  return (
    <div className='body'>
      <div className='logo_div'>
        <img src={DevopsLogo} alt='BBRR Devops Logo' className='devops_logo' />
      </div>
      <p>
        The improvement of current technologies and the development of newer
        tools it's a job that <b>BBRR Solutions</b> strongly supports.
      </p>
      <br />
      <p>
        At the same time <b>BBRR Solutions</b> was founded, the{" "}
        <b>CEO and Founder</b> Bruno Ruiz formed a paralell non-profit
        organization called <b>BBRR Devops</b> under <b>BBRR Solutions</b>{" "}
        guidence and sponsorship.
      </p>
      <br />
      <p>
        Working under the values of <i>Integrity</i> and <i>Innovation</i>,{" "}
        <b>BBRR DevOps</b> will always be a paralell organization started and
        founded by <b>BBRR Solutions</b> that will always look to:
        <ul>
          <li>Innovate.</li>
          <li>Improve.</li>
          <li>Transform.</li>
        </ul>
        the technologies of the world.
      </p>
      <br />
      <p>
        For more information about <b>BBRR DevOps</b> please visit the main site
        at{" "}
        <a href='https://dev.bbrr.solutions' target='_blank'>
          dev.bbrr.solutions
        </a>
      </p>
      <GoToTop />
    </div>
  );
}
