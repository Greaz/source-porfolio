import React from "react"
import { Link } from 'react-router-dom'
import Image from "components/image.jsx"

export class PreviewCase extends React.Component {
  
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
          <Image img={img} />
        </Link>
      </div>
    );
  }
}
module.exports = PreviewCase;