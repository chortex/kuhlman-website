import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import planetarium1 from '../../assets/Projects/SubwayHub/Planetarium/Planetarium 1.jpg';
import planetarium2 from '../../assets/Projects/SubwayHub/Planetarium/Planetarium 2.jpg';
import planetarium3 from '../../assets/Projects/SubwayHub/Planetarium/Planetarium 3.jpg';
import planetarium4 from '../../assets/Projects/SubwayHub/Planetarium/Planetarium 4.jpg';
import planetarium5 from '../../assets/Projects/SubwayHub/Planetarium/Planetarium 5.jpg';
import planetariumFloorPlan from '../../assets/Projects/SubwayHub/Planetarium/Planetarium Floor Plan.jpg';
import planetariumExterior from '../../assets/Projects/SubwayHub/Planetarium/Planetarium Exterior.jpg';
import planetariumInterior from '../../assets/Projects/SubwayHub/Planetarium/Planetarium Interior.jpg';




export default class SubwayHubPlanetarium extends Component {
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
        <div className='col-lg-8 mt-5'>
          <div>
            <ImageGallery items={images}/>
          </div>
        </div>
        <div className='col-lg-4 mt-5'>
          <h2 className='text-muted display-5 fw-bold'>Planetarium</h2>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          Coming soon...
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubPlanetarium.propTypes = {
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


  SubwayHubPlanetarium.defaultProps = {
  images: ([
    {
      original: `${planetarium1}`,
      thumbnail: `${planetarium1}`,
      description: "Planetarium view 1"
    },
    {
      original: `${planetarium2}`,
      thumbnail: `${planetarium2}`,
      description: "Planetarium view 2"
    },
    {
      original: `${planetarium3}`,
      thumbnail: `${planetarium3}`,
      description: "Planetarium view 3"
    },
    {
      original: `${planetarium4}`,
      thumbnail: `${planetarium4}`,
      description: "Planetarium view 4"
    },
    {
      original: `${planetarium5}`,
      thumbnail: `${planetarium5}`,
      description: "Planetarium view 5"
    },
    {
      original: `${planetariumFloorPlan}`,
      thumbnail: `${planetariumFloorPlan}`,
      description: "Planetarium Floor Plan"
    },
    {
      original: `${planetariumExterior}`,
      thumbnail: `${planetariumExterior}`,
      description: "Planetarium Exterior"
    },
    {
      original: `${planetariumInterior}`,
      thumbnail: `${planetariumInterior}`,
      description: "Planetarium Interior"
    }
  ])
}