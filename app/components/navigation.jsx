import React from "react"
import { Link } from 'react-router-dom'

import logo from "../img/svg/logo.svg"

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <div>
          <img src={logo} alt="logotype" />
        </div>
        <div>
          <ul>
            <li><Link to='/'>Cases studies</Link></li>
            <li><Link to='/about'>About me</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
module.exports = Navigation;