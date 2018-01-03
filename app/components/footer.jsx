import React from "react"
import logo from "../img/svg/logo.svg"

export class Footer extends React.Component {
  
  render() {
    const { children } = this.props;
    return (
      <div className="footer">
          <div>{ children }</div>
          <div>
            <img src={logo} alt="Remy Saddour" />
            <h3>Bisous</h3>
            <span>remy.saddour@gmail.com</span>
          </div>
      </div>
    );
  }
}
module.exports = Footer;