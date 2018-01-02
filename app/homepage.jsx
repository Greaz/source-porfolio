import React from "react"
import Header from "components/header.jsx"
import PreviewCase from "components/previewcase.jsx"

export class Homepage extends React.Component {
  render() {
    return (
      <div>
          <Header>
            <h1>
              Hello, i solve <span>design problems</span> by designing <span>suitable experiences</span> for <span>the web</span> and <span>the mobile</span>.
            </h1>
          </Header>
          <PreviewCase 
            titre= "Auchan:Direct"
            titreJob= "« CREATIVE TECHNOLOGIST »"
            sousTitre= "UX, UI, PROTOTYPES, INTERACTIONS, MOTION DESIGN"
            img= { 1 }
          />
          <PreviewCase 
            titre= "Carrfour Drive"
            titreJob= "« UI/UX DESIGNER »"
            sousTitre= "UX, UI, MICRO ANIMATIONS"
            img= { 2 }
          />
          <PreviewCase 
            titre= "Planet VO2"
            titreJob= "« INTERACTION DESIGNER »"
            sousTitre= "INTERACTIONS, PROTOTYPES, MOTION DESIGN"
            img= { 3 }
          />
          <PreviewCase 
            titre= "Groupama (studiant quotes)"
            titreJob= "« PROTOTYPER »"
            sousTitre= "UI, INTERACTIONS, PROTOTYPES"
            img= { 4 }
          />
      </div>
    );
  }
}
module.exports = Homepage;