import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/image.png';


function ArchitecturalDesignCard() {
  const [openArchitecturalConcept, setOpenArchitecturalConcept] = useState(false);
  const [openArchitecturalDesign, setOpenArchitecturalDesign] = useState(false);
  const [openArchitecturalConstruction, setOpenArchitecturalConstruction] = useState(false);

  return (
    <>
      <div className="w-75 w-md-100 d-flex m-auto flex-column">
        <img 
          src={serviceImage}
          style={{width:"100%", height:"auto"}}
          alt="BIM Modeling"
        />
        <h3 className="service-heading pt-3">ARCHITECTURAL DESIGN</h3>
        <Button
          onClick={() => setOpenArchitecturalConcept(!openArchitecturalConcept)}
          aria-controls="architectural-concept-text"
          aria-expanded={openArchitecturalConcept}
          variant="secondary"
          className="mt-3 d-flex justify-content-start"
        >
          Architectural Concept Development
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
          variant="secondary"
          className= "mt-3 d-flex justify-content-start"
        >
          Architectural Design Development
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
          variant="secondary"
          className= "mt-3 d-flex justify-content-start"
        >
          Architectural Construction Drawings
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
    </>
  );
}

export default ArchitecturalDesignCard;
