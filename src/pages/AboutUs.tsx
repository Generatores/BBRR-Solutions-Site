import React, { FC } from "react";

import Equipment from "assets/JSON/benefits/Equipment.json";
import ForAll from "assets/JSON/benefits/ForAll.json";
import Learning from "assets/JSON/benefits/Learning.json";
import Remote from "assets/JSON/benefits/Remote.json";
import Students from "assets/JSON/benefits/Students.json";
import Travel from "assets/JSON/benefits/Travel.json";
import PageIsland from "components/PageIsland";

const AboutUs: FC = () => {
  return (
    <div className="Body">
      <div className="PageContainer">
        <h2>Who we are?</h2>
        <p>
          <b>BBRR Solutions</b> it's a company focused on the solution of all
          type of business/management problems that any business may face.
          Always working with the latest technologies and work metholodogies{" "}
          <b>BBRR Solutions</b> is capable to see the problems you may face from
          multiple sides, scopes and approaches.
        </p>
      </div>

      <div className="PageContainer">
        <h2>Our Core Values</h2>
      </div>
      <div className="PageContainer">
        <h2>What we do?</h2>
      </div>
      <div className="PageContainer">
        <h2>Work with us</h2>
        <p>
          Apply to work at <b>BBRR Solutions</b> and join the team of business
          experts, analysts and consultors.
        </p>
        <div className="GridContainer">
          <PageIsland Title={Equipment["Title"]} Body={Equipment["Text"]} />
          <PageIsland Title={ForAll["Title"]} Body={ForAll["Text"]} />
          <PageIsland Title={Learning["Title"]} Body={Learning["Text"]} />
          <PageIsland Title={Remote["Title"]} Body={Remote["Text"]} />
          <PageIsland Title={Students["Title"]} Body={Students["Text"]} />
          <PageIsland Title={Travel["Title"]} Body={Travel["Text"]} />
        </div>
        <p>
          Apply by sending your resume at{" "}
          <a href="mailto:information@bbrr.solutions">
            Information@bbrr.solutions
          </a>{" "}
          and our Recruiting team will be in touch soon.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
