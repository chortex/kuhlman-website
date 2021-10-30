import React, { useState } from 'react';
import {Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';


function Jumbotron() {

  const [openMision, setOpenMision] = useState(false);

  return (
    <Jumbo fluid className='jumbo d-block'>
      <div className='overlay'></div>
      <Container className='pt-3 pl-3'>
        <div className='pt-5 animated-heading-left desktop-cover-header'>
          <h1 className='text-white animated-heading-bottom d-flex col align-items-center' style={{fontWeight: "500", fontSize: "11rem", textAlign: "left"}}>BIM<div className="d-flex row" ><span className='display-3'>Architectural</span><span className='display-3'>Studio</span></div></h1>
          <h4 className='text-white ps-3' id="mission" style={{fontWeight: "300", fontSize: "1.2rem", width:"32%", position:"relative"}}>We create and implement innovative designs solutions closely collaborating with our clients <Collapse timeout={0} in={openMision}><span id="mision-more">to making our clients’ works on projects easier on a daily basis, building long-term relationships with our company</span></Collapse>
            <br />
            <Button
              onClick={() => setOpenMision(!openMision)}
              aria-controls="mision-more"
              aria-expanded={openMision}
              variant="link"
              className="p-0 text-lowercase"
              style={{position:"absolute", zIndex:"2", color:"#0000008C"}}
            >
              show more..
            </Button>
          </h4>
        </div>
        <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-5"><b style={{fontWeight:"600"}}>BIM</b><br/><span>Architectural Studio</span></h2>
        <div className='d-flex justify-content-end align-items-end'>
          <div className='jumbo-socials'>
            <a href='https://www.linkedin.com/company/kuhlmannteam/' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-linkedin fa-2x"></i></a>
            <a href='https://www.instagram.com/kuhlmannteam/' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-instagram-square fa-2x"></i></a>
            <a href='https://vimeo.com/kuhlmann' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-behance-square fa-2x"></i></a>
            <a href='https://www.facebook.com/kuhlmannteam/' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-facebook-square fa-2x"></i></a>
            <a href='https://vimeo.com/kuhlmann' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-vimeo fa-2x"></i></a>
          </div>
        </div>
      </Container>
    </Jumbo>
  )
}

export default Jumbotron;