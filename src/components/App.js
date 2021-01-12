import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import GoogleFontLoader from "react-google-font-loader"

import Head from "./Head"
import Header from "./Header"
import Index from "./Index"
import NotFound from "./NotFound"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Head />
      {/* Google Fonts */}
      <GoogleFontLoader
        fonts={[
          {
            font: "Poppins",
            weights: [400, 700, 900, "400i"],
          },
        ]}
      />
      <Router>
        <Header />
        <main className="text-black bg-white">
          <div className="container py-32">
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
