import React from "react"
import Header from "components/header.jsx"
import PreviewCase from "components/previewcase.jsx"
import Footer from "components/footer.jsx"
import Image from "components/image.jsx"
import { Link } from 'react-router-dom'


const caseItems = [
  {name: 'Auchan:Direct', job: 'creative technologist', skills: 'UX, UI, PROTOTYPES, INTERACTIONS, MOTION DESIGN', baseline: 'Allow users to do their food shopping in less than 20 minutes.', img: 1},
  {name: 'Carrefour Drive', job: 'UI/UX DESIGNER', skills: 'UX, UI, MICRO ANIMATIONS', baseline: 'Work in progress...', img: 2},
  {name: 'Planet VO2', job: 'INTERACTION DESIGNER', skills: 'INTERACTIONS, PROTOTYPES, MOTION DESIGN', baseline: 'Coming soon...', img: 3},
  {name: 'Groupama (studiant quotes)', job: 'Prototyper', skills: 'UI, INTERACTIONS, PROTOTYPES', baseline: 'Coming soon...', img: 4},
];

export class Homepage extends React.Component {
  render() {
    return (
      <div>
          <Header>
            <h1>
              Hello, I solve <span>problems</span> by designing <span>suitable experiences</span> for <span>the web</span> and <span>the mobile</span>.
            </h1>
          </Header>
          <div className="dribbble">
            <a href="https://dribbble.com/Greaz">
              <section>
                <Image img={8} />
                <span>
                  My study cases are coming soon, meanwhile I invite you to look at my dribbble profile!
                </span>
              </section>
            </a>
          </div>
          <div className="grillCase">
            {
              caseItems.map((caseItem, index) =>
                <PreviewCase
                  key= { index } 
                  titre= { caseItem.name }
                  titreJob= { caseItem.job }
                  sousTitre= { caseItem.skills }
                  baseline= { caseItem.baseline }
                  img= { caseItem.img }
                />
              )
            }
          </div>
          <Footer/>
      </div>
    );
  }
}
module.exports = Homepage;