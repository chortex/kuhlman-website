import React, { Component } from 'react';


export default class VRPortfolio extends Component {

  render() {


    return(
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center p-0 p-sm-3">
        <iframe src="https://player.vimeo.com/video/332005788?h=2fe2ddffba" width="640" height="360" title="Virtual Reality - Residential House" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="col-lg-6 d-flex justify-content-center p-0 p-sm-3">
        <iframe src="https://player.vimeo.com/video/564130097?h=80c5a7e473" width="640" height="360" title="Unreal Engine Presentation" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}
