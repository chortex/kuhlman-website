import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import qrCode from '../assets/Portfolio/AR/AR.jpg'




export default class ARPortfolio extends Component {

  render () {

    return (
      <React.Fragment>
        <Row>
          <h3>To learn more about Augmented Reality scan the code</h3>
          <div className='col-md-6'>
            <img 
              src={qrCode}
              width={"90%"}
              height={"auto"}
              alt="QR Code"
            />
          </div>
          <div className='col-md-6'>

          </div>
        </Row>
      </React.Fragment>
    )
  }
}
