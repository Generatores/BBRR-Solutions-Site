import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./stylesheet.css";

import Header from "./blocks/header.js";
import Footer from "./blocks/footer.js";

import Home from "./pages/home.js";
import Privacypolicy from "./pages/privacy-policy.js";
import Termsofuse from "./pages/terms-of-use.js";
import Newsandevents from "./pages/news-and-events";
import Devops from "./pages/devops";
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
          <Route path={"/Our-Services/Devops"} component={Devops} />
          <Route path={"/About-us/News-and-Events"} component={Newsandevents} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
