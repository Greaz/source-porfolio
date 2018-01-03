import React from "react"
import Header from "components/header.jsx"
import PreviewCase from "components/previewcase.jsx"
import Brands from "components/brands.jsx"
import Footer from "components/footer.jsx"

export class Homepage extends React.Component {
  render() {
    return (
      <div>
          <Header>
            <h1>
              Hello, i solve <span>design problems</span> by designing <span>suitable experiences</span> for <span>the web</span> and <span>the mobile</span>.
            </h1>
          </Header>
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
          <Footer>
            <Brands titre="Malakoff Médéric" jobTitle="UI designer" jobSkills="DA WEB, UI, PROTOTYPES"/>
            <Brands titre="Macsf" jobTitle="MOTION DESIGNER" jobSkills="PROTOTYPES, MICRO ANIMATIONS"/>
            <Brands titre="Gares et connexions" jobTitle="UI DESIGNER" jobSkills="DA WEB, UI RESPONSIVE"/>
            <Brands titre="Qinergy" jobTitle="MOTION DESIGNER" jobSkills="UI, MOTION DESIGN"/>
            <Brands titre="EY France" jobTitle="UX / UI DESIGNER" jobSkills="UX RESPONSIVE, UI RESPONSIVE"/>
            <Brands titre="Kering" jobTitle="MOTION DESIGNER" jobSkills="Show reel"/>
            <Brands titre="Orange" jobTitle="DIRECTEUR ARTISTIQUE" jobSkills="UX, DA WEB, UI"/>
            <Brands titre="SFR" jobTitle="DIRECTEUR ARTISTIQUE" jobSkills="UX RESPONSIVE, UI RESPONSIVE"/>
            <Brands titre="GROSBILL" jobTitle="UI / FRONT DEV" jobSkills="UX, UI RESPONSIVE, FRONT"/>
            <Brands titre="ERDF" jobTitle="UX / UI DESIGNER" jobSkills="UX, UI on app"/>
            <Brands titre="RDBIRD" jobTitle="SIDE PROJECT" jobSkills="Logotype"/>
            <Brands titre="TOM KYNS" jobTitle="FREELANCE" jobSkills="LOGOTYPE, WORDPRESS THEME"/>
          </Footer>
      </div>
    );
  }
}
module.exports = Homepage;