import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/Services/BIM_Service.jpg';


function BIMModelingCard() {
  const [openBIMModeling, setOpenBIMModeling] = useState(false);
  const [openBIMDrafting, setOpenBIMDrafting] = useState(false);
  const [openBIMConsulting, setOpenBIMConsulting] = useState(false);

  return (
    <>
      <div className="w-md-100 d-flex m-auto row">
        <div className="col-xl-5 d-flex justify-content-center">
          <div className="d-block link-wrapper">
            <a href="/portfolio#BIM">
              <img 
                src={serviceImage}
                style={{width:"100%", height:"auto"}}
                alt="BIM Modeling"
              />
            </a>
          </div>
        </div>
        <div className="col-xl-7">
          <h5 className="service-heading">BIM Modeling</h5>
          <Button
            href='https://www.upwork.com/ag/kuhlmann/' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100"
          >
            <span>BIM Modeling</span>
            <span className="text-muted">
              <i class="fas fa-dollar-sign"></i> <b>Hourly basis</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted lh-sm">
                With the help of BIM technologies, a digital information model is created <Collapse timeout={0} in={openBIMModeling}><span id="BIM-modeling-text">that provides an accurate vision of the whole building as a whole. We do BIM Modeling of Architecture & Structure based on 2D Drawings, Point Cloud, and sketches, delivering fully coordinated revised drawings ready for construction for residential, commercial, and industrial buildings. The high-quality BIM Model allows design and construction teams to see the building as a fulfilled complex and to solve any issues that may occur before construction started.</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenBIMModeling(!openBIMModeling)}
                  aria-controls="BIM-modeling-text"
                  aria-expanded={openBIMModeling}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openBIMModeling ? "show more.." : "show less.."}
                </Button>
              </p>
              
              
            </div>

          <Button
            href='https://www.upwork.com/ag/kuhlmann/' target='_blank' rel="noreferrer"
            variant="light"
            className= "d-flex justify-content-between btn-sm mt-3 w-100"
          >
            <span>BIM Drafting</span>
            <span className="text-muted">
              <i class="fas fa-dollar-sign"></i> <b>Hourly basis</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted lh-sm">
                We help Architects, Structural Engineers, and Interior Designers to stay focused on designing, taking on the production <Collapse timeout={0} in={openBIMDrafting}><span id="BIM-drafting-text" className="inline-block">of the construction drawings by our professional team. Floor Plans, Facades, RCP, Elevations, and Sections, as well as 3D Details and Materials, can be easily produced based on the BIM Model developed for your project</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenBIMDrafting(!openBIMDrafting)}
                  aria-controls="BIM-drafting-text"
                  aria-expanded={openBIMDrafting}
                  variant="link"
                  className="p-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openBIMDrafting ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          

          <Button
            href='https://www.upwork.com/ag/kuhlmann/' target='_blank' rel="noreferrer"
            variant="light"
            className= "d-flex justify-content-between btn-sm mt-3 w-100"
          >
            <span>BIM Consulting</span>
            <span className="text-muted">
              <i class="fas fa-dollar-sign"></i> <b>Hourly basis</b>
            </span>
          </Button>
          
            <div  className="pt-3">
              <p className="text-muted lh-sm">
                Support for companies, who would like to explore and implement BIM within their enterprise. <Collapse timeout={0} in={openBIMConsulting}><span id="BIM-consulting-text">We explain BIM Standards, help to develop Revit templates, and library of Revit families</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenBIMConsulting(!openBIMConsulting)}
                  aria-controls="BIM-consulting-text"
                  aria-expanded={openBIMConsulting}
                  variant="link"
                  className="p-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openBIMConsulting ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          
        </div>
      </div>
    </>
  );
}

export default BIMModelingCard;
