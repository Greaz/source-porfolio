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
  
  renderPreview(img) {
    if (img === 1) {
      return (
        <div className="prev-auchan" >
          <Image img={img} />
          <p>Allow users to do their food shopping in less than 20 minutes.</p>
        </div>
      );
    }
    else if (img === 2) {
      return (
        <div className="prev-carrefour" >
          <Image img={img} />
          <p>Coming soon</p>
        </div>
      );
    }
    else if (img === 3) {
      return (
        <div className="prev-pvo" >
          <Image img={img} />
          <p>Coming soon</p>
        </div>
      );
    }
    else if (img === 4) {
      return (
        <div className="prev-groupama" >
          <Image img={img} />
          <p>Coming soon</p>
        </div>
      );
    }
    else {
      return (
        <div>
          <Image img={img} />
          <p>Coming soon | work in progress</p>
        </div>
      );
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
          {this.renderPreview(img)}
        </Link>
      </div>
    );
  }
}
module.exports = PreviewCase;