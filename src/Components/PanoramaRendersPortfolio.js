import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import panoramaRenderMovie from '../assets/360 VR.mp4'




export default class PanoramaRendersPortfolio extends Component {

  render () {

    return (
      <React.Fragment>
        <Row>
          <div className='col-md-6'>
            <video width="90%" height="auto" controls >
              <source src={panoramaRenderMovie} type="video/mp4"/>
            </video>
          </div>
          <div className='col-md-6'>
            <h3 className='text-center'>Room tour</h3>
            <a
              href='https://local-express-dining.surge.sh/'
              target='_blank'
              rel="noreferrer"
              className='btn w-100 btn-warning'
            >
              Local Express Dining
            </a>
          </div>
        </Row>
      </React.Fragment>
    )
  }
}

