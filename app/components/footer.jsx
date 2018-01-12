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