import "index.scss"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from 'react-router-dom'

import App from "components/app.jsx"

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={ App }>
    </Route>
  </BrowserRouter>,
    document.body
  );