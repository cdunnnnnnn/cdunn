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
      <Router>
        <Header />
        <main className="bg-white text-black">
          <div className="container--wider py-32">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
