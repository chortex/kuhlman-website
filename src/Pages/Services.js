import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import BIMModelingCard from '../Components/BIMModelingCard';
import InteriorDesignCard from '../Components/InteriorDesignCard';
import ArchitecturalDesignCard from '../Components/ArchitecturalDesignCard';
import ArchitecturalVisualizationCard from '../Components/ArchitecturalVisualizationCard';
import VRCard from '../Components/VRCard';

export default class Services extends Component {
  render() {
    return (
      <div className='pt-5'>
        <Container className="row m-auto">
        <div className='pt-5 pb-5'>
          <h1 className='display-3' style={{fontWeight: "600"}}>Services</h1>
        </div>
        <div className="col-lg-6 service-card pb-3 d-block">
          <BIMModelingCard />
        </div>
        <div className="col-lg-6 service-card pb-3 d-block">
          <ArchitecturalDesignCard />
        </div>
        <div className="col-lg-6 service-card pb-3 d-block">
        <InteriorDesignCard />
        </div>
        <div className="col-lg-6 service-card pb-3 d-block">
          <ArchitecturalVisualizationCard />
        </div>
        <div className="col-lg-6 service-card pb-3 d-block">
          <VRCard />
        </div>
        </Container>
      </div>
    )
  }
}