import React, { Component } from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';


export default class Jumbotron extends Component {
  render() {
    return (
      <Jumbo fluid className='jumbo d-block'>
        <div className='overlay'></div>
        <Container className='pt-3 pl-3 mission'>
          <div className='pt-5 animated-heading-left'>
            <h1 className='text-white animated-heading-bottom slidein-left d-flex col align-items-center' style={{fontWeight: "500", fontSize: "11rem", textAlign: "left"}}>BIM<div className="d-flex row"><span className='display-3'>Architectural</span><span className='display-3'>Studio</span></div></h1>
            <h4 className='text-white slidein-bottom' id="mission" style={{fontWeight: "300", fontSize: "1.2rem", width:"32%"}}>We create and implement innovative designs solutions closely collaborating with our clients to making our clients’ works on projects easier on a daily basis, building long-term relationships with our company</h4>
          </div>
        </Container>
      </Jumbo>
    )
  }
}