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
              <h3>Expériences</h3>
              <ul>
                <li>
                  <span><b>Creative technologist •</b> Auchan:Direct<br />Paris - FR</span>
                  <span>May 2016 - Today</span>
                </li>
                <li>
                  <span><b>Prototyper & Interaction designer •</b> Nealite<br />Paris - FR</span>
                  <span>October 2014 - May 2016</span>
                </li>
                <li>
                  <span><b>UI designer •</b> Nealite<br />Paris - FR</span>
                  <span>October 2013 - October 2014</span>
                </li>
                <li>
                  <span><b>UI designer & Motion designer •</b> SF Factory<br />Paris - FR</span>
                  <span>June 2013 - September 2013</span>
                </li>
                <li>
                  <span><b>Webdesigner •</b> Pixel Cookers<br />Neuville sur oise - FR</span>
                  <span>Juillet 2012 - September 2012</span>
                </li>
              </ul>
              <h3>Education</h3>
              <ul>
                <li>
                  <span><b>HETIC •</b> Paris - FR<br />Expert en Ingénierie et Management de la Communication Numérique</span>
                  <span>2011 - 2014</span>
                </li>
                <li>
                  <span><b>Université Paris XIII •</b> Paris - FR<br />DUT Service et Réseaux de Communication</span>
                  <span>2009 - 2011</span>
                </li>
                <li>
                  <span>And other graduates from kids schools...</span>
                  <span>2011 - day of birth</span>
                </li>
              </ul>
            </section>
          </div>
          <Footer/>
      </div>
    );
  }
}
module.exports = About;