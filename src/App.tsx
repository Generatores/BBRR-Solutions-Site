import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "styles/Body.css";

import Footer from "components/blocks/Footer";

import Home from "pages/Home";
import Privacypolicy from "pages/legal/PrivacyPolicy";
import Termsofuse from "pages/legal/TermsOfUse";
import Error404 from "pages/404";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
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
