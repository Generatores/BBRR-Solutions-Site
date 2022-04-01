import type { NextPage } from "next";

import TopicContainer from "../components/TopicContainer";
import BILogo from "../assets/images/brands used/BIIcon.png";
import BIText from "../assets/JSON/services/BI.json";
import MS365Logo from "../assets/images/brands used/Office365.png";
import MS365Text from "../assets/JSON/services/Office365.json";
import DelmiaLogo from "../assets/images/brands used/DassaultLogo.png";
import DelmiaText from "../assets/JSON/services/DELMIAWorks.json";
import SoftDevLogo from "../assets/images/brands used/SoftwareDevelopmentLogo.png";
import SoftDevText from "../assets/JSON/services/SoftDev.json";

const Home: NextPage = () => {
  return (
    <div className="Body">
      <div className="PageContainer">
        <h2>Pull Request test</h2>
        <p>
          <b>BBRR Solutions</b> it&apos;s a company focused on the solutions of
          business/management problems, manufacturing or operational
          deficiencies and business intelligence analysis. Having deep knowledge
          on the financial, operational, logistical and executive areas of the
          business <b>BBRR Solutions</b> is capable of:
          <ul>
            <li>Identify the business problems.</li>
            <li>Analyce the data sources of your business.</li>
            <li>
              Propose action plans and monitor the KPI&apos;s to ensure a
              success.
            </li>
          </ul>
        </p>
      </div>
      <div className="PageContainer">
        <h2>What we do?</h2>
        <TopicContainer
          Title={DelmiaText["Title"]}
          Body={DelmiaText["Text"]}
          ImageSrc={DelmiaLogo}
          ImageAlt="DAssault Systemes Logo"
        />
        <TopicContainer
          Title={BIText["Title"]}
          Body={BIText["Text"]}
          ImageSrc={BILogo}
          ImageAlt="BI Development"
        />
        <TopicContainer
          Title={MS365Text["Title"]}
          Body={MS365Text["Text"]}
          ImageSrc={MS365Logo}
          ImageAlt="Office 365 Logo"
        />
        <TopicContainer
          Title={SoftDevText["Title"]}
          Body={SoftDevText["Text"]}
          ImageSrc={SoftDevLogo}
          ImageAlt="Software Development Logo"
        />
      </div>
    </div>
  );
};

export default Home;
