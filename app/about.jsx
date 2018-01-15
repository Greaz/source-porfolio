import React from "react"
import Header from "components/header.jsx"
import Footer from "components/footer.jsx"
import Image from "components/image.jsx"

const expItems = [
  { 
    post: 'Creative technologist •', 
    compagny: ' Auchan:Direct', 
    city: 'Paris - FR', 
    date: 'May 2016 - Today'
  },
  { 
    post: 'Prototyper & Interaction designer •',
    compagny: ' Nealite',
    city: 'Paris - FR',
    date:'October 2014 - May 2016'
  },
  {
    post: 'UI designer •',
    compagny: ' Nealite',
    city: 'Paris - FR',
    date: 'October 2013 - October 2014'
  },
  {
    post: 'UI designer & Motion designer •',
    compagny: ' SF Factor',
    city: 'Paris - FR',
    date: 'June 2013 - September 2013'
  },
  {
    post: 'Webdesigner •',
    compagny: ' Pixel Cookers',
    city: 'Neuville sur oise - FR',
    date: 'July 2012 - September 2012'
  },
];

export class About extends React.Component {
  render() {
    return (
      <div>
          <Header>
            <h1>
              <span>Guess, try, check, learn, repeat again until it works. </span>I don’t know everything but I won’t make the same mistake twice.
            </h1>
          </Header>
          <div className="body">
            <section>
              <h2>Rémy Saddour</h2>
              <span className="job-title">27 ans, UX and UI designer</span>
              <span className="job-skills">UX, UI, PROTOTYPES, INTERACTIONS, MOTION DESIGN</span>
              <h3>What is my job ?</h3>
              <p>
                In my opinion, the mission of Design is to offer fact-based, pragmatic solutions that save time and resources. In order to do that, I use the LEAN approach : when working on a project I create a design system to give uniformity to my interface and then I iterate piece by piece to improve this base of reference. The PDCA “Plan Do Check Act” methodology helps me identify and plan my action and analyze their impact.
              </p>
              <Image img={7} />
              <h3>Expériences</h3>
              <ul>
                {
                  expItems.map((expItem, index) =>
                    <li key={ index }>
                      <span><b>{ expItem.post }</b>{ expItem.compagny }<br />{ expItem.city }</span>
                      <span>{ expItem.date }</span>
                    </li>
                  )
                }
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