import React, { useState } from 'react';
import {Carousel, Container, Button } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';


function Cover() {

  const [openMision, setOpenMision] = useState(false);

  return (
    <>
    <div className='overlay'></div>
    <Carousel fade className="carousel slide" data-wrap="false">
      <Carousel.Item className='pt-3 pl-3' interval={10000}>
        <Container>
        <div className='pt-5 animated-heading-left desktop-cover-header'>
          <h1 className='text-white animated-heading-bottom d-flex col align-items-center' style={{fontWeight: "500", fontSize: "10rem", textAlign: "left"}}>BIM<div className="d-flex row" ><span className='display-3'>Architectural</span><span className='display-3'>Studio</span></div></h1>
          <h4 className='text-white ps-3' id="mission" style={{fontWeight: "300", fontSize: "1.2rem", width:"35%", position:"relative", zIndex:"2"}}>We create and implement innovative designs solutions closely collaborating with our clients <Collapse in={openMision}><div id="mision-more">to making our clients’ works on projects easier on a daily basis, building long-term relationships with our company</div></Collapse>
            <br />
            <div className="d-flex justify-content-end pe-4">
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
            </div>
          </h4>
        </div>
        <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-5"><b style={{fontWeight:"600"}}>BIM</b><br/><span>Architectural Studio</span></h2>
        </Container>
        </Carousel.Item>

        <Carousel.Item className="ps-3" interval={10000}>
          <Container className='pt-5'>
          <div className='pt-5 animated-heading-left desktop-cover-header'>
            <h1 className='col text-white display-1' style={{fontWeight:"600"}}>Interior Design</h1>
          </div>
          <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-5">Interior Design</h2>
          </Container>
        </Carousel.Item>

        <Carousel.Item className="ps-3" interval={10000}>
          <Container className='pt-5'>
          <div className='pt-5 animated-heading-left desktop-cover-header'>
            <h1 className='col text-white display-1' style={{fontWeight:"600"}}>Architecture</h1>
          </div>
          <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-4 pe-5 me-5">Architecture</h2>
          </Container>
        </Carousel.Item>

        <Carousel.Item className="ps-3" interval={10000}>
          <Container className='pt-5'>
          <div className='pt-5 animated-heading-left desktop-cover-header'>
            <h1 className='col text-white display-1' style={{fontWeight:"600"}}>Architectural<br />Visualization</h1>
          </div>
          <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-5">Architecture Visualization</h2>
          </Container>
        </Carousel.Item>

        <Carousel.Item className="ps-3" interval={10000}>
          <Container className='pt-5'>
          <div className='pt-5 animated-heading-left desktop-cover-header'>
            <h1 className='col text-white display-1' style={{fontWeight:"600"}}>BIM Services</h1>
          </div>
          <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-5">BIM Services</h2>
          </Container>
        </Carousel.Item>
    </Carousel>
    
    <Container className='d-flex justify-content-end align-items-end'>
      <div className='jumbo-socials'>
        <a href='https://www.linkedin.com/company/kuhlmannstudio' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-linkedin fa-2x"></i></a>
        <a href='https://www.instagram.com/kuhlmannstudio/' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-instagram-square fa-2x"></i></a>
        <a href='https://www.behance.net/kuhlmannstudio' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-behance-square fa-2x"></i></a>
        <a href='https://www.facebook.com/kuhlmannstudio' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-facebook-square fa-2x"></i></a>
        <a href='https://vimeo.com/kuhlmann' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-vimeo fa-2x"></i></a>
      </div>
    </Container>
    </>
  )
}

export default Cover;