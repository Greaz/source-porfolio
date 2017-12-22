import React from "react"
import { Switch, Route } from 'react-router-dom'

import Homepage from "components/homepage.jsx"
import About from "components/about.jsx"

export class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    );
  }
}
module.exports = Content;