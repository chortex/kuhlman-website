import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import qrCode from '../assets/Portfolio/AR/AR.jpg'
import arExample from '../assets/Portfolio/AR/ARExample.jpeg'




export default class ARPortfolio extends Component {

  render () {

    return (
      <React.Fragment>
        <Row>
          <div className='col-md-7'>
            <img 
              src={arExample}
              width={"90%"}
              height={"auto"}
              alt="AR"
              className="m-auto"
            />
          </div>
          <div className='col-md-5 d-flex flex-column justify-content-end'>
            <h3 className='text-center'>Please scan the QR code</h3>
            <img 
              src={qrCode}
              width={"70%"}
              height={"auto"}
              alt="QR Code"
              className="m-auto"
            />
          </div>
        </Row>
      </React.Fragment>
    )
  }
}
