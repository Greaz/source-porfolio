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
              <span>Guess, try, check, learn, repeat again until it works.</span>I don’t know everything but I won’t make the same mistake twice.
            </h1>
          </Header>
          <div className="body">
            <section>
              <h2>Rémy Saddour</h2>
              <span className="job-title">27 ans, CREATIVE TECHNOLOGIST somethings like that…</span>
              <span className="job-skills">UX, UI, PROTOTYPES, INTERACTIONS, MOTION DESIGN</span>
              <h3>What is my job ?</h3>
              <p>
                In my opinion, the mission of Design is to offer fact-based, pragmatic solutions that save time and resources. In order to do that, I use the LEAN approach : when working on a project I create a design system to give uniformity to my interface and then I iterate piece by piece to improve this base of reference. The PDCA “Plan Do Check Act” methodology helps me identify and plan my action and analyze their impact.
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
                  <span>July 2012 - September 2012</span>
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
              </ul>
            </section>
          </div>
          <Footer/>
      </div>
    );
  }
}
module.exports = About;