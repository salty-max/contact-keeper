import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

import ContactState from './context/contact/contact.state'

import Navbar from './components/layout/navbar/navbar.component'
import HomePage from './pages/home/home.component'
import AboutPage from './pages/about/about.component'

const App = () => {
  return (
    <ContactState>
      <Router>
        <Navbar />
        <main className='section'>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
            </Switch>
          </div>
        </main>
      </Router>
    </ContactState>
  )
}

export default App
