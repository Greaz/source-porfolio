import React from "react"
import { Link } from 'react-router-dom'
import Menu from "components/menu.jsx"
import Image from "components/image.jsx"

export class Navigation extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {class: 'navigation'};
    this.handleScroll = (e) => this.listenScroll(e);
  }
  
  listenScroll(e) {
    const scrollY = e.target.defaultView.scrollY
    if (scrollY > 0) {
      return this.setState({class: 'navigation fixed'});
    }
    else {
      return this.setState({class: 'navigation'});
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <nav className={this.state.class}>
        <div>
          <Link to='/'>
            <Image img={this.state.class === "navigation" ? 6 : 19} />
          </Link>
        </div>
        <Menu />
      </nav>
    );
  }
}
module.exports = Navigation;