import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import lottie from 'lottie-web';
import bimAnimation from '../assets/Anima – BIM Services.json';
import interiorAnimation from '../assets/Anima – Interior Design.json';
import architecturalAnimation from '../assets/Anima – Architectural Design.json';
import defaultBackground from '../assets/Cover/exterior.jpg';
import BIMBackground from '../assets/Cover/engineering.jpg';
import interiorBackground from '../assets/Cover/interior.jpg';


function Cover() {

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
      animationData: architecturalAnimation
    })
  }, [])

  const [hoveredBIM, setHoveredBim] = useState(false);
  const toggleHoverBIM = () => setHoveredBim(!hoveredBIM);

  const [hoveredArchitecture, setHoveredArchitecture] = useState(false);
  const toggleHoverArchitecture = () => setHoveredArchitecture(!hoveredArchitecture);

  const [hoveredInterior, setHoveredInterior] = useState(false);
  const toggleHoverInterior = () => setHoveredInterior(!hoveredInterior);

  const [hoveredExterior, setHoveredExterior] = useState(false);
  const toggleHoverExterior = () => setHoveredExterior(!hoveredExterior);

  let cover = defaultBackground;
  if (hoveredBIM) {
    cover = BIMBackground
  } else if (hoveredArchitecture) {
    cover = defaultBackground
  } else if (hoveredInterior) {
    cover = interiorBackground
  } else if (hoveredExterior) {
    cover = defaultBackground
  } else {
    cover = defaultBackground
  }

  return (
    <>
      <div className='cover-wrapper'>
        <div className='cover row'
          style={{
            backgroundImage: `url(${cover})`
          }}
        >
          <div 
            className='col-md-3 cover-section'
            onMouseEnter={toggleHoverBIM}
            onMouseLeave={toggleHoverBIM}
          >

          </div>
          <div
            className='col-md-3 cover-section'
            onMouseEnter={toggleHoverArchitecture}
            onMouseLeave={toggleHoverArchitecture}
          >
          </div>
          <div
            className='col-md-3 cover-section'
            onMouseEnter={toggleHoverInterior}
            onMouseLeave={toggleHoverInterior}
          >

          </div>
          <div
            className='col-md-3 cover-section'
            onMouseEnter={toggleHoverExterior}
            onMouseLeave={toggleHoverExterior}
          >

          </div>
          <Container 
            className='cover-default'
            style={{display: hoveredBIM || hoveredArchitecture || hoveredInterior || hoveredExterior ? 'none' : 'block'}}
          >
            <div className='pt-5 desktop-cover-header animated-heading-left'>
              <h1 className='text-white animated-heading-bottom d-flex col align-items-center' style={{fontWeight: "500", fontSize: "11rem", textAlign: "left"}}><span className="">BIM</span><div className="d-flex row animated-heading-opacity" ><span className='display-3 fw-bold'>Architectural</span><span className='display-3 fw-bold'>Studio</span></div></h1>
              <h4 className='text-white ps-3' id="mission" style={{fontWeight: "300", fontSize: "1.2rem", width:"35%", position:"relative", zIndex:"2", textAlign:"justify"}}>We create and implement innovative designs solutions closely collaborating with our clients 
              </h4>
            </div>
            <h2 className="text-white text-center animated-heading-left display-1 mobile-cover-header mt-5 pt-5"><b style={{fontWeight:"600"}}>BIM</b><br/><span>Architectural Studio</span></h2>
          </Container>
        </div>
      
      <Container className='d-flex justify-content-end align-items-end'>
        <div className='jumbo-socials'>
          <a href='https://www.linkedin.com/company/kuhlmannstudio' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-linkedin fa-2x"></i></a>
          <a href='https://www.instagram.com/kuhlmannstudio/' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-instagram-square fa-2x"></i></a>
          <a href='https://www.behance.net/kuhlmannstudio' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-behance-square fa-2x"></i></a>
          <a href='https://www.facebook.com/kuhlmannstudio' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-facebook-square fa-2x"></i></a>
          <a href='https://vimeo.com/kuhlmann' target='_blank' rel="noreferrer" className='cover-social'><i className="fab fa-vimeo fa-2x"></i></a>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Cover;