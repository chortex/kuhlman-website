import React, { Component } from 'react';
import {Container, Tabs, Tab } from 'react-bootstrap';
import BIMModelingPortfolio from '../Components/BIMModelingPortfolio';
import Animation from '../Components/AnimationPortfolio';
import VRPortfolio from '../Components/VRPortfolio';
import ArchitecturalDesignPortfolio from '../Components/ArchitecturalDesignPortfolio';
import InteriorDesignPortfolio from '../Components/InteriorDesignPortfolio';
import ExteriorVisualizationPortfolio from '../Components/ExteriorVisualizationPortfolio';
import InteriorVisualizationPortfolio from '../Components/InteriorVisualizationPortfolio';
import { NavLink } from 'react-router-dom';


export default class Portfolio extends Component {
  render() {
    return (
      <div className='pt-5'>
        <Container className="row m-auto mb-5 pb-5">
          <div className='pt-5 pb-5'>
            <h1 className='display-3' style={{fontWeight: "600"}}>Portfolio</h1>
          </div>
          <NavLink
            className='btn btn-secondary'
            path to='/subway-hub'
          >
            Subway Hub
          </NavLink>
          <Tabs defaultActiveKey="BIM" id="uncontrolled-tab-example" variant='custom' className="btn-lg mb-5 portfolio-tabs pb-5">
            <Tab eventKey="BIM" title="BIM Modeling">
              <BIMModelingPortfolio />
            </Tab>
            <Tab eventKey="architectural-design" title="Architectural Design">
              <ArchitecturalDesignPortfolio />
            </Tab>
            <Tab eventKey="interior-design" title="Interior Design">
              <InteriorDesignPortfolio />
            </Tab>
            <Tab eventKey="exterior-visualization" title="Exterior Visualization">
              <ExteriorVisualizationPortfolio />
            </Tab>
            <Tab eventKey="interior-visualization" title="Interior Visualization">
              <InteriorVisualizationPortfolio />
            </Tab>
            <Tab eventKey="panorama-renders" title="360° Panorama renders">
              <h1>360° Panorama renders coming soon..</h1>
            </Tab>
            <Tab eventKey="3D-animations" title="3D Animation">
              <Animation />
            </Tab>
            <Tab eventKey="VR" title="VR">
              <VRPortfolio />
            </Tab>
            <Tab eventKey="AR" title="AR">
              <h1>Augmented Reality coming soon..</h1>
            </Tab>
          </Tabs>
        </Container>
      </div>
    )
  }
}