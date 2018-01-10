import React from "react"
import Navigation from "components/navigation.jsx"
import Routes from "routes.jsx"
import Helmet from "react-helmet";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <title>Portfolio Rémy Saddour</title>
        </Helmet>
        <Navigation/>
        <Routes/>
      </div>
    );
  }
}
module.exports = App;