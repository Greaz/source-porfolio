import React from "react"

import Navigation from "components/navigation.jsx"
import Homepage from "components/homepage.jsx"

export class App extends React.Component {
  render() {
    return (
      <div>
          <Navigation/>
          <Homepage/>
      </div>
    );
  }
}
module.exports = App;