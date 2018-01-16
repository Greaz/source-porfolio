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
import NewCart from "../img/others/adi-work2.jpg"
import AdiLoader from "../img/svg/adi-loader.svg"

import AdiHistory1 from "../img/others/adi-history1.jpg"
import AdiHistory2 from "../img/others/adi-history2.jpg"
import AdiHistory3 from "../img/others/adi-history3.jpg"
import LogoDark from "../img/svg/logo-dark.svg"

import PreviewAdi from "../img/others/adi.jpg"
import PreviewCarrefour from "../img/others/carrefour.jpg"
import PreviewPvo from "../img/others/pvo.jpg"
import PreviewGroupama from "../img/others/groupama.jpg"

const Images = [
  {name: LogoAuchan, alt: 'logo Auchan:Direct'},
  {name: LogoCarrefour, alt: 'logo Carrefour'},
  {name: LogoPvo, alt: 'logo Planet VO'},
  {name: LogoGroupama, alt: 'logo Groupama'},
  {name: Background, alt: 'svg background header'},
  {name: Logo, alt: 'logotype'},
  {name: About, alt: 'don"t make same mistake twice'},
  {name: Dribbble, alt: 'dribbble icon ball'},
  {name: Ux, alt: 'Ux case'},
  {name: Ux2, alt: 'illustration of the situation'},
  {name: UxResult, alt: 'results'},
  {name: OtherWork, alt: 'Other works'},
  {name: AdiNav, alt: 'Auchan:Direct new nav'},
  {name: NewCart, alt: 'Auchan:Direct new product card'},
  {name: AdiLoader, alt: 'Auchan:Direct svg loader'},
  {name: AdiHistory1, alt: 'Auchan:Direct 2016'},
  {name: AdiHistory2, alt: 'Auchan:Direct early 2017'},
  {name: AdiHistory3, alt: 'Auchan:Direct 2017'},
  {name: LogoDark, alt: 'logotype'},
  {name: PreviewAdi, alt: 'background Auchan:Direct'},
  {name: PreviewCarrefour, alt: 'background Carrefour'},
  {name: PreviewGroupama, alt: 'background Groupama'},
  {name: PreviewPvo, alt: 'background PlanetVO2'}, //21
];


export class Image extends React.Component {
  
  renderImage(img, className) {
    const index = img - 1;
    return <img className={className} src={Images[index].name} alt={Images[index].alt} />;
  }
  
  render() {
    const { 
      img,
      className,
     } = this.props;
    return (
      this.renderImage(img, className)
    );
  }
}
module.exports = Image;