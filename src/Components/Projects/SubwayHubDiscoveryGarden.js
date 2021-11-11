import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import discoveryGardenSectionVisualization from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden Section Visualization.jpg';
import discoveryGarden1 from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden 1.jpg';
import discoveryGarden2 from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden 2.jpg';
import discoveryGarden3 from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden 3.jpg';
import discoveryGarden4 from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden 4.jpg';
import discoveryGarden from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden.jpg';
import discoveryGardenPlus0 from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden Plan +0,000.jpg';
import discoveryGardenPlus3 from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden Plan +3.000.jpg';
import discoveryGardenPlus6dot5 from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden Plan +6.500.jpg';
import discoveryGardenPlus9dot5 from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden Plan +9.500.jpg';
import discoveryGardenSection from '../../assets/Projects/SubwayHub/DiscoveryGarden/Discovery Garden Section.jpg';




export default class SubwayHubDiscoveryGarden extends Component {
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
          <h2 className='text-muted display-5 fw-bold'>Discovery Garden</h2>
          <p className='text-muted lh-sm'>
          Solved in the form of multilevel space. It is an interactive museum with avariety of stands for learning, exploring and entertaining visitors
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubDiscoveryGarden.propTypes = {
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


  SubwayHubDiscoveryGarden.defaultProps = {
  images: ([
    {
      original: `${discoveryGardenSectionVisualization}`,
      thumbnail: `${discoveryGardenSectionVisualization}`,
      description: "Discovery Garden Section Visualization"
    },
    {
      original: `${discoveryGarden1}`,
      thumbnail: `${discoveryGarden1}`,
      description: "Discovery Garden 1"
    },
    {
      original: `${discoveryGarden2}`,
      thumbnail: `${discoveryGarden2}`,
      description: "Discovery Garden 2"
    },
    {
      original: `${discoveryGarden3}`,
      thumbnail: `${discoveryGarden3}`,
      description: "Discovery Garden 3"
    },
    {
      original: `${discoveryGarden4}`,
      thumbnail: `${discoveryGarden4}`,
      description: "Discovery Garden 4"
    },
    {
      original: `${discoveryGarden}`,
      thumbnail: `${discoveryGarden}`,
      description: "Discovery Garden"
    },
    {
      original: `${discoveryGardenPlus0}`,
      thumbnail: `${discoveryGardenPlus0}`,
      description: "Discovery Garden Plan +0,000"
    },
    {
      original: `${discoveryGardenPlus3}`,
      thumbnail: `${discoveryGardenPlus3}`,
      description: "Discovery Garden Plan +3.000"
    },
    {
      original: `${discoveryGardenPlus6dot5}`,
      thumbnail: `${discoveryGardenPlus6dot5}`,
      description: "Discovery Garden Plan +6.500"
    },
    {
      original: `${discoveryGardenPlus9dot5}`,
      thumbnail: `${discoveryGardenPlus9dot5}`,
      description: "Discovery Garden Plan +9.500"
    },
    {
      original: `${discoveryGardenSection}`,
      thumbnail: `${discoveryGardenSection}`,
      description: "Discovery Garden Section"
    }
  ])
}