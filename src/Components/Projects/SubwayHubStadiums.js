import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import golfFootballStadiums from '../../assets/Projects/SubwayHub/Stadiums/Golf Stadium & Football Stadium.jpg';
import poolTennisHockey from '../../assets/Projects/SubwayHub/Stadiums/Pool-Tennis & Hockey Stadiums.jpg';
import plazaB1B2B3 from '../../assets/Projects/SubwayHub/Stadiums/Plaza - Level B1 B2 B3.jpg';
import plazaB3Rink from '../../assets/Projects/SubwayHub/Stadiums/Plaza - Level B3 Rink.jpg';
import plazaB3Plus3Rink from '../../assets/Projects/SubwayHub/Stadiums/Plaza - Level B3 +3.000 Rink.jpg';
import levelB3TennisSwimmingPool from '../../assets/Projects/SubwayHub/Stadiums/Plaza - Level B3 Tennis & Swimming Pool.jpg';
import levelB3FloorPlanTennisSwimmingPool from '../../assets/Projects/SubwayHub/Stadiums/Plaza - Level B3 Floor Plan Tennis & Swimming Pool.jpg';
import plazaB2FloorPlanTennisSwimmingPool from '../../assets/Projects/SubwayHub/Stadiums/Plaza - Level B2 Floor Plan Tennis & Swimming Pool.jpg';
import levelB3FootballBaseball from '../../assets/Projects/SubwayHub/Stadiums/Plaza - Level B3 Football & Baseball.jpg';
import levelB3FloorPlanFootballBaseball from '../../assets/Projects/SubwayHub/Stadiums/Plaza - Level B3 Floor Plan Football & Baseball.jpg';
import levelB3Golf from '../../assets/Projects/SubwayHub/Stadiums/Plaza - Level B3 Golf.jpg';



export default class SubwayHubStadiums extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: this.props.images
    };
  }


  render() {
    const images = this.state.images.map((i) => {
      i.customOverlay = (
        <div>
          <div>{i.caption}</div>
          {i.hasOwnProperty('tags') && this.setCustomTags(i)}
        </div>);
      return i;
    });

    return(
      <div className='pt-5 pb-5 mb-5 row'>
        <div className='col-lg-8'>
        <div>
          <ImageGallery items={images} thumbnailClass={'justify-content-center'} />
        </div>
        </div>
        <div className='col-lg-4'>
          <h2 className='text-muted display-5 fw-bold'>Stadiums</h2>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          <b>SPORTS STADIUMS:</b> This is a complex of sports facilities with all the necessary ancillary and technologica lfacilities. Includes the following facilities and planar facilities: gym, swimming pool, ice arena, baseball, football, treadmill and golf. These structures can be divided into functional purposes intocomplexes and groups, namely:
          </p>
          <ul className='text-muted lh-sm'>
            <li>basic, designed directly for sports and competitions</li>
            <li>auxiliary, intended for practitioners, coaches and judges, as well as medical, administrative,inventory, etc</li>
            <li>complex for spectators (stands).It should be noted that the shape of the sports core is designed in the form of 4 leaflets, each ofthe petals of which is a separate sports facility</li>
          </ul>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          And depending on the size of a building-thesecoots have different areas. Thus, the biggest leaflet is baseball, football and athletics. A littlesmaller is a golf course, and the two smallest ones are an ice arena and a universal hall with aswimming pool.Along the perimeter of each of these petals there are auxiliary and auxiliary rooms: dressingrooms, showers, bathrooms, first aid rooms, therapeutic rooms for athletes, judges' meetingrooms, conference halls, press rooms, etc.
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubStadiums.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired
    })
  ).isRequired
  };


  SubwayHubStadiums.defaultProps = {
  images: ([
    {
      original: `${golfFootballStadiums}`,
      thumbnail: `${golfFootballStadiums}`,
      description: "Golf Stadium & Football Stadium"
    },
    {
      original: `${poolTennisHockey}`,
      thumbnail: `${poolTennisHockey}`,
      description: "Pool-Tennis & Hockey Stadiums"
    },
    {
      original: `${plazaB1B2B3}`,
      thumbnail: `${plazaB1B2B3}`,
      description: "Plaza - Level B1 B2 B3"
    },
    {
      original: `${plazaB3Rink}`,
      thumbnail: `${plazaB3Rink}`,
      description: "Plaza - Level B3 Rink"
    },
    {
      original: `${plazaB3Plus3Rink}`,
      thumbnail: `${plazaB3Plus3Rink}`,
      description: "Plaza - Level B3 +3.000 Rink"
    },
    {
      original: `${levelB3TennisSwimmingPool}`,
      thumbnail: `${levelB3TennisSwimmingPool}`,
      description: "Plaza - Level B3 Tennis & Swimming Pool"
    },
    {
      original: `${levelB3FloorPlanTennisSwimmingPool}`,
      thumbnail: `${levelB3FloorPlanTennisSwimmingPool}`,
      description: "Plaza - Level B3 Floor Plan Tennis & Swimming Pool"
    },
    {
      original: `${plazaB2FloorPlanTennisSwimmingPool}`,
      thumbnail: `${plazaB2FloorPlanTennisSwimmingPool}`,
      description: "Plaza - Level B2 Floor Plan Tennis & Swimming Pool"
    },
    {
      original: `${levelB3FootballBaseball}`,
      thumbnail: `${levelB3FootballBaseball}`,
      description: "Plaza - Level B3 Football & Baseball"
    },
    {
      original: `${levelB3FloorPlanFootballBaseball}`,
      thumbnail: `${levelB3FloorPlanFootballBaseball}`,
      description: "Plaza - Level B3 Floor Plan Football & Baseball"
    },
    {
      original: `${levelB3Golf}`,
      thumbnail: `${levelB3Golf}`,
      description: "Plaza - Level B3 Golf"
    }
  ])
}
