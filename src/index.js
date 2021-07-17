import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// styles for this kit
import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.5.0';
import 'assets/demo/demo.css?v=1.5.0';
import 'assets/demo/nucleo-icons-page-styles.css?v=1.5.0';
// pages for this kit
import Index from 'views/Index';
// import NucleoIcons from 'views/examples/NucleoIcons';
// import LoginPage from 'views/examples/LoginPage';
// import LandingPage from 'views/examples/LandingPage';
// import ProfilePage from 'views/examples/ProfilePage';
// import HomePage from 'views/examples/HomePage';
import AboutPage from 'views/pages/AboutPage';
import ContactPage from 'views/pages/ContactPage';
import FAQPage from 'views/pages/FAQPage';
import TermsPage from 'views/pages/TermsPage';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route path="/about" render={(props) => <AboutPage {...props} />} />
        <Route path="/contact" render={(props) => <ContactPage {...props} />} />
        <Route path="/faq" render={(props) => <FAQPage {...props} />} />
        <Route
          path="/terms-and-conditions"
          render={(props) => <TermsPage {...props} />}
        />
        {/* <Route path="/nucleo-icons" render={(props) => <NucleoIcons {...props} />} /> */}
        {/* <Route path="/landing-page" render={(props) => <LandingPage {...props} />} /> */}
        {/* <Route path="/profile-page" render={(props) => <ProfilePage {...props} />} /> */}
        {/* <Route path="/login-page" render={(props) => <LoginPage {...props} />} /> */}
        {/* <Route path="/home" render={(props) => <HomePage {...props} />} /> */}
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
