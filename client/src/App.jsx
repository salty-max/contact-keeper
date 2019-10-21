import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import ContactState from './context/contact/contact.state';
import AuthState from './context/auth/auth.state';
import AlertState from './context/alert/alert.state';

import Navbar from './components/layout/navbar/navbar.component';
import Register from './components/auth/register/register.component';
import Login from './components/auth/login/login.component';
import HomePage from './pages/home/home.component';
import AboutPage from './pages/about/about.component';
import Alerts from './components/layout/alerts/alerts.component';

const App = () => (
  <AuthState>
    <ContactState>
      <AlertState>
        <Router>
          <Navbar />
          <main className="section">
            <div className="container">
              <Alerts />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </main>
        </Router>
      </AlertState>
    </ContactState>
  </AuthState>
);

export default App;
