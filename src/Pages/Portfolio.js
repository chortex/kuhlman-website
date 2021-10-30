import React, { Component } from 'react';
import {Container, Tabs, Tab } from 'react-bootstrap';
import BIMModelingPortfolio from '../Components/BIMModelingPortfolio';
import Animation from '../Components/AnimationPortfolio';
import VRPortfolio from '../Components/VRPortfolio';

export default class Portfolio extends Component {
  render() {
    return (
      <div className='pt-5'>
        <Container className="row m-auto mb-5 pb-5">
          <div className='pt-5 pb-5'>
            <h1 className='display-3' style={{fontWeight: "600"}}>Portfolio</h1>
          </div>
          <Tabs defaultActiveKey="BIM" id="uncontrolled-tab-example" className="mb-5 portfolio-tabs pb-5">
            <Tab eventKey="BIM" title="BIM Modeling">
              <BIMModelingPortfolio />
            </Tab>
            <Tab eventKey="architectural-design" title="Architectural Design">
              <h1>Architectural Design</h1>
            </Tab>
            <Tab eventKey="interior-design" title="Interior Design">
              <h1>Interior Design</h1>
            </Tab>
            <Tab eventKey="exterior-visualization" title="Exterior Visualization">
              <h1>Exterior Visualization</h1>
            </Tab>
            <Tab eventKey="interior-visualization" title="Interior Visualization">
              <h1>Interior Visualization</h1>
            </Tab>
            <Tab eventKey="panorama-renders" title="360° Panorama renders">
              <h1>360° Panorama renders</h1>
            </Tab>
            <Tab eventKey="3D-animations" title="3D Animation">
              <Animation />
            </Tab>
            <Tab eventKey="VR" title="VR">
              <VRPortfolio />
            </Tab>
            <Tab eventKey="AR" title="AR">
              <h1>Augmented Reality</h1>
            </Tab>
          </Tabs>
        </Container>
      </div>
    )
  }
}