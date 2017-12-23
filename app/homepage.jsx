import React from "react"
import Header from "components/header.jsx"

export class Homepage extends React.Component {
  render() {
    return (
      <div>
          <Header 
            text="Hello, i solve design problems by designing suitable experiences for the web and the mobile."
          />
          <h2> zone de cases studies H2 </h2>
          <h3> zone réfs H3 </h3>
      </div>
    );
  }
}
module.exports = Homepage;