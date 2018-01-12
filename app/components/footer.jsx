import React from "react"
import Brands from "components/brands.jsx"
import Image from "components/image.jsx"
import { Link } from 'react-router-dom'

export class Footer extends React.Component {
  
  render() {
    const { children } = this.props;
    return (
      <div className="footer">
          <div>
            <Brands titre="Malakoff Médéric" jobTitle="UI designer" jobSkills="DA WEB, UI, PROTOTYPES"/>
            <Brands titre="Macsf" jobTitle="MOTION DESIGNER" jobSkills="PROTOTYPES, MICRO ANIMATIONS"/>
            <Brands titre="Gares et connexions" jobTitle="UI DESIGNER" jobSkills="DA WEB, esponsive website"/>
            <Brands titre="Qinergy" jobTitle="MOTION DESIGNER" jobSkills="UI and MOTION DESIGN"/>
            <Brands titre="EY France" jobTitle="UX / UI DESIGNER" jobSkills="responsive website"/>
            <Brands titre="Kering" jobTitle="MOTION DESIGNER" jobSkills="Showreel"/>
            <Brands titre="Orange" jobTitle="DIRECTEUR ARTISTIQUE" jobSkills="esponsive website"/>
            <Brands titre="Sfr" jobTitle="DIRECTEUR ARTISTIQUE" jobSkills="mobile app"/>
            <Brands titre="Grosbill" jobTitle="UI / FRONT DEV" jobSkills="mobile site"/>
            <Brands titre="Erdf" jobTitle="UX / UI DESIGNER" jobSkills="mobile and tablet app"/>
            <Brands titre="Rdbird" jobTitle="SIDE PROJECT" jobSkills="Logotype"/>
            <Brands titre="Sarenza" jobTitle="Interaction designer" jobSkills="PROTOTYPES and Interactions on app"/>
          </div>
          <div>
            <Link to='/'>
              <Image img={6} />
            </Link>
            <h3>Bisous</h3>
            <span>remy.saddour@gmail.com</span>
          </div>
      </div>
    );
  }
}
module.exports = Footer;