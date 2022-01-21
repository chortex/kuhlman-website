import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import serviceImage from '../assets/Services/ArchVisualizationService.jpg';


function ArchitecturalVisualizationCard() {
  const [openArchitecturalVisualizationExterior, setOpenArchitecturalVisualizationExterior] = useState(false);
  const [openArchitecturalVisualizationInterior, setOpenArchitecturalVisualizationInterior] = useState(false);
  const [openArchitecturalVisualizationPanorama, setOpenArchitecturalVisualizationPanorama] = useState(false);

  return (
    <>
      <div className="w-md-100 d-flex m-auto row">
        <div className="col-xl-5 d-flex justify-content-center">
          <div className="d-block link-wrapper">
            <a href='/portfolio#exterior-visualization'>
              <img 
                src={serviceImage}
                style={{width:"100%", height:"auto"}}
                alt="Architectural Visualization"
              />
            </a>
          </div>
        </div>
        <div className="col-xl-7">
          <h5 className="service-heading">Architectural Visualization</h5>
          <Button
            href='https://www.upwork.com/services/product/a-photorealistic-exterior-render-which-perfectly-highlight-your-design-1328721589868138496?ref=project_share' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100"
          >
            <span>Exterior rendering</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>3-7 business days</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted lh-sm">
                High-quality photorealistic 3D visualization of the facade of the building, site, and landscape <Collapse timeout={0} in={openArchitecturalVisualizationExterior}><span id="exterior-rendering-text">around it. It will be exciting to see how different options of colors and materials will look at the same facade. We do exterior visualizations for residential, commercial, and industrial buildings as well as for the larger areas such as hotel complexes, site plans, streets, and high tech villages</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenArchitecturalVisualizationExterior(!openArchitecturalVisualizationExterior)}
                  aria-controls="exterior-rendering-text"
                  aria-expanded={openArchitecturalVisualizationExterior}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openArchitecturalVisualizationExterior ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          

          <Button
            href='https://www.upwork.com/services/product/a-photorealistic-interior-render-which-perfectly-highlight-your-design-1404460210991157248?ref=project_share' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100 mt-3"
          >
            <span>Interior rendering</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>3-5 business days</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted lh-sm">
                High-quality photorealistic 3D visualization inside the building, which presents a design <Collapse timeout={0} in={openArchitecturalVisualizationInterior}><span id="interior-rendering-text">that has been developed. It's a pleasure to see how the different finishes, colors, and lighting interacts with space, including furniture and appliances. We do visualizations for residential houses, apartments, villas, also of public spaces, universities, theaters, hospitals as well as for commercial spaces such as restaurants and cafes, offices, hotels, etc.</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenArchitecturalVisualizationInterior(!openArchitecturalVisualizationInterior)}
                  aria-controls="interior-rendering-text"
                  aria-expanded={openArchitecturalVisualizationInterior}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openArchitecturalVisualizationInterior ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          

          <Button
            href='https://www.upwork.com/services/product/a-photorealistic-360-virtual-reality-vr-panorama-render-1448233084229230592?ref=project_share' target='_blank' rel="noreferrer"
            variant="light"
            className="d-flex justify-content-between btn-sm w-100 mt-3"
          >
            <span>360° Panorama Render</span>
            <span className="text-muted">
              <i className="far fa-calendar-alt"></i> <b>3-7 business days</b>
            </span>
          </Button>
          
            <div className="pt-3">
              <p className="text-muted lh-sm">
                This kind of rendering allows seeing the space from every angle <Collapse timeout={0} in={openArchitecturalVisualizationPanorama}><span id="panorama-rendering-text">covering the full horizontal and vertical fields of view around a person. It's very useful for the spaces, which have a lot of design components, which can't be presented with by single images</span></Collapse>
                <br />
                <Button
                  onClick={() => setOpenArchitecturalVisualizationPanorama(!openArchitecturalVisualizationPanorama)}
                  aria-controls="panorama-rendering-text"
                  aria-expanded={openArchitecturalVisualizationPanorama}
                  variant="link"
                  className="p-0 m-0 text-lowercase show-more-service"
                  style={{color:"#bbb"}}
                >
                  {!openArchitecturalVisualizationPanorama ? "show more.." : "show less.."}
                </Button>
              </p>
              
            </div>
          
        </div>
      </div>
    </>
  );
}

export default ArchitecturalVisualizationCard;
