import React from "react"
import Navigation from "components/navigation.jsx"
import Routes from "routes.jsx"

export class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Routes/>
      </div>
    );
  }
}
module.exports = App;