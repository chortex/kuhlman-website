import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/10.jpg';


function InteriorDesignCard() {
  const [openInteriorConcept, setOpenInteriorConcept] = useState(false);
  const [openInteriorDevelopment, setOpenInteriorDevelopment] = useState(false);
  const [openInteriorConstruction, setOpenInteriorConstruction] = useState(false);

  return (
    <>
      <div className="w-75 w-md-100 d-flex m-auto flex-column">
        <img 
          src={serviceImage}
          style={{width:"100%", height:"auto"}}
          alt="BIM Modeling"
        />
        <h3 className="service-heading pt-3">INTERIOR DESIGN</h3>
        <Button
          onClick={() => setOpenInteriorConcept(!openInteriorConcept)}
          aria-controls="interior-design-concept-text"
          aria-expanded={openInteriorConcept}
          variant="secondary"
          className="mt-3 d-flex justify-content-start"
        >
          Interior Design Concept
        </Button>
        <Collapse in={openInteriorConcept}>
          <div id="interior-design-concept-text" className="pt-3">
            <p className="text-muted">
              This is a share of mood and feels of the future space. At this stage, we would like to know everything about our client, his / her needs, wishes, and lifestyle as well as how much we can change the current space. We do a lot of searches to find materials, lighting, and furniture, which will perfectly demonstrate the style and design ideas. It's a process of developing the floor plan, which will cover all of the needs in the best ergonomic way. As a result, you will get a basic scheme of space planning and a mood board presenting the design style and direction
            </p>
            <p className="text-muted">
              <i className="far fa-calendar-alt"></i> Timelines: <b>3-5 business days</b>
            </p>
          </div>
        </Collapse>

        <Button
          onClick={() => setOpenInteriorDevelopment(!openInteriorDevelopment)}
          aria-controls="interior-design-development-text"
          aria-expanded={openInteriorDevelopment}
          variant="secondary"
          className= "mt-3 d-flex justify-content-start"
        >
          Interior Design Development
        </Button>
        <Collapse in={openInteriorDevelopment}>
          <div id="interior-design-development-text" className="pt-3">
            <p className="text-muted">
              This is a transformation of the concept into the 3D model and drawings. At this stage, we work on applying all the materials on surfaces, model furniture, and produce floor plans, electrical plans & elevations. Also, we will closely work with you to get the approval of the design based on photorealistic visualizations. As a result, you will get basic Drawings Set and renders
            </p>
            <p className="text-muted">
              <i className="far fa-calendar-alt"></i> Timelines: <b>2-6 weeks</b>
            </p>
          </div>
        </Collapse>

        <Button
          onClick={() => setOpenInteriorConstruction(!openInteriorConstruction)}
          aria-controls="interior-design-construction-text"
          aria-expanded={openInteriorConstruction}
          variant="secondary"
          className= "mt-3 d-flex justify-content-start"
        >
          Interior Design Construction Drawings
        </Button>
        <Collapse in={openInteriorConstruction}>
          <div id="interior-design-construction-text" className="pt-3">
            <p className="text-muted">
              This is the instruction on how to implement the developed design into reality. At this stage, a lot of details of how to make different elements of the design work together are being developed as well as collecting all the information of selected materials, lighting, and plumbing fixtures, developed drawings of custom furniture. Every floor plan and elevation is getting all the necessary dimensions and info to instruct builders during construction. As a result, you will get Drawings and Specifications ready for construction
            </p>
            <p className="text-muted">
              <i className="far fa-calendar-alt"></i> Timelines: <b>6-10 weeks</b>
            </p>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default InteriorDesignCard;
