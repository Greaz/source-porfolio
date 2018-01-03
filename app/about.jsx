import React from "react"
import Header from "components/header.jsx"
import Footer from "components/footer.jsx"
import Image from "components/image.jsx"

export class About extends React.Component {
  render() {
    return (
      <div>
          <Header>
            <h1>
              <span>Guess, try, check, learn, retry…</span><br/>I do not have the infused science, I am just trying <span>not</span> to <span>make</span> the <span>same mistake</span> twice.
            </h1>
          </Header>
          <div className="body">
            <section>
              <h2>Rémy Saddour</h2>
              <span className="job-title">27 ans, CREATIVE TECHNOLOGIST somethings like that…</span>
              <span className="job-skills">UX, UI, PROTOTYPES, INTERACTIONS, MOTION DESIGN</span>
              <h3>How do i work ?</h3>
              <p>
                I have 2 principles, I'm trying to learn from my mistakes by applying the lean methodology (PDCA) "Plan Do Check Act" and i do not concider myself as an artist.
                I always try to be pragmatic by making fact-based choices.
                <br/><br/>
                During my projects, I always try to establish a standard base through design systems to create consistency / uniformity within the interface before iterating piece by piece on disruptive / innovative elements. It may seem « overkill » but it is in my opinion the best way to understand the impact of each action
              </p>
              <Image img={7} />
            </section>
          </div>
          <Footer/>
      </div>
    );
  }
}
module.exports = About;