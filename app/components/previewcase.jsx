import React from "react"
import { Link } from 'react-router-dom'
import Image from "components/image.jsx"

export class PreviewCase extends React.Component {
  
  renderPath(img) {
    if (img === 1) {
      return "/auchandirect";
    }
    else if (img === 2) {
      return "/"; // when it's ready "/carrefour"
    }
    else if (img === 3) {
      return "/"; // when it's ready "/planetvo"
    }
    else if (img === 4) {
      return "/"; // when it's ready "/groupama"
    }
    else {
      return "/";
    }
  }
  
  renderImg(img) {
    if (img === 1) {
      return 20;
    }
    else if (img === 2) {
      return 21;
    }
    else if (img === 3) {
      return 23;
    }
    else if (img === 4) {
      return 22;
    }
    else {
      return console.warn("caca dans previewcase component");
    }
  }
  

  render() {
    const { 
      titre,
      sousTitre,
      titreJob,
      baseline,
      img,
     } = this.props;
    return (
      <div className="ref">
          <h3> { titre } </h3>
          <span className="job-title"> { titreJob } </span>
          <span className="job-skills"> { sousTitre } </span>
        <Link to={ this.renderPath(img) }>
          <figure className="preview">
            <Image className="img-case" img={this.renderImg(img)} />
            <figcaption>
              <Image className="logo-case" img={img} />
              <p>{ baseline }</p>
            </figcaption>			
          </figure>
        </Link>
      </div>
    );
  }
}
module.exports = PreviewCase;