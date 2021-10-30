import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/Services/BIM_service.jpg';


function BIMModelingCard() {
  const [openBIMModeling, setOpenBIMModeling] = useState(false);
  const [openBIMDrafting, setOpenBIMDrafting] = useState(false);
  const [openBIMConsulting, setOpenBIMConsulting] = useState(false);

  return (
    <>
      <div className="w-md-100 d-flex m-auto row">
        <div className="col-xl-5 d-flex justify-content-center">
          <div className="d-block">
            <img 
              src={serviceImage}
              style={{width:"100%", height:"auto"}}
              alt="BIM Modeling"
              className="shadow-sm"
            />
          </div>
        </div>
        <div className="col-xl-7">
          <h5 className="service-heading">BIM Modeling</h5>
          <Button
            
            variant="light"
            className="d-flex justify-content-between btn-sm w-100"
          >
            <span>BIM Modeling</span>
            <span className="text-muted">
              <i class="fas fa-dollar-sign"></i> <b>Hourly basis</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted">
                With the help of BIM technologies, a digital information model is created <Collapse in={openBIMModeling}><span id="BIM-modeling-text">that provides an accurate vision of the whole building as a whole. We do BIM Modeling of Architecture & Structure based on 2D Drawings, Point Cloud, and sketches, delivering fully coordinated revised drawings ready for construction for residential, commercial, and industrial buildings. The high-quality BIM Model allows design and construction teams to see the building as a fulfilled complex and to solve any issues that may occur before construction started.</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenBIMModeling(!openBIMModeling)}
                  aria-controls="BIM-modeling-text"
                  aria-expanded={openBIMModeling}
                  variant="link"
                  className="p-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  show more..
                </Button>
              </p>
              
              
            </div>

          <Button
            
            variant="light"
            className= "d-flex justify-content-between btn-sm mt-3 w-100"
          >
            <span>BIM Drafting</span>
            <span className="text-muted">
              <i class="fas fa-dollar-sign"></i> <b>Hourly basis</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted">
                We help Architects, Structural Engineers, and Interior Designers to stay focused on designing<Collapse in={openBIMDrafting}><span id="BIM-drafting-text">, taking on the production of the construction drawings by our professional team. Floor Plans, Facades, RCP, Elevations, and Sections, as well as 3D Details and Materials, can be easily produced based on the BIM Model developed for your project</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenBIMDrafting(!openBIMDrafting)}
                  aria-controls="BIM-drafting-text"
                  aria-expanded={openBIMDrafting}
                  variant="link"
                  className="p-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  show more..
                </Button>
              </p>
              
            </div>
          

          <Button
            
            variant="light"
            className= "d-flex justify-content-between btn-sm mt-3 w-100"
          >
            <span>BIM Consulting</span>
            <span className="text-muted">
              <i class="fas fa-dollar-sign"></i> <b>Hourly basis</b>
            </span>
          </Button>
          
            <div  className="pt-3">
              <p className="text-muted">
                Support for companies, who would like to explore and implement BIM within their enterprise. <Collapse in={openBIMConsulting}><span id="BIM-consulting-text">We explain BIM Standards, help to develop Revit templates, and library of Revit families</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenBIMConsulting(!openBIMConsulting)}
                  aria-controls="BIM-consulting-text"
                  aria-expanded={openBIMConsulting}
                  variant="link"
                  className="p-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  show more..
                </Button>
              </p>
              
            </div>
          
        </div>
      </div>
    </>
  );
}

export default BIMModelingCard;
