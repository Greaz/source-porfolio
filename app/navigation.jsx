import React from "react"
import { Link } from 'react-router-dom'

export class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Cases studies</Link></li>
          <li><Link to='/about'>About me</Link></li>
        </ul>
      </nav>
    );
  }
}
module.exports = Navigation;