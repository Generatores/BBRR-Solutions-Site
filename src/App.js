import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./stylesheet.css";

import Header from "./blocks/header.js";
import Footer from "./blocks/footer.js";

import Home from "./pages/home.js";
import Privacypolicy from "./pages/privacy-policy.js";
import Termsofuse from "./pages/terms-of-use.js";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/Legal/Privacy-Policy"} component={Privacypolicy} />
          <Route path={"/Legal/Terms-of-Use"} component={Termsofuse} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
