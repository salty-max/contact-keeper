import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import ContactState from './context/contact/contact.state';
import AuthState from './context/auth/auth.state';

import Navbar from './components/layout/navbar/navbar.component';
import Register from './components/auth/register/register.component';
import Login from './components/auth/login/login.component';
import HomePage from './pages/home/home.component';
import AboutPage from './pages/about/about.component';

const App = () => (
  <AuthState>
    <ContactState>
      <Router>
        <Navbar />
        <main className="section">
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </main>
      </Router>
    </ContactState>
  </AuthState>
);

export default App;
