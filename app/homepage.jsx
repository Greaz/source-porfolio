import React from "react"
import Header from "components/header.jsx"

export class Homepage extends React.Component {
  render() {
    return (
      <div>
          <Header>
            <h1>
              Hello, i solve <span>design problems</span> by designing <span>suitable experiences</span> for <span>the web</span> and <span>the mobile</span>.
            </h1>
          </Header>
          <h2> zone de cases studies H2 </h2>
          <h3> zone réfs H3 </h3>
      </div>
    );
  }
}
module.exports = Homepage;