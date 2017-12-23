import React from "react"
import illu from "../img/svg/illu-header.svg"

export class Header extends React.Component {
  
  render() {
    const { text } = this.props;
    return (
      <div className="header">
          <h1>{ text }</h1>
          <img src={ illu } alt="values" />
      </div>
    );
  }
}
module.exports = Header;