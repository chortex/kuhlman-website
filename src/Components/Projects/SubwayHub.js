import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SubwayHubMap from '../Projects/SubwayHubMap';
import SubwayHubPlaza from '../Projects/SubwayHubPlaza';
import SubwayHubStadiums from '../Projects/SubwayHubStadiums';
import SubwayHubShops from '../Projects/SubwayHubShops';
import SubwayHubDiscoveryGarden from '../Projects/SubwayHubDiscoveryGarden';
import SubwayHubSchool from '../Projects/SubwayHubSchool';
import SubwayHubTheatre from '../Projects/SubwayHubTheatre';
import SubwayHubBotanicalGarden from '../Projects/SubwayHubBotanicalGarden';
import SubwayHubPlanetarium from '../Projects/SubwayHubPlanetarium';
import SubwayHubLibrary from '../Projects/SubwayHubLibrary';
import SubwayHubSubway from '../Projects/SubwayHubSubway';
import SubwayHubcentralPark from '../Projects/SubwayHubCentralPark';
import SubwayHubSkatepark from '../Projects/SubwayHubSkatepark';
import SubwayHubCrater from '../Projects/SubwayHubCrater';

import SitePlan from '../../assets/Projects/SubwayHub/SitePlan/Site Plan.jpg'
import SitePlanCrater from '../../assets/Projects/SubwayHub/SitePlan/Crater.jpg'
import SitePlanSchool from '../../assets/Projects/SubwayHub/SitePlan/School.jpg'
import SitePlanDiscoveryGarden from '../../assets/Projects/SubwayHub/SitePlan/Discovery Garden.jpg'
import SitePlanPlaza from '../../assets/Projects/SubwayHub/SitePlan/Plaza.jpg'
import SitePlanShops from '../../assets/Projects/SubwayHub/SitePlan/Shops.jpg'
import SitePlanBotanicalGarden from '../../assets/Projects/SubwayHub/SitePlan/Botanical Garden.jpg'
import SitePlanPlanetarium from '../../assets/Projects/SubwayHub/SitePlan/Planetarium.jpg'

import SitePlanArrows from '../../assets/Projects/SubwayHub/SitePlan/Subway Hub Plan Arrows.svg'




export default function SubwayHub() {

  const [hoveredCrater, setHoveredCrater] = useState(false);
  const toggleHoverCrater = () => setHoveredCrater(!hoveredCrater);

  const [hoveredSchool, setHoveredSchool] = useState(false);
  const toggleHoverSchool = () => setHoveredSchool(!hoveredSchool);

  const [hoveredDiscoveryGarden, setHoveredDiscoveryGarden] = useState(false);
  const toggleHoverDiscoveryGarden = () => setHoveredDiscoveryGarden(!hoveredDiscoveryGarden);

  const [hoveredPlaza, setHoveredPlaza] = useState(false);
  const toggleHoverPlaza = () => setHoveredPlaza(!hoveredPlaza);

  const [hoveredShops, setHoveredShops] = useState(false);
  const toggleHoverShops = () => setHoveredShops(!hoveredShops);

  const [hoveredBotanicalGarden, setHoveredBotanicalGarden] = useState(false);
  const toggleHoverBotanicalGarden = () => setHoveredBotanicalGarden(!hoveredBotanicalGarden);

  const [hoveredPlanetarium, setHoveredPlanetarium] = useState(false);
  const toggleHoverPlanetarium = () => setHoveredPlanetarium(!hoveredPlanetarium);

  let SitePlanHover = SitePlan;

  if (hoveredCrater) {
    SitePlanHover = SitePlanCrater;
  } else if (hoveredSchool) {
    SitePlanHover = SitePlanSchool;
  }  else if (hoveredDiscoveryGarden) {
    SitePlanHover = SitePlanDiscoveryGarden;
  }  else if (hoveredPlaza) {
    SitePlanHover = SitePlanPlaza;
  }  else if (hoveredShops) {
    SitePlanHover = SitePlanShops;
  }  else if (hoveredBotanicalGarden) {
    SitePlanHover = SitePlanBotanicalGarden;
  }  else if (hoveredPlanetarium) {
    SitePlanHover = SitePlanPlanetarium;
  }


  return(
    <Container className='pt-5'>
      <div className='pt-5 pb-5'>
        <h1 className='display-3' style={{fontWeight: "600"}}>Subway Hub</h1>
      </div>

      <div className='site-plan d-none d-xl-block' style={{margin: "150px 0"}}>
        <div className='site-plan-arrows' style={{position: "absolute", display: "flex", justifyContent: "center", zIndex: "100", top: "150px", left: "0", right:"0", paddingLeft: "207px", marginTop: "-15px"}}>
          <img 
            src={SitePlanArrows}
            alt='Link Arrow'
            style={{width: "1400px", height: "auto"}}
          />
        </div>
        <div className='site-plan-background' style={{width: "680px", height: "382.5px", margin: "50px auto", display: "flex", position: "relative"}}>
          <a 
            href='/' className='site-plan-link' 
            style={{position: "absolute", zIndex: "101", top: "-172px", left: "-80px"}}
            onMouseEnter={toggleHoverCrater}
            onMouseLeave={toggleHoverCrater}
          >
            Crater
          </a>
          <a 
            href='/' className='site-plan-link' 
            style={{position: "absolute", zIndex: "101", top: "80px", left: "820px", width: "fit-content"}}
            onMouseEnter={toggleHoverBotanicalGarden}
            onMouseLeave={toggleHoverBotanicalGarden}
          >
            Botanical Garden
          </a>
          <a 
            href='/' className='site-plan-link' 
            style={{position: "absolute", zIndex: "101", top: "200px", left: "-220px"}}
            onMouseEnter={toggleHoverDiscoveryGarden}
            onMouseLeave={toggleHoverDiscoveryGarden}
          >
            Discovery Garden
          </a>
          <a 
            href='/' className='site-plan-link' 
            style={{position: "absolute", zIndex: "101", top: "450px", left: "700px"}}
            onMouseEnter={toggleHoverShops}
            onMouseLeave={toggleHoverShops}
          >
            Shops
          </a>
          <a 
            href='/' className='site-plan-link' 
            style={{position: "absolute", zIndex: "101", top: "-80px", left: "-150px"}}
            onMouseEnter={toggleHoverSchool}
            onMouseLeave={toggleHoverSchool}
          >
            School
          </a>
          <a 
            href='/' className='site-plan-link' 
            style={{position: "absolute", zIndex: "101", top: "450px", left: "-50px"}}
            onMouseEnter={toggleHoverPlaza}
            onMouseLeave={toggleHoverPlaza}
          >
            Plaza
          </a>
          <a 
            href='/' className='site-plan-link' 
            style={{position: "absolute", zIndex: "101", top: "-75px", left: "650px"}}
            onMouseEnter={toggleHoverPlanetarium}
            onMouseLeave={toggleHoverPlanetarium}
          >
            Planetarium
          </a>
          <img
            src={SitePlanHover}
            alt="Site Plan"
            style={{width: "680px", height: "auto"}}
          />
        </div>
      </div>

      <SubwayHubMap/>
      <SubwayHubPlaza/>
      <SubwayHubStadiums/>
      <SubwayHubShops/>
      <SubwayHubDiscoveryGarden/>
      <SubwayHubSchool/>
      <SubwayHubTheatre/>
      <SubwayHubBotanicalGarden/>
      <SubwayHubPlanetarium/>
      <SubwayHubLibrary/>
      <SubwayHubSubway/>
      <SubwayHubcentralPark/>
      <SubwayHubSkatepark/>
      <SubwayHubCrater/>
    </Container>
  )
}
