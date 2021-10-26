import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/Services/ArchDesignService.jpg';


function ArchitecturalDesignCard() {
  const [openArchitecturalConcept, setOpenArchitecturalConcept] = useState(false);
  const [openArchitecturalDesign, setOpenArchitecturalDesign] = useState(false);
  const [openArchitecturalConstruction, setOpenArchitecturalConstruction] = useState(false);

  return (
    <>
      <div className="w-md-100 d-flex m-auto row">
        <div className="col-xl-5 d-flex justify-content-center">
        <div className="d-block">
          <img 
            src={serviceImage}
            style={{width:"100%", height:"auto"}}
            alt="Architectural Design"
          />
        </div>
        </div>
        <div className="col-xl-7">
          <h5 className="service-heading">Architectural Design</h5>
          <Button
            onClick={() => setOpenArchitecturalConcept(!openArchitecturalConcept)}
            aria-controls="architectural-concept-text"
            aria-expanded={openArchitecturalConcept}
            variant="light"
            className="d-flex justify-content-start btn-sm w-100"
          >
            Architectural Concept
          </Button>
          <Collapse in={openArchitecturalConcept}>
            <div id="architectural-concept-text" className="pt-3">
              <p className="text-muted">
                This is the realization of the vision of the design. At this stage, we listening to the client about their wishes, needs, and how that space should be used, organized, and arranged. We play around with forms and volumes to get the best solution. As a result, you will get basic schemes such as a 3D view of the building with few options of space planning and main materials selections. We develop concept schematic designs for residential as well as for commercial buildings
              </p>
              <p className="text-muted">
                <i className="far fa-calendar-alt"></i> Timelines: <b>2-5 weeks</b>
              </p>
            </div>
          </Collapse>

          <Button
            onClick={() => setOpenArchitecturalDesign(!openArchitecturalDesign)}
            aria-controls="architectural-design-text"
            aria-expanded={openArchitecturalDesign}
            variant="light"
            className= "d-flex justify-content-start btn-sm w-100 mt-3"
          >
            Architectural Design
          </Button>
          <Collapse in={openArchitecturalDesign}>
            <div id="architectural-design-text" className="pt-3">
              <p className="text-muted">
                This is a transformation of the concept into a more technical look. At this stage, schematic plans and elevations are being revised and a building starts getting more sustainable in layout and dimensions. We invite a structural engineer, and consultants of MEP services, if the project's complexity required. As a result, you will get a Permit Set of Drawings not issued for construction yet. We develop designs drawings for residential as well as for commercial buildings
              </p>
              <p className="text-muted">
                <i className="far fa-calendar-alt"></i> Timelines: <b>5-12 weeks</b>
              </p>
            </div>
          </Collapse>

          <Button
            onClick={() => setOpenArchitecturalConstruction(!openArchitecturalConstruction)}
            aria-controls="architectural-construction-text"
            aria-expanded={openArchitecturalConstruction}
            variant="light"
            className= "d-flex justify-content-start btn-sm w-100 mt-3"
          >
            Architectural Construction
          </Button>
          <Collapse in={openArchitecturalConstruction}>
            <div id="architectural-construction-text" className="pt-3">
              <p className="text-muted">
                This is the instruction on how to build the building. At this stage, a lot of details of how to connect different elements of the building are being developed. Every floor plan and elevation is getting all the necessary dimensions and info to instruct builders during construction. As a result, you will get Drawings and Specifications ready for construction. We develop consruction drawings for residential as well as for commercial buildings
              </p>
              <p className="text-muted">
                <i className="far fa-calendar-alt"></i> Timelines: <b>8-12 weeks</b>
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default ArchitecturalDesignCard;
