import React, { Component } from 'react';
import {Container} from 'react-bootstrap';


export default class ServicesMain extends Component {
  render() {
    return (
      <Container className='pt-5'>
        <h1 className='display-3' style={{fontWeight: "600"}}>Services</h1>
        <div className='pt-5 row'>
          <a className='col-lg-3 col-md-6 main-bim-modeling main-services' href="/services">
            BIM Modeling & Drafting
          </a>
          <a className='col-lg-3 col-md-6 main-architectural-design main-services' href="/services">
            Architectural Design
          </a>
          <a className='col-lg-3 col-md-6 main-interior-design main-services' href="/services">
            Interior Design
          </a>
          <a className='col-lg-3 col-md-6 main-architectural-visualization main-services' href="/services">
            Architectural Visualization
          </a>
        </div>
      </Container>
    )
  }
}