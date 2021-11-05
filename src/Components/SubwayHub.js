import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import SubwayHubMap from '../Components/SubwayHubMap';
import SubwayHubPlaza from '../Components/SubwayHubPlaza';
import SubwayHubStadiums from '../Components/SubwayHubStadiums';


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
      </Container>
    )
  }
}
