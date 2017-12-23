import React from "react"
import Navigation from "navigation.jsx"
import Content from "content.jsx"

export class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Content/>
      </div>
    );
  }
}
module.exports = App;