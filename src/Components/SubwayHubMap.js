import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
        <div className='col-lg-8 d-block'>
        <div>
          <ImageGallery items={images} originalHeight={"80%"} />
        </div>
        </div>
        <div className='col-lg-4'>
          <h2 className='text-muted display-5 fw-bold'>Map</h2>
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
      original: `${map}`,
      thumbnail: `${map}`,
      description: "Subway Hub Map"
    },
    {
      original: `${MasterPlan}`,
      thumbnail: `${MasterPlan}`,
      description: "Subway Hub Master Plan"
    },
    {
      original: `${Render}`,
      thumbnail: `${Render}`,
      description: "Subway Hub Render"
    }
  ])
}