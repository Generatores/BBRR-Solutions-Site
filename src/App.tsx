import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "styles/Body.css";

import Footer from "components/blocks/Footer";

import Home from "pages/Home";
import Privacypolicy from "pages/legal/PrivacyPolicy";
import Termsofuse from "pages/legal/TermsOfUse";
import Error404 from "pages/404";
import Header from "components/blocks/Header";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Services from "pages/Services";
import DelmiaWorksConsulting from "pages/services/DelmiaWorksConsulting";
import BIConsulting from "pages/services/BIConsulting";
import SoftwareDevelopment from "pages/services/SoftwareDevelopment";
import Office365Management from "pages/services/Office365Management";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={"/Contact-us"} exact component={ContactUs} />
          <Route
            path={"/Services/Office-365-Management"}
            exact
            component={Office365Management}
          />
          <Route
            path={"/Services/Software-Development"}
            exact
            component={SoftwareDevelopment}
          />
          <Route
            path={"/Services/BI-Consulting"}
            exact
            component={BIConsulting}
          />
          <Route
            path={"/Services/DELMIAWorks-Consulting"}
            exact
            component={DelmiaWorksConsulting}
          />
          <Route path={"/Services"} exact component={Services} />
          <Route path={"/About-us"} exact component={AboutUs} />
          <Route
            path={"/Legal/Privacy-Policy"}
            exact
            component={Privacypolicy}
          />
          <Route path={"/Legal/Terms-of-Use"} exact component={Termsofuse} />
          <Route path={"/"} exact component={Home} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
