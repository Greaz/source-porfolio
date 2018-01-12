import React from "react"
import Image from "components/image.jsx"

export class Work extends React.Component {
  render() {
    const { 
      titre,
      num,
      img,
     } = this.props;
    return (
      <section className="adi-work">
        <section>
          <span>{ num }</span>
          <span>{ titre }</span>
        </section>
        <Image img={ img }/>
      </section>
    );
  }
}
module.exports = Work;