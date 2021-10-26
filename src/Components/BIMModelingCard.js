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
            />
          </div>
        </div>
        <div className="col-xl-7">
          <h5 className="service-heading">BIM Modeling</h5>
          <Button
            onClick={() => setOpenBIMModeling(!openBIMModeling)}
            aria-controls="BIM-modeling-text"
            aria-expanded={openBIMModeling}
            variant="light"
            className="d-flex justify-content-start btn-sm w-100"
          >
            BIM Modeling
          </Button>
          <Collapse in={openBIMModeling}>
            <div id="BIM-modeling-text" className="pt-3">
              <p className="text-muted">
                With the help of BIM technologies, a digital information model is created that provides an accurate vision of the whole building as a whole. We do BIM Modeling of Architecture & Structure based on 2D Drawings, Point Cloud, and sketches, delivering fully coordinated revised drawings ready for construction for residential, commercial, and industrial buildings. The high-quality BIM Model allows design and construction teams to see the building as a fulfilled complex and to solve any issues that may occur before construction started.
              </p>
              <p className="text-muted">
              <i class="fas fa-dollar-sign"></i> <b>Hourly basis</b>
              </p>
            </div>
          </Collapse>

          <Button
            onClick={() => setOpenBIMDrafting(!openBIMDrafting)}
            aria-controls="BIM-drafting-text"
            aria-expanded={openBIMDrafting}
            variant="light"
            className= "d-flex justify-content-start btn-sm mt-3 w-100"
          >
            BIM Drafting
          </Button>
          <Collapse in={openBIMDrafting}>
            <div id="BIM-drafting-text" className="pt-3">
              <p className="text-muted">
                We help Architects, Structural Engineers, and Interior Designers to stay focused on designing, taking on the production of the construction drawings by our professional team. Floor Plans, Facades, RCP, Elevations, and Sections, as well as 3D Details and Materials, can be easily produced based on the BIM Model developed for your project
              </p>
              <p className="text-muted">
              <i class="fas fa-dollar-sign"></i> <b>Hourly basis</b>
              </p>
            </div>
          </Collapse>

          <Button
            onClick={() => setOpenBIMConsulting(!openBIMConsulting)}
            aria-controls="BIM-consulting-text"
            aria-expanded={openBIMConsulting}
            variant="light"
            className= "d-flex justify-content-start btn-sm mt-3 w-100"
          >
            BIM Consulting
          </Button>
          <Collapse in={openBIMConsulting}>
            <div id="BIM-consulting-text" className="pt-3">
              <p className="text-muted">
                Support for companies, who would like to explore and implement BIM within their enterprise. We explain BIM Standards, help to develop Revit templates, and library of Revit families
              </p>
              <p className="text-muted">
              <i class="fas fa-dollar-sign"></i> <b>Hourly basis</b>
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default BIMModelingCard;
