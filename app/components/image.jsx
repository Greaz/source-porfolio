import React from "react"

import Background from "../img/svg/header.svg"
import Logo from "../img/svg/logo.svg"
import Auchan from "../img/svg/adi.svg"
import Carrefour from "../img/svg/carrefour.svg"
import Planet from "../img/svg/planet.svg"
import Groupama from "../img/svg/groupama.svg"
import About from "../img/svg/about.svg"
import Default from "../img/svg/default.svg"
import Dribbble from "../img/svg/dribbble.svg"

export class Image extends React.Component {
  
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
    else if (img === 5) {
      return <img src={ Background } alt="svg background header" />;
    }
    else if (img === 6) {
      return <img src={ Logo } alt="logotype" />;
    }
    else if (img === 7) {
      return <img src={ About } alt="don't make same mistake twice" />;
    }
    else if (img === 8) {
      return <img src={ Dribbble } alt="dribbble ball icon" />;
    }
    else {
      return <img src={ Default } alt="default img" />;
    }
  }
  
  render() {
    const { img } = this.props;
    return (
      this.renderImage(img)
    );
  }
}
module.exports = Image;