import React, { useEffect, useRef } from 'react';
import {Carousel, Container } from 'react-bootstrap';
import lottie from 'lottie-web';
import bimAnimation from '../assets/Anima – BIM Services.json';
import interiorAnimation from '../assets/Anima – Interior Design.json';
import architecturalAnimation from '../assets/Anima – Architectural Design.json';
// import Collapse from 'react-bootstrap/Collapse';


function Cover() {

  // const [openMision, setOpenMision] = useState(false);

  const bimContainer = useRef(null)
  const interiorContainer = useRef(null)
  const architecturalContainer = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: bimContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: bimAnimation,
    })
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: interiorContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: interiorAnimation,
    })
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: architecturalContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: architecturalAnimation,
    })
  }, [])


  return (
    <>
    <Carousel fade className="carousel" data-wrap="true">
      <Carousel.Item className='pt-3 pl-3'>
        <Container>
        <div className='pt-5 desktop-cover-header animated-heading-left'>
          <h1 className='text-white animated-heading-bottom d-flex col align-items-center' style={{fontWeight: "500", fontSize: "11rem", textAlign: "left"}}><span className="">BIM</span><div className="d-flex row animated-heading-opacity" ><span className='display-3 fw-bold'>Architectural</span><span className='display-3 fw-bold'>Studio</span></div></h1>
          <h4 className='text-white ps-3' id="mission" style={{fontWeight: "300", fontSize: "1.2rem", width:"35%", position:"relative", zIndex:"2", textAlign:"justify"}}>We create and implement innovative designs solutions closely collaborating with our clients 
          {/* <Collapse in={openMision}><div id="mision-more">to making our clients’ works on projects easier on a daily basis, building long-term relationships with our company</div></Collapse> */}
            {/* <br />
            <div className="d-flex justify-content-end pe-4">
            <Button
              onClick={() => setOpenMision(!openMision)}
              aria-controls="mision-more"
              aria-expanded={openMision}
              variant="link"
              className="p-0 text-lowercase"
              style={{position:"absolute", zIndex:"2", color:"#0000008C"}}
            >
              {!openMision ? "show more.." : "show less.."}
            </Button>
            </div> */}
          </h4>
        </div>
        <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-5"><b style={{fontWeight:"600"}}>BIM</b><br/><span>Architectural Studio</span></h2>
        </Container>
        </Carousel.Item>

        <Carousel.Item className="ps-3">
          <Container className='pt-5'>
          <div className='pt-5 animated-heading-left desktop-cover-header'>
            <h1 className='col text-white display-1' style={{fontWeight:"600"}}>BIM Services</h1>
          </div>
          <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-5">BIM Services</h2>
          <div 
            ref={bimContainer}
          />
          </Container>
        </Carousel.Item>

        <Carousel.Item className="ps-3">
          <Container className='pt-5'>
          <div className='pt-5 animated-heading-left desktop-cover-header'>
            <h1 className='col text-white display-2' style={{fontWeight:"600"}}>Architectural <br />Design</h1>
          </div>
          <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-4 pe-5 me-5">Architecture</h2>
          <div 
            ref={architecturalContainer}
          />
          </Container>
        </Carousel.Item>

        <Carousel.Item className="ps-3">
          <Container className='pt-5'>
          <div className='pt-5 animated-heading-left desktop-cover-header'>
            <h1 className='col text-white display-2' style={{fontWeight:"600"}}>Interior Design</h1>
          </div>
          <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-5">Interior Design</h2>
          <div 
            ref={interiorContainer}
          />
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