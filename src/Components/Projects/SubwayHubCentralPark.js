import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import centralParkSection1 from '../../assets/Projects/SubwayHub/CentralPark/Central Park Section 1.jpg';
import centralParkSection2 from '../../assets/Projects/SubwayHub/CentralPark/Central Park Section 2.jpg';
import centralParkView1 from '../../assets/Projects/SubwayHub/CentralPark/Central Park View 1.jpg';
import centralParkView2 from '../../assets/Projects/SubwayHub/CentralPark/Central Park View 2.jpg';
import centralPark from '../../assets/Projects/SubwayHub/CentralPark/Central Park.jpg';
import aquarium from '../../assets/Projects/SubwayHub/CentralPark/Aquarium.jpg';
import underwaterCafe from '../../assets/Projects/SubwayHub/CentralPark/Underwater Cafe.jpg';
import underwaterCafePlan from '../../assets/Projects/SubwayHub/CentralPark/Underwater Cafe Plan.jpg';
import underwaterCafeView1 from '../../assets/Projects/SubwayHub/CentralPark/Underwater Cafe Visualization View 1.jpg';
import underwaterCafeView2 from '../../assets/Projects/SubwayHub/CentralPark/Underwater Cafe Visualization View 2.jpg';



export default class SubwayHubcentralPark extends Component {
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
          <h2 className='text-muted display-5 fw-bold'>Central Park, Underwater Cafe & Water Pool</h2>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          Located at level B3 and facing out (at the level of the master plan) in the form of a vertical aquarium
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubcentralPark.propTypes = {
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


  SubwayHubcentralPark.defaultProps = {
  images: ([
    {
      original: `${centralParkSection1}`,
      thumbnail: `${centralParkSection1}`,
      description: "Central Park Section 1"
    },
    {
      original: `${centralParkSection2}`,
      thumbnail: `${centralParkSection2}`,
      description: "Central Park Section 2"
    },
    {
      original: `${centralParkView1}`,
      thumbnail: `${centralParkView1}`,
      description: "Central Park View 1"
    },
    {
      original: `${centralParkView2}`,
      thumbnail: `${centralParkView2}`,
      description: "Central Park View 2"
    },
    {
      original: `${centralPark}`,
      thumbnail: `${centralPark}`,
      description: "Central Park.jpg"
    },
    {
      original: `${aquarium}`,
      thumbnail: `${aquarium}`,
      description: "Aquarium"
    },
    {
      original: `${underwaterCafe}`,
      thumbnail: `${underwaterCafe}`,
      description: "Underwater Cafe"
    },
    {
      original: `${underwaterCafePlan}`,
      thumbnail: `${underwaterCafePlan}`,
      description: "Underwater Cafe Plan"
    },
    {
      original: `${underwaterCafeView1}`,
      thumbnail: `${underwaterCafeView1}`,
      description: "Underwater Cafe View 1"
    },
    {
      original: `${underwaterCafeView2}`,
      thumbnail: `${underwaterCafeView2}`,
      description: "Underwater Cafe View 2"
    }
  ])
}
