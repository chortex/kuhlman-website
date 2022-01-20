import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import subwaySection1 from '../../assets/Projects/SubwayHub/Subway/Subway Section 1.jpg';
import subwaySection2 from '../../assets/Projects/SubwayHub/Subway/Subway Section 2.jpg';
import subwayAxonometry from '../../assets/Projects/SubwayHub/Subway/Subway Axonometry.jpg';
import subwayLevelB2 from '../../assets/Projects/SubwayHub/Subway/Subway Level B2.jpg';
import subwayLevelB3 from '../../assets/Projects/SubwayHub/Subway/Subway Level B3.jpg';
import subwayPlanB2 from '../../assets/Projects/SubwayHub/Subway/Subway Plan B2.jpg';
import subwayPlanB3 from '../../assets/Projects/SubwayHub/Subway/Subway Plan B3.jpg';




export default class SubwayHubSubway extends Component {
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
          <h2 className='text-muted display-5 fw-bold'>Subway</h2>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          Two levels subway occupies levels B3 and B2. Connections between levels in the form of escalators
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubSubway.propTypes = {
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


  SubwayHubSubway.defaultProps = {
  images: ([
    {
      original: `${subwaySection1}`,
      thumbnail: `${subwaySection1}`,
      description: "Subway Section 1"
    },
    {
      original: `${subwaySection2}`,
      thumbnail: `${subwaySection2}`,
      description: "Subway Section 2"
    },
    {
      original: `${subwayAxonometry}`,
      thumbnail: `${subwayAxonometry}`,
      description: "Subway Axonometry"
    },
    {
      original: `${subwayLevelB2}`,
      thumbnail: `${subwayLevelB2}`,
      description: "Subway Level B2"
    },
    {
      original: `${subwayLevelB3}`,
      thumbnail: `${subwayLevelB3}`,
      description: "Subway Level B3"
    },
    {
      original: `${subwayPlanB2}`,
      thumbnail: `${subwayPlanB2}`,
      description: "Subway Plan B2"
    },
    {
      original: `${subwayPlanB3}`,
      thumbnail: `${subwayPlanB3}`,
      description: "Subway Plan B3"
    }
  ])
}
