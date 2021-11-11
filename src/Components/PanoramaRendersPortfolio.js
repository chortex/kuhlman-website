import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import panoramaRenderMovie from '../assets/360 VR.mp4'




export default class PanoramaRendersPortfolio extends Component {

  render () {

    return (
      <React.Fragment>
        <Row>
          <div className='col-md-6'>
            <video width="100%" height="auto" controls >
              <source src={panoramaRenderMovie} type="video/mp4"/>
            </video>
          </div>
          <div className='col-md-6'>

          </div>
        </Row>
      </React.Fragment>
    )
  }
}

