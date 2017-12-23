import React from "react"
import illu from "../img/svg/illu-header.svg"

export class Header extends React.Component {
  
  render() {
    const { children } = this.props;
    return (
      <div className="header">
          <div>{ children }</div>
          <img src={illu} alt="background values" />
      </div>
    );
  }
}
module.exports = Header;