import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/image.png';


function VRCard() {
  const [open3DAnimation, setOpen3DAnimation] = useState(false);
  const [openVirtualReality, setOpenVirtualReality] = useState(false);
  const [openAugmentedReality, setOpenAugmentedReality] = useState(false);

  return (
    <>
      <div className="w-75 w-md-100 d-flex m-auto flex-column">
        <img 
          src={serviceImage}
          style={{width:"100%", height:"auto"}}
          alt="BIM Modeling"
        />
        <h3 className="service-heading pt-3">VR, AR & 3D ANIMATION</h3>
        <Button
          onClick={() => setOpen3DAnimation(!open3DAnimation)}
          aria-controls="3D-animation-text"
          aria-expanded={open3DAnimation}
          variant="secondary"
          className="mt-3 d-flex justify-content-start"
        >
          3D Animation
        </Button>
        <Collapse in={open3DAnimation}>
          <div id="3D-animation-text" className="pt-3">
            <p className="text-muted">
              Architectural 3D animation clip or walkthrough / flythrough produced based on a 3D Model. This is a very useful tool for interactive presentations of projects using a video clip. It usually enables the visualization of a property space in the 3D environment by including not only a building itself but also a 3D model of the landscape, interiors, moving people, and vehicles. We do 3D architectural animation as of exteriors as well as for interiors projects for a wide range of projects any complexity
            </p>
            <p className="text-muted">
              <i className="far fa-calendar-alt"></i> Timelines: <b>from 3 weeks</b>
            </p>
          </div>
        </Collapse>

        <Button
          onClick={() => setOpenVirtualReality(!openVirtualReality)}
          aria-controls="virtual-reality-text"
          aria-expanded={openVirtualReality}
          variant="secondary"
          className= "mt-3 d-flex justify-content-start"
        >
          Virtual Reality
        </Button>
        <Collapse in={openVirtualReality}>
          <div id="virtual-reality-text" className="pt-3">
            <p className="text-muted">
              Architectural VR helps you to get a feeling of being inside the space. Using VR headsets you can easily navigate through the model and explore every corner of the room. This s also a great tool for the presentations of the design for customers at the early stages of design, that our clients would be able easily to understand how much space and day sunlights do they have. VR is also available in web and desktop versions
            </p>
            <p className="text-muted">
              <i className="far fa-calendar-alt"></i> Timelines: <b>from 2 weeks</b>
            </p>
          </div>
        </Collapse>

        <Button
          onClick={() => setOpenAugmentedReality(!openAugmentedReality)}
          aria-controls="augmented-reality-text"
          aria-expanded={openAugmentedReality}
          variant="secondary"
          className= "mt-3 d-flex justify-content-start"
        >
          Augmented Reality
        </Button>
        <Collapse in={openAugmentedReality}>
          <div id="augmented-reality-text" className="pt-3">
            <p className="text-muted">
              AR allows our customers to present the building right on their tables as well as on the construction sites. Turning on and off different layers of the building, it becomes so easy to understand the structure of the building analyze possible risks and challenges. It works as on smartphones as well as with tablets
            </p>
            <p className="text-muted">
              <i className="far fa-calendar-alt"></i> Timelines: <b>from 2 weeks</b>
            </p>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default VRCard;
