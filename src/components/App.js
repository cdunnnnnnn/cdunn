import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Header from './Header'
import Index from './Index'
import NotFound from './NotFound'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App
