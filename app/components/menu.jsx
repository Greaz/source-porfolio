import React from "react"
import { Link } from 'react-router-dom'
import { matchPath } from 'react-router'

const menuItems = [
  {path: '/', name: 'Cases studies'},
  {path: '/about', name: 'About me'},
];

const cleanURL = new RegExp('(?<=#).*$');


export class Menu extends React.Component {

  menuRender(menuItems){
    return (
      menuItems.map((menuItem, index) =>
        <li key={index}>
          <Link
            className={this.isActive(menuItem.path)}
            to={menuItem.path}
          > 
            { menuItem.name }
          </Link>
        </li>
      )
    );
  }

  isActive(path){
    const url = cleanURL.exec(window.location.href);
    const urlPath = url[0];
    const match = matchPath(urlPath, { path, exact: true });
    return match ? "menu__link2" : "menu__link";
    
  }

  render() {
    return (
      <div>
        <ul>
          {this.menuRender(menuItems)}
        </ul>
      </div>
    );
  }
}
module.exports = Menu;