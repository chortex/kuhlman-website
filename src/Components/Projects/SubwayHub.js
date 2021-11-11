import React, {Component} from 'react';
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




export default class SubwayHub extends Component {
  render() {

    return(
      <Container className='pt-5'>
        <div className='pt-5 pb-5'>
          <h1 className='display-3' style={{fontWeight: "600"}}>Subway Hub</h1>
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
}
