import React from "react"

export class Header extends React.Component {
  
  render() {
    const { text } = this.props;
    return (
      <div>
          <h1> {text} </h1>
      </div>
    );
  }
}
module.exports = Header;