import React from "react"
import Image from "components/image.jsx"

export class Header extends React.Component {
  
  render() {
    const { children } = this.props;
    return (
      <div className="header">
          <div>{ children }</div>
          <Image img={5} />
      </div>
    );
  }
}
module.exports = Header;