import React from "react"
import { Switch, Route } from 'react-router-dom'
import { hashHistory } from 'react-router';

import Homepage from "homepage.jsx"
import About from "about.jsx"

import AuchanDirect from "cases/auchandirect.jsx"
import Carrefour from "cases/carrefour.jsx"
import Planetvo from "cases/planetvo.jsx"
import Groupama from "cases/groupama.jsx"

export class Content extends React.Component {
  render() {
    return (
      <Switch history={ hashHistory }>
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