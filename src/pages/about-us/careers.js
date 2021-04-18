import "../body.css";
import "./careers.css";

import Benefit1 from "../../assets/JSON/careers/benefits/remote.json";
import Benefit2 from "../../assets/JSON/careers/benefits/for-all.json";
import Benefit3 from "../../assets/JSON/careers/benefits/equipment.json";
import Benefit4 from "../../assets/JSON/careers/benefits/travel.json";
import Benefit5 from "../../assets/JSON/careers/benefits/learning.json";
import Benefit6 from "../../assets/JSON/careers/benefits/students.json";
import Position1 from "../../assets/JSON/careers/positions/infraestructure-engineer.json";

import Homeisland from "../../components/home-island.js";
import Stdbtn from "../../components/std-button.js";

import GoToTop from "../../assets/scripts/go-to-top";

export default function Careers() {
  return (
    <div className='body'>
      <h2>Work at BBRR Solutions</h2>
      <div>
        <p>
          Join the ranks of <b>BBRR Solutions</b> and work at a company focused
          on the values of <i>Integrity</i> and <i>Innovation</i>.
        </p>
        <br />
        <p>See some of our company benefits:</p>
      </div>
      <div className='company_benefits'>
        <Homeisland title={Benefit1.title} text={Benefit1.text} />
        <Homeisland title={Benefit2.title} text={Benefit2.text} />
        <Homeisland title={Benefit3.title} text={Benefit3.text} />
        <Homeisland title={Benefit4.title} text={Benefit4.text} />
        <Homeisland title={Benefit5.title} text={Benefit5.text} />
        <Homeisland title={Benefit6.title} text={Benefit6.text} />
      </div>
      <br />
      <div className='open_positions'>
        <h3>Open Positions</h3>
        <p>
          For see our current open positions please contact us at{" "}
          <a href='mailto:information@bbrr.solutions?subject=See open positions'>
            information@bbrr.solutions
          </a>
          .
        </p>
      </div>
      <GoToTop />
    </div>
  );
}
