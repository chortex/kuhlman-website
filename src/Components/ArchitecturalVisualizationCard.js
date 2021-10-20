import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/services-bg.jpg';


function ArchitecturalVisualizationCard() {
  const [openArchitecturalVisualizationExterior, setOpenArchitecturalVisualizationExterior] = useState(false);
  const [openArchitecturalVisualizationInterior, setOpenArchitecturalVisualizationInterior] = useState(false);
  const [openArchitecturalVisualizationPanorama, setOpenArchitecturalVisualizationPanorama] = useState(false);

  return (
    <>
      <div className="w-75 w-md-100 d-flex m-auto flex-column">
        <img 
          src={serviceImage}
          style={{width:"100%", height:"auto"}}
          alt="BIM Modeling"
        />
        <h3 className="service-heading pt-3">ARCHITECTURAL VISUALISATION</h3>
        <Button
          onClick={() => setOpenArchitecturalVisualizationExterior(!openArchitecturalVisualizationExterior)}
          aria-controls="exterior-rendering-text"
          aria-expanded={openArchitecturalVisualizationExterior}
          variant="secondary"
          className="mt-3 d-flex justify-content-start"
        >
          Exterior rendering
        </Button>
        <Collapse in={openArchitecturalVisualizationExterior}>
          <div id="exterior-rendering-text" className="pt-3">
            <p className="text-muted">
              High-quality photorealistic 3D visualization of the facade of the building, site, and landscape around it. It will be exciting to see how different options of colors and materials will look at the same facade. We do exterior visualizations for residential, commercial, and industrial buildings as well as for the larger areas such as hotel complexes, site plans, streets, and high tech villages
            </p>
            <p className="text-muted">
              <i className="far fa-calendar-alt"></i> Timelines: <b>3-7 business days</b>
            </p>
          </div>
        </Collapse>

        <Button
          onClick={() => setOpenArchitecturalVisualizationInterior(!openArchitecturalVisualizationInterior)}
          aria-controls="interior-rendering-text"
          aria-expanded={openArchitecturalVisualizationInterior}
          variant="secondary"
          className= "mt-3 d-flex justify-content-start"
        >
          Interior rendering
        </Button>
        <Collapse in={openArchitecturalVisualizationInterior}>
          <div id="interior-rendering-text" className="pt-3">
            <p className="text-muted">
              High-quality photorealistic 3D visualization inside the building, which presents a design that has been developed. It's a pleasure to see how the different finishes, colors, and lighting interacts with space, including furniture and appliances. We do visualizations for residential houses, apartments, villas, also of public spaces, universities, theaters, hospitals as well as for commercial spaces such as restaurants and cafes, offices, hotels, etc.
            </p>
            <p className="text-muted">
              <i className="far fa-calendar-alt"></i> Timelines: <b>3-5 business days</b>
            </p>
          </div>
        </Collapse>

        <Button
          onClick={() => setOpenArchitecturalVisualizationPanorama(!openArchitecturalVisualizationPanorama)}
          aria-controls="panorama-rendering-text"
          aria-expanded={openArchitecturalVisualizationPanorama}
          variant="secondary"
          className= "mt-3 d-flex justify-content-start"
        >
          360° Panorama Render
        </Button>
        <Collapse in={openArchitecturalVisualizationPanorama}>
          <div id="panorama-rendering-text" className="pt-3">
            <p className="text-muted">
              This kind of rendering allows seeing the space from every angle covering the full horizontal and vertical fields of view around a person. It's very useful for the spaces, which have a lot of design components, which can't be presented with by single images
            </p>
            <p className="text-muted">
              <i className="far fa-calendar-alt"></i> Timelines: <b>3-7 business days</b>
            </p>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default ArchitecturalVisualizationCard;
