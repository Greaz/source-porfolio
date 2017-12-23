import React from "react"
import Header from "components/header.jsx"

export class About extends React.Component {
  render() {
    return (
      <div>
          <Header>
            <h1>
              <span>Guess, try, check, learn, retry…</span><br/>I do not have the infused science, I am just trying <span>not</span> to <span>make</span> the <span>same mistake</span> twice.
            </h1>
          </Header>
          <h2> zone "rémy saddour" H2 </h2>
          <h3> zone How do i work ? H3 </h3>
      </div>
    );
  }
}
module.exports = About;