import "../body.css";
import "./it-support.css";

import GoToTop from "../../assets/scripts/go-to-top";

export default function Itsupport() {
  return (
    <div className='body'>
      <h2>IT Support Service</h2>
      <p>
        <b>BBRR Solutions</b> offers the support on the{" "}
        <i>Information and Technologies</i> of your business. Working with the
        newest technologies on the market and learning newer technologies every
        day, <b>BBRR Solutions</b> can offer to your business the following{" "}
        <i>IT Support</i> activities.
      </p>
      <br />
      <div className='it_activity'>
        <h3>Asset Management</h3>
        <p>
          <b>BBRR Solutions</b> can setup, configure and manage the assets at
          your business, working with the best brands at the market
        </p>
        <p>
          <b>BBRR Solutions</b> can provide for your business:
          <ul>
            <li>Computer/Notebook setup according your business needs.</li>
            <li>Equipment quoting and purchasing as needed.</li>
            <li>Periodic equipment back-ups.</li>
          </ul>
        </p>
      </div>
      <div className='it_activity'>
        <h3>Infraestructure Support</h3>
        <p>
          <b>BBRR Solutions</b> can provide and coordinate the implementation of
          the infraestructure that your business needs.
        </p>
        <p>
          Counting with the best technicians and engineers at our ranks{" "}
          <b>BBRR Solutions</b> can provide to your business:
          <ul>
            <li>Ethernet infraestructure.</li>
            <li>Survilleance and Access systems.</li>
            <li>Cloud-Computing.</li>
          </ul>
        </p>
      </div>
      <GoToTop />
    </div>
  );
}
