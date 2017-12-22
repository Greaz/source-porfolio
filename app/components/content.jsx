import React from "react"
import { Switch, Route } from 'react-router-dom'

import Homepage from "components/homepage.jsx"
import About from "components/about.jsx"

import AuchanDirect from "components/cases/auchandirect.jsx"
import Carrefour from "components/cases/carrefour.jsx"
import Planetvo from "components/cases/planetvo.jsx"
import Groupama from "components/cases/groupama.jsx"

export class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route exact path='/about' component={ About } />
        <Route exact path="/cases/auchandirect" component={ AuchanDirect } />
        <Route exact path="/cases/carrefour" component={ Carrefour } />
        <Route exact path="/cases/planetvo" component={ Planetvo } />
        <Route exact path="/cases/groupama" component={ Groupama } />
      </Switch>
    );
  }
}
module.exports = Content;