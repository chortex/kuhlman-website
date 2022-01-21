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
        <div className="d-block link-wrapper">
          <a href='/portfolio'>
            <img 
              src={serviceImage}
              style={{width:"100%", height:"auto"}}
              alt="Architectural Design"
            />
          </a>
        </div>
        </div>
        <div className="col-xl-7">
          <h5 className="service-heading">Architectural Design</h5>
          <Button
            href='https://www.upwork.com/services/product/full-architectural-services-design-space-planning-drawings-renders-1453673580250574848?ref=project_share' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100"
          >
            <span>Architectural Concept</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>2-5 weeks</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted lh-sm">
                This is the realization of the vision of the design. At this stage, we listening to the client <Collapse timeout={0} in={openArchitecturalConcept}><span id="architectural-concept-text">about their wishes, needs, and how that space should be used, organized, and arranged. We play around with forms and volumes to get the best solution. As a result, you will get basic schemes such as a 3D view of the building with few options of space planning and main materials selections. We develop concept schematic designs for residential as well as for commercial buildings</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenArchitecturalConcept(!openArchitecturalConcept)}
                  aria-controls="architectural-concept-text"
                  aria-expanded={openArchitecturalConcept}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openArchitecturalConcept ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          

          <Button
            href='https://www.upwork.com/services/product/full-architectural-services-design-space-planning-drawings-renders-1453673580250574848?ref=project_share' target='_blank' rel="noreferrer"
            variant="light"
            className= "d-flex justify-content-between btn-sm w-100 mt-3"
          >
            <span>Architectural Design</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>5-12 weeks</b>
            </span>
          </Button>
          
            <div id="architectural-design-text" className="pt-3">
              <p className="text-muted lh-sm">
                This is a transformation of the concept into a more technical look. <Collapse timeout={0} in={openArchitecturalDesign}><span>At this stage, schematic plans and elevations are being revised and a building starts getting more sustainable in layout and dimensions. We invite a structural engineer, and consultants of MEP services, if the project's complexity required. As a result, you will get a Permit Set of Drawings not issued for construction yet. We develop designs drawings for residential as well as for commercial buildings</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenArchitecturalDesign(!openArchitecturalDesign)}
                  aria-controls="architectural-concept-text"
                  aria-expanded={openArchitecturalDesign}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openArchitecturalDesign ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          

          <Button
            href='https://www.upwork.com/services/product/full-architectural-services-design-space-planning-drawings-renders-1453673580250574848?ref=project_share' target='_blank' rel="noreferrer"
            variant="light"
            className= "d-flex justify-content-between btn-sm w-100 mt-3"
          >
            <span>Construction Drawings</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>8-12 weeks</b>
            </span>
          </Button>
          
            <div  className="pt-3">
              <p className="text-muted lh-sm">
                This is the instruction on how to build the building. At this stage, a lot of details <Collapse timeout={0} in={openArchitecturalConstruction}><span id="architectural-construction-text">of how to connect different elements of the building are being developed. Every floor plan and elevation is getting all the necessary dimensions and info to instruct builders during construction. As a result, you will get Drawings and Specifications ready for construction. We develop consruction drawings for residential as well as for commercial buildings</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenArchitecturalConstruction(!openArchitecturalConstruction)}
                  aria-controls="architectural-concept-text"
                  aria-expanded={openArchitecturalConstruction}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openArchitecturalConstruction ? "show more.." : "show less.."}
                </Button>
              </p>

            </div>
          
        </div>
      </div>
    </>
  );
}

export default ArchitecturalDesignCard;
