import React from "react"
import { Switch, Route } from 'react-router-dom'

import Homepage from "homepage.jsx"
import About from "about.jsx"

import AuchanDirect from "auchandirect.jsx"
import Carrefour from "carrefour.jsx"
import Planetvo from "planetvo.jsx"
import Groupama from "groupama.jsx"

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route exact path='/about' component={ About } />
        <Route exact path="/auchandirect" component={ AuchanDirect } />
        <Route exact path="/carrefour" component={ Carrefour } />
        <Route exact path="/planetvo" component={ Planetvo } />
        <Route exact path="/groupama" component={ Groupama } />
      </Switch>
    );
  }
}
module.exports = Routes;