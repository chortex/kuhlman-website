import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import craterView1 from '../../assets/Projects/SubwayHub/Crater/Crater_View1.jpg';
import craterView2 from '../../assets/Projects/SubwayHub/Crater/Crater_View2.jpg';
import craterSection from '../../assets/Projects/SubwayHub/Crater/Crater_Section.jpg';
import crater from '../../assets/Projects/SubwayHub/Crater/Crater.jpg';
import planetariumExterior from '../../assets/Projects/SubwayHub/Crater/Planetarium Exterior.jpg';



export default class SubwayHubCrater extends Component {
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
          <ImageGallery items={images} thumbnailClass={'justify-content-center'} />
        </div>
        </div>
        <div className='col-lg-4 mt-5'>
          <h2 className='text-muted display-5 fw-bold'>Crater</h2>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          Coming soon...
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubCrater.propTypes = {
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


  SubwayHubCrater.defaultProps = {
  images: ([
    {
      original: `${craterView1}`,
      thumbnail: `${craterView1}`,
      description: "Crater View 1"
    },
    {
      original: `${craterView2}`,
      thumbnail: `${craterView2}`,
      description: "Crater View 2"
    },
    {
      original: `${craterSection}`,
      thumbnail: `${craterSection}`,
      description: "Crater Section"
    },
    {
      original: `${crater}`,
      thumbnail: `${crater}`,
      description: "Crater"
    },
    {
      original: `${planetariumExterior}`,
      thumbnail: `${planetariumExterior}`,
      description: "Planetarium Exterior"
    }
  ])
}
