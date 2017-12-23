import React from "react"
import Header from "components/header.jsx"

export class About extends React.Component {
  render() {
    return (
      <div>
          <Header 
            text="Guess, try, check, learn, retry… I do not have the infused science, I am just trying not to make the same mistake twice" 
          />
          <h2> zone "rémy saddour" H2 </h2>
          <h3> zone How do i work ? H3 </h3>
      </div>
    );
  }
}
module.exports = About;