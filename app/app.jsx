import React from "react"
import Navigation from "components/navigation.jsx"
import Routes from "routes.jsx"
import Helmet from "react-helmet";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Portfolio Rémy Saddour</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700" rel="stylesheet" />
        </Helmet>
        <Navigation/>
        <Routes/>
      </div>
    );
  }
}
module.exports = App;