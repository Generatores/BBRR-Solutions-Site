import { NextPage } from "next";

import TopicContainer from "../../components/TopicContainer";
import BILogo from "../../assets/images/brands used/BIIcon.png";
import MS365Logo from "../../assets/images/brands used/Office365.png";
import DelmiaLogo from "../../assets/images/brands used/DassaultLogo.png";
import SoftDevLogo from "../../assets/images/brands used/SoftwareDevelopmentLogo.png";

const Services: NextPage = () => {
  return (
    <div className="Body">
      <h2>Services</h2>
      <div className="PageContainer">
        <TopicContainer
          Title="DELMIAWorks/IQMS Consulting"
          ImageSrc={DelmiaLogo}
          ImageAlt="DAssault Systemes Logo"
          RenderButton={true}
          ButtonPath="/Services/DELMIAWorks-Consulting"
        />
        <TopicContainer
          Title="BI Consulting"
          ImageSrc={BILogo}
          ImageAlt="BI Development"
          RenderButton={true}
          ButtonPath="/Services/BI-Consulting"
        />
        <TopicContainer
          Title="Office 365 Management"
          ImageSrc={MS365Logo}
          ImageAlt="Office 365 Logo"
          RenderButton={true}
          ButtonPath="/Services/Office-365-Management"
        />
        <TopicContainer
          Title="Software Development"
          ImageSrc={SoftDevLogo}
          ImageAlt="Software Development Logo"
          RenderButton={true}
          ButtonPath="/Services/Software-Development"
        />
      </div>
    </div>
  );
};

export default Services;
