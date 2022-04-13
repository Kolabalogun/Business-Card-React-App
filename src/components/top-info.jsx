import React, { Component } from "react";
import "./style.css";

import twtsvgs from '../img/twitter-brands.svg'
import igsvgs from '../img/instagram-brands.svg'


class TopInfo extends Component {
  state = {};
  render() {
    return (
      <div className="top">
        <img
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-3992656.jpg&fm=jpg"
          alt="img"
        />
        <div className="details">
          <h2>Lara Smith</h2>
          <p className="work">Front End Developer</p>
          <a href="mailto:akinola10302@gmail.com">akinola10302@gmail.com</a>
        </div>

        <div className="buttons">
          <button className="btn twitter"> <img className="svg" src={twtsvgs} /> Twitter</button>
          <button className="btn instagram"> <img className="svg" src={igsvgs} />  Instagram</button>
        </div>
      </div>
    );
  }
}

export default TopInfo;
