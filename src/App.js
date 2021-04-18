import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./stylesheet.css";

import Header from "./blocks/header.js";
import Footer from "./blocks/footer.js";

import Home from "./pages/home.js";
import Privacypolicy from "./pages/legal/privacy-policy.js";
import Termsofuse from "./pages/legal/terms-of-use.js";
import Ourservices from "./pages/our-services";
import Itsupport from "./pages/our-services/it-support";
import Consulting from "./pages/our-services/consulting";
import Devops from "./pages/our-services/devops";
import Aboutus from "./pages/about-us";
import History from "./pages/about-us/history";
import Newsandevents from "./pages/about-us/news-and-events";
import Careers from "./pages/about-us/careers";
import Error404 from "./pages/404";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/Legal/Privacy-Policy"} component={Privacypolicy} />
          <Route path={"/Legal/Terms-of-Use"} component={Termsofuse} />
          <Route path={"/Our-Services"} exact component={Ourservices} />
          <Route path={"/Our-Services/IT-Support"} component={Itsupport} />
          <Route path={"/Our-Services/Consulting"} component={Consulting} />
          <Route path={"/Our-Services/Devops"} component={Devops} />
          <Route path={"/About-us"} exact component={Aboutus} />
          <Route path={"/About-us/History"} component={History} />
          <Route path={"/About-us/News-and-Events"} component={Newsandevents} />
          <Route path={"/About-us/Careers"} component={Careers} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
