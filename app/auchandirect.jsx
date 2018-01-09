import React from "react"
import Header from "components/header.jsx"
import Image from "components/image.jsx"

export class Auchandirect extends React.Component {
  render() {
    return (
        <div>
          <Header>
            <h1>
              <span>Stop Bullshit, start good shit.</span><br /> Allow users to do their food shopping of the month in less than 20 minutes.
            </h1>
          </Header>
          <section className="title-case">
            <h2>Auchan:Direct</h2>
            <div>
              <span className="job-title">May 2016 - Today</span>
              <span className="job-skills">UX, UI, PROTOTYPES, INTERACTIONS, MOTION DESIGN</span>
            </div>
          </section>
          <section className="problem">
            <div>  
              <Image img={9}/>
              <section className="card">
                <h3>The problem</h3>
                <p>
                  On average 100 people a day encounter a password reset error blocking access to their account
                </p>
                <div>=</div>
                <p>
                  « Users do not order anymore, loss of trust in the brand and possibly goes to competitors »
                </p>
              </section>
            </div>
          </section>
          <section className="situation">
            <div>
              <h3>Situation of a reset password usecase</h3>
              <Image img={10} />
            </div>
            </section>
        </div>
    );
  }
}
module.exports = Auchandirect;