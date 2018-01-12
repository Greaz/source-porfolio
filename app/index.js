import "index.scss"
import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import ScrollToTop from "components/scrolltotop.jsx"

import App from "app.jsx"

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <App/>
    </ScrollToTop>
  </HashRouter>,
    document.body
);