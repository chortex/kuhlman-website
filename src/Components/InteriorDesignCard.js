import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/Services/InteriorDesignService.jpg';


function InteriorDesignCard() {
  const [openInteriorConcept, setOpenInteriorConcept] = useState(false);
  const [openInteriorDevelopment, setOpenInteriorDevelopment] = useState(false);
  const [openInteriorConstruction, setOpenInteriorConstruction] = useState(false);

  return (
    <>
      <div className="w-md-100 d-flex m-auto row">
        <div className="col-xl-5 d-flex justify-content-center">
          <div className="d-block link-wrapper">
            <a href='/portfolio#interior-design'>
              <img 
                src={serviceImage}
                style={{width:"100%", height:"auto"}}
                alt="Interior Design"
              />
            </a>
          </div>
        </div>
        <div className="col-xl-7">
          <h5 className="service-heading">Interior Design</h5>
          <Button
            href='https://www.upwork.com/services/product/full-interior-design-services-including-drawings-renders-specifications-1456561710006067200?ref=project_share' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100"
          >
            <span>Design Concept</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>3-5 business days</b>
            </span>
          </Button>
          
            <div  className="pt-3">
              <p className="text-muted lh-sm">
                This is a share of mood and feels of the future space. At this stage, we would <Collapse timeout={0} in={openInteriorConcept}><span id="interior-design-concept-text">like to know everything about our client, his / her needs, wishes, and lifestyle as well as how much we can change the current space. We do a lot of searches to find materials, lighting, and furniture, which will perfectly demonstrate the style and design ideas. It's a process of developing the floor plan, which will cover all of the needs in the best ergonomic way. As a result, you will get a basic scheme of space planning and a mood board presenting the design style and direction</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenInteriorConcept(!openInteriorConcept)}
                  aria-controls="interior-design-concept-text"
                  aria-expanded={openInteriorConcept}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openInteriorConcept ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          

          <Button
            href='https://www.upwork.com/services/product/full-interior-design-services-including-drawings-renders-specifications-1456561710006067200?ref=project_share' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100 mt-3"
          >
            <span>Design Development</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>2-6 weeks</b>
            </span>
          </Button>
          
            <div  className="pt-3">
              <p className="text-muted lh-sm">
                This is a transformation of the concept into the 3D model and drawings. <Collapse timeout={0} in={openInteriorDevelopment}><span id="interior-design-development-text">At this stage, we work on applying all the materials on surfaces, model furniture, and produce floor plans, electrical plans & elevations. Also, we will closely work with you to get the approval of the design based on photorealistic visualizations. As a result, you will get basic Drawings Set and renders</span></Collapse>
                <br/>
                <Button
                  onClick={() => setOpenInteriorDevelopment(!openInteriorDevelopment)}
                  aria-controls="interior-design-development-text"
                  aria-expanded={openInteriorDevelopment}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openInteriorDevelopment ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          

          <Button
            href='https://www.upwork.com/services/product/construction-drawings-of-your-interior-exterior-design-1448270313233854464?ref=project_share' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100 mt-3"
          >
            <span>Construction Drawings</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>6-10 weeks</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted lh-sm">
                This is the instruction on how to implement the developed design into reality. <Collapse timeout={0} in={openInteriorConstruction}><span id="interior-design-construction-text">At this stage, a lot of details of how to make different elements of the design work together are being developed as well as collecting all the information of selected materials, lighting, and plumbing fixtures, developed drawings of custom furniture. Every floor plan and elevation is getting all the necessary dimensions and info to instruct builders during construction. As a result, you will get Drawings and Specifications ready for construction</span></Collapse>
                <br/>
                <Button
                  onClick={() => setOpenInteriorConstruction(!openInteriorConstruction)}
                  aria-controls="interior-design-construction-text"
                  aria-expanded={openInteriorConstruction}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openInteriorConstruction ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          
        </div>
      </div>
    </>
  );
}

export default InteriorDesignCard;
