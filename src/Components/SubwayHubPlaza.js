import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';


import axonometricView from '../assets/Projects/SubwayHub/Plaza/Plaza_Axonometric View.jpg';
import plazaB1 from '../assets/Projects/SubwayHub/Plaza/Plaza_LevelB1.jpg';
import plazaB2 from '../assets/Projects/SubwayHub/Plaza/Plaza_LevelB2.jpg';
import plazaB3 from '../assets/Projects/SubwayHub/Plaza/Plaza_LevelB3.jpg';



export default class SubwayHubPlaza extends Component {
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
        <h2 className='text-end text-muted display-5 fw-bold'>Plaza</h2>
        <div className='col-lg-8'>
        <div 
          style={{
            display: "block",
            minHeight: "1px",
            width: "100%",
            overflow: "auto"}}
          className="portfolio-gallery"
        >
          <Gallery
            images={images}
            enableImageSelection={false}
            rowHeight={290}
            margin={5}
          />
        </div>
        </div>
        <div className='col-lg-4'>
          <p className='text-muted lh-sm'>
          <b>LEVEL B1:</b> The entrance to this level is designed from the southern part. At the entrance there is a lobby group of rooms which is connected to the elevator hall. And also the reference zone, reception, group of rooms of bathrooms are located here. The entrance is solved in the form of an atrium. From this level there are entrances to sports facilities on the stands for spectators. Also from this level it is possible to get to any other point of a multipurpose complex. In general, the level can be called educational-primary, as there are a variety of educational facilities, conference halls, workshops, and interactive museums. 
          </p>
          <p className='text-muted lh-sm'>
          <b>LEVEL B2:</b> Level B2 includes the following sections for training: medicine, business, textiles, modeling of carsand aviation, computer technology, garden of discoveries, automation. In addition, there is ageneral education school with a kindergarten, a recording studio and a large library. All these functional areas are interconnected by flowing space. At level B2, the following global functional areas are provided: shops, a skate park, a theater, andan art gallery. Also at this level there are stands for spectators of sports facilities.
          </p>
          <p className='text-muted lh-sm'>
          <b>LEVEL B3:</b> Level B3 - the lowest (deepest level) occupies an area of about 140,000 sq. m. In the central part there is a sports center and an underwater cafe. In addition, there is a place for first aid, protection of the whole complex, car repair room. There is a parking lot for visitors' cars, as well as a parking space for buses. The connection between the levels takes place by means of stair-lift units, which have the upper natural light and connect the levels with each other.
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubPlaza.propTypes = {
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


  SubwayHubPlaza.defaultProps = {
  images: ([
    {
      src: `${axonometricView}`,
      thumbnail: `${axonometricView}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Plaza Axonometric View"
    },
    {
      src: `${plazaB1}`,
      thumbnail: `${plazaB1}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Plaza Level B1"
    },
    {
      src: `${plazaB2}`,
      thumbnail: `${plazaB2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Plaza Level B2"
    },
    {
      src: `${plazaB3}`,
      thumbnail: `${plazaB3}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Plaza Level B3"
    }
  ])
}