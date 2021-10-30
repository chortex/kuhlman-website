import React, { Component } from 'react';


export default class AnimationPortfolio extends Component {

  render() {


    return(
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center p-0 p-sm-3">
          <iframe src="https://player.vimeo.com/video/551800429?h=201be8f571" width="640" height="360" title="3D Animation - Residence in Napa Valley" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="col-lg-6 d-flex justify-content-center p-0 p-sm-3">
          <iframe src="https://player.vimeo.com/video/330601509?h=29c6ecd53c" width="640" height="360" title="3D Animation - Villa in Australia" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="col-lg-6 d-flex justify-content-center p-0 p-sm-3">
          <iframe src="https://player.vimeo.com/video/339188981?h=6b9af453da" width="640" height="360" title="MEP Engineering Services" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}
