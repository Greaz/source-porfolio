import React from "react"
import Header from "components/header.jsx"
import PreviewCase from "components/previewcase.jsx"
import Footer from "components/footer.jsx"
import Image from "components/image.jsx"
import { Link } from 'react-router-dom'

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
            <PreviewCase 
              titre= "Auchan:Direct"
              titreJob= "creative technologist"
              sousTitre= "UX, UI, PROTOTYPES, INTERACTIONS, MOTION DESIGN"
              img= { 1 }
            />
            <PreviewCase 
              titre= "Carrefour Drive"
              titreJob= "UI/UX DESIGNER"
              sousTitre= "UX, UI, MICRO ANIMATIONS"
              img= { 2 }
            />
            <PreviewCase 
              titre= "Planet VO2"
              titreJob= "INTERACTION DESIGNER"
              sousTitre= "INTERACTIONS, PROTOTYPES, MOTION DESIGN"
              img= { 3 }
            />
            <PreviewCase 
              titre= "Groupama (studiant quotes)"
              titreJob= "PROTOTYPER"
              sousTitre= "UI, INTERACTIONS, PROTOTYPES"
              img= { 4 }
            />
          </div>
          <Footer/>
      </div>
    );
  }
}
module.exports = Homepage;