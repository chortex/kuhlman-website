import React, { Component } from 'react';
import {Container} from 'react-bootstrap';


export default class ServicesMain extends Component {
  render() {
    return (
      <Container className='pt-5 services-main-section'>
        <h1 className='display-3' style={{fontWeight: "600"}}>Services</h1>
        <div className='pt-5 row services-main-wrapper'>
          <a className='col-3 main-bim-modeling main-services text-center' href="/services">
            BIM Modeling & Drafting
          </a>
          <a className='col-3 main-architectural-design main-services text-center' href="/services">
            Architectural Design
          </a>
          <a className='col-3 main-interior-design main-services text-center' href="/services">
            Interior Design
          </a>
          <a className='col-3 main-architectural-visualization main-services text-center' href="/services">
            Architectural Visualization
          </a>
        </div>
      </Container>
    )
  }
}