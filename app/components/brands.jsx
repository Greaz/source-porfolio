import React from "react"

export class Brands extends React.Component {
  
  render() {
    const { 
      titre,
      jobTitle,
      jobSkills,
    } = this.props;
    return (
      <section className="brand">
          <h3>{ titre }</h3>
          <span>{ jobTitle }</span>
          <span>{ jobSkills }</span>
      </section>
    );
  }
}
module.exports = Brands;