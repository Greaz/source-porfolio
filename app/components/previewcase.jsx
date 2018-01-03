import React from "react"
import { Link } from 'react-router-dom'


import Auchan from "../img/svg/adi.svg"
import Carrefour from "../img/svg/carrefour.svg"
import Planet from "../img/svg/planet.svg"
import Groupama from "../img/svg/groupama.svg"
import Default from "../img/svg/default.svg"

export class PreviewCase extends React.Component {
  
  renderImage(img) {
    if (img === 1) {
      return <img src={ Auchan } alt="Auchan preview case" />;
    }
    else if (img === 2) {
      return <img src={ Carrefour } alt="Carrfour preview case" />;
    }
    else if (img === 3) {
      return <img src={ Planet } alt="PlanetVO preview case" />;
    }
    else if (img === 4) {
      return <img src={ Groupama } alt="Groupama preview case" />;
    }
    else {
      return <img src={ Default } alt="Groupama preview case" />;
    }
  }
  
  renderPath(img) {
    if (img === 1) {
      return "/cases/auchandirect";
    }
    else if (img === 2) {
      return "/cases/carrefour";
    }
    else if (img === 3) {
      return "/cases/planetvo";
    }
    else if (img === 4) {
      return "/cases/groupama";
    }
    else {
      return "/";
    }
  }

  render() {
    const { 
      titre,
      sousTitre,
      titreJob,
      img,
     } = this.props;
    return (
      <div className="ref">
        <Link to={ this.renderPath(img) }>
          <h3> { titre } </h3>
          <span className="job-title"> { titreJob } </span>
          <span className="job-skills"> { sousTitre } </span>
          { this.renderImage(img) }
        </Link>
      </div>
    );
  }
}
module.exports = PreviewCase;