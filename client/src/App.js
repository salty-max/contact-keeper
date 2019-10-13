import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

import Navbar from './components/layout/navbar/navbar.component'
import HomePage from './components/pages/home/home.component'
import AboutPage from './components/pages/about/about.component'

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <main className='section'>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
            </Switch>
          </div>
        </main>
      </>
    </Router>
  )
}

export default App
