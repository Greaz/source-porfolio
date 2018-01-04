import React from "react"
import { Link } from 'react-router-dom'
import Image from "components/image.jsx"

export class Navigation extends React.Component {

  render() {
    return (
      <nav className="navigation">
        <div>
          <Link to='/portfolio/'>
            <Image img={6} />
          </Link>
        </div>
        <div>
          <ul>
            <li><Link className="menu__link" to='/portfolio/'>Cases studies</Link></li>
            <li><Link className="menu__link" to='/portfolio/about'>About me</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
module.exports = Navigation;