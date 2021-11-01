import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

import map from '../assets/Projects/SubwayHub/Map/Map.jpg';
import MasterPlan from '../assets/Projects/SubwayHub/Map/Subway Transfer Hub - Master plan.jpg';
import Render from '../assets/Projects/SubwayHub/Map/Subway Transfer Hub - Render.jpg';




export default class SubwayHubMap extends Component {
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
        <h2 className='text-end text-muted display-5 fw-bold'>Map</h2>
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
            rowHeight={235}
            margin={5}
          />
        </div>
        </div>
        <div className='col-lg-4'>
          <p className='text-muted lh-sm'>
          The multifunctional complex consists of 3 levels - B3, B2 and B1. The height of one level is 6 m(from floor to floor). All levels of the complex, except for a small part of the B1 level, areunderground.The main entrance to the multifunctional complex is provided from the level of B1 in the southernpart of the site.In each level, the predominant function is highlighted. Yes, level B3 is a sports core and parking forvisitors and staff of the whole complex. B2-commercial premises, B-1-educational institutions. Inaddition, some functions occupy several levels: for example: sports center, library, skate park,school, theater, garden of discoveries and the subway occupy two or more levels.Each of the functional areas is equipped with technical and auxiliary rooms (bathrooms, includingbathrooms for low mobility groups, mother and child rooms, dressing rooms for visitors, servicerooms, technical rooms), vertical communications (elevators, stairs, escalators) and horizontalcommunications , halls, lobbies-if the function occupies more than one level). Connections between levels are made by escalators, stairs and elevators.
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubMap.propTypes = {
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


  SubwayHubMap.defaultProps = {
  images: ([
    {
      src: `${map}`,
      thumbnail: `${map}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Subway Hub Map"
    },
    {
      src: `${MasterPlan}`,
      thumbnail: `${MasterPlan}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Subway Hub Master Plan"
    },
    {
      src: `${Render}`,
      thumbnail: `${Render}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Subway Hub Render"
    }
  ])
}