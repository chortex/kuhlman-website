import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import skatepark from '../../assets/Projects/SubwayHub/Skatepark/Skatepark.jpg';
import skateparkSection1 from '../../assets/Projects/SubwayHub/Skatepark/Skatepark Section 1.jpg';
import skateparkSection2 from '../../assets/Projects/SubwayHub/Skatepark/Skatepark Section 2.jpg';
import skateparkPlan from '../../assets/Projects/SubwayHub/Skatepark/Skatepark Plan.jpg';
import skateparkView1 from '../../assets/Projects/SubwayHub/Skatepark/Skatepark visualization View 1.jpg';
import skateparkView2 from '../../assets/Projects/SubwayHub/Skatepark/Skatepark visualization View 2.jpg';



export default class SubwayHubSkatepark extends Component {
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
          <h2 className='text-muted display-5 fw-bold'>Skatepark</h2>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          The central core at the B2 level is a skate park with various ramps, springboards forhigh-amplitude tricks. Here you can ride a skateboard, roller skates and scooters. At the same levelat the skate park there is a cafe area and bathrooms for visitors. Technical premises, such as rentalof skates, rollers, as well as repairs and maintenance are provided at level B1 (at the entrance tothe complex)
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubSkatepark.propTypes = {
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


  SubwayHubSkatepark.defaultProps = {
  images: ([
    {
      original: `${skatepark}`,
      thumbnail: `${skatepark}`,
      description: "Skatepark"
    },
    {
      original: `${skateparkSection1}`,
      thumbnail: `${skateparkSection1}`,
      description: "Skatepark Section 1"
    },
    {
      original: `${skateparkSection2}`,
      thumbnail: `${skateparkSection2}`,
      description: "Skatepark Section 2"
    },
    {
      original: `${skateparkPlan}`,
      thumbnail: `${skateparkPlan}`,
      description: "Skatepark Plan"
    },
    {
      original: `${skateparkView1}`,
      thumbnail: `${skateparkView1}`,
      description: "Skatepark View 1"
    },
    {
      original: `${skateparkView2}`,
      thumbnail: `${skateparkView2}`,
      description: "Skatepark View 2"
    }
  ])
}
