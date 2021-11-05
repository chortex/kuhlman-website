import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/Services/3DVRARCard.jpg';


function VRCard() {
  const [open3DAnimation, setOpen3DAnimation] = useState(false);
  const [openVirtualReality, setOpenVirtualReality] = useState(false);
  const [openAugmentedReality, setOpenAugmentedReality] = useState(false);

  return (
    <>
      <div className="w-md-100 d-flex m-auto row">
        <div className="col-xl-5 d-flex justify-content-center">
          <div className="d-block link-wrapper">
            <a href='/portfolio#VR'>
              <img 
                src={serviceImage}
                style={{width:"100%", height:"auto"}}
                alt="Interior Design"
              />
            </a>
          </div>
        </div>
        <div className="col">
          <h5 className="service-heading">VR, AR & 3D Animation</h5>
          <Button
            href='https://www.upwork.com/ag/kuhlmann/' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100"
          >
            <span>3D Animation</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>from 3 weeks</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted">
                Architectural 3D animation clip or walkthrough / flythrough produced based on a 3D <Collapse timeout={0} in={open3DAnimation}><span id="3D-animation-text">Model. This is a very useful tool for interactive presentations of projects using a video clip. It usually enables the visualization of a property space in the 3D environment by including not only a building itself but also a 3D model of the landscape, interiors, moving people, and vehicles. We do 3D architectural animation as of exteriors as well as for interiors projects for a wide range of projects any complexity</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpen3DAnimation(!open3DAnimation)}
                  aria-controls="3D-animation-text"
                  aria-expanded={open3DAnimation}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!open3DAnimation ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          

          <Button
            href='https://www.upwork.com/ag/kuhlmann/' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100 mt-3"
          >
            <span>Virtual Reality</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>from 2 weeks</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted">
                Architectural VR helps you to get a feeling of being inside the space. Using VR <Collapse timeout={0} in={openVirtualReality}><span id="virtual-reality-text">headsets you can easily navigate through the model and explore every corner of the room. This s also a great tool for the presentations of the design for customers at the early stages of design, that our clients would be able easily to understand how much space and day sunlights do they have. VR is also available in web and desktop versions</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenVirtualReality(!openVirtualReality)}
                  aria-controls="virtual-reality-text"
                  aria-expanded={openVirtualReality}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openVirtualReality ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          

          <Button
            href='https://www.upwork.com/ag/kuhlmann/' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100 mt-3"
          >
            <span>Augmented Reality</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>from 2 weeks</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted">
                AR allows our customers to present the building right on their tables <Collapse timeout={0} in={openAugmentedReality}><span id="augmented-reality-text">as well as on the construction sites. Turning on and off different layers of the building, it becomes so easy to understand the structure of the building analyze possible risks and challenges. It works as on smartphones as well as with tablets</span></Collapse>
                <br/>
                <Button
                  onClick={() => setOpenAugmentedReality(!openAugmentedReality)}
                  aria-controls="augmented-reality-text"
                  aria-expanded={openAugmentedReality}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openAugmentedReality ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          
        </div>
      </div>
    </>
  );
}

export default VRCard;
