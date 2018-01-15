import React from "react"
import { Link } from 'react-router-dom'

const menuItems = [
  {path: '/', name: 'Cases studies'},
  {path: '/about', name: 'About me'},
];

export class Menu extends React.Component {
  
  render() {
    return (
      <div>
        <ul>
          {menuItems.map((menuItem, index) =>
            <li>
              <Link
                key={index}
                to={menuItem.path}
              > 
                { menuItem.name }
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
module.exports = Menu;