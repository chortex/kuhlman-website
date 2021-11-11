import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import map from '../../assets/Projects/SubwayHub/Map/Map.jpg';
import MasterPlan from '../../assets/Projects/SubwayHub/Map/Subway Transfer Hub - Master plan.jpg';
import Render from '../../assets/Projects/SubwayHub/Map/Subway Transfer Hub - Render.jpg';




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
        <div className='col-lg-8'>
          <div>
            <ImageGallery items={images}/>
          </div>
        </div>
        <div className='col-lg-4'>
          <h2 className='text-muted display-5 fw-bold'>Map</h2>
          <p className='text-muted lh-sm'>
          The multifunctional complex consists of 3 levels: B3, B2, and B1. All levels, except for a small part of the B1 level, are underground. The main entrance to the multifunctional complex is provided from the level of B1 in the southern part of the site. Level B3 is a base for sports cores and parking. Level B2 commercial premises, Level B1-educational institutions. In addition, some functions occupy several levels: for example, sports center, library, skate park, school, theater, the garden of discoveries, and the subway occupy two or more levels
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
