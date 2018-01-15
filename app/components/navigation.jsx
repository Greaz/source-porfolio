import React from "react"
import { Link } from 'react-router-dom'
import Menu from "components/menu.jsx"
import Image from "components/image.jsx"

export class Navigation extends React.Component {

  render() {
    return (
      <nav className="navigation">
        <div>
          <Link to='/'>
            <Image img={6} />
          </Link>
        </div>
        <Menu />
      </nav>
    );
  }
}
module.exports = Navigation;