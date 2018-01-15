import React from "react"

import Background from "../img/svg/header.svg"
import Logo from "../img/svg/logo.svg"
import About from "../img/svg/about.svg"
import Default from "../img/svg/default.svg"
import Dribbble from "../img/svg/dribbble.svg"
import Ux from "../img/svg/ux.svg"
import Ux2 from "../img/svg/ux2.svg"
import UxResult from "../img/svg/result.svg"
import OtherWork from "../img/svg/adi-other.svg"

import LogoAuchan from "../img/svg/adi-logo.svg"
import LogoCarrefour from "../img/svg/carrefour-logo.svg"
import LogoPvo from "../img/svg/pvo-logo.svg"
import LogoGroupama from "../img/svg/groupama-logo.svg"

import AdiNav from "../img/others/adi-work1.jpg"
import NewCart from "../img/others/cart.jpg"
import AdiLoader from "../img/svg/adi-loader.svg"

import AdiHistory1 from "../img/others/adi-history1.jpg"
import AdiHistory2 from "../img/others/adi-history2.jpg"
import AdiHistory3 from "../img/others/adi-history3.jpg"

export class Image extends React.Component {
  
  renderImage(img) {
    if (img === 1) {
      return <img src={ LogoAuchan } alt="logo Auchan:Direct" />;
    }
    else if (img === 2) {
      return <img src={ LogoCarrefour } alt="logo Carrefour" />;
    }
    else if (img === 3) {
      return <img src={ LogoPvo } alt="logo Planet VO" />;
    }
    else if (img === 4) {
      return <img src={ LogoGroupama } alt="logo Groupama" />;
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
    else if (img === 9) {
      return <img src={ Ux } alt="Ux case" />;
    }
    else if (img === 10) {
      return <img src={ Ux2 } alt="illustration of the situation" />;
    }
    else if (img === 11) {
      return <img src={ UxResult } alt="results" />;
    }
    else if (img === 12) {
      return <img src={ OtherWork } alt="Other works" />;
    }
    else if (img === 13) {
      return <img src={ AdiNav } alt="Auchan:Direct new nav" />;
    }
    else if (img === 14) {
      return <img src={ NewCart } alt="Auchan:Direct new product card" />;
    }
    else if (img === 15) {
      return <img src={ AdiLoader } alt="Auchan:Direct new product card" />;
    }
    else if (img === 16) {
      return <img src={ AdiHistory1 } alt="Auchan:Direct 2016" />;
    }
    else if (img === 17) {
      return <img src={ AdiHistory2 } alt="Auchan:Direct early 2017" />;
    }
    else if (img === 18) {
      return <img src={ AdiHistory3 } alt="Auchan:Direct 2017" />;
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