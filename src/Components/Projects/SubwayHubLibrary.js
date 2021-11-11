import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import libraryLevel1 from '../../assets/Projects/SubwayHub/Library/Library Level 1.jpg';
import libraryLevel2 from '../../assets/Projects/SubwayHub/Library/Library Level 2.jpg';
import libraryLevel3 from '../../assets/Projects/SubwayHub/Library/Library Level 3.jpg';
import libraryLevel4 from '../../assets/Projects/SubwayHub/Library/Library Level 4.jpg';
import libraryPlanPlus0 from '../../assets/Projects/SubwayHub/Library/Library Plan +0.000.jpg';
import libraryPlanPlus3 from '../../assets/Projects/SubwayHub/Library/Library Plan +3.000.jpg';
import libraryPlanPlus6 from '../../assets/Projects/SubwayHub/Library/Library Plan +6.000.jpg';
import libraryPlanPlus9 from '../../assets/Projects/SubwayHub/Library/Library Plan +9.000.jpg';



export default class SubwayHubLibrary extends Component {
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
          <h2 className='text-muted display-5 fw-bold'>Library</h2>
          <p className='text-muted lh-sm'>
          Occupies levels B1 and B2. It is located on both sides of the skate park and is a multi-level public space with dedicated places for reading, studying, as well as holding conferences andmeetings with writers-artists. It should be noted that the library is not a traditional repository of books and a place to read them. This library is an interactive data center with an electronic catalogof books, video-audio storage, etc.
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubLibrary.propTypes = {
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


  SubwayHubLibrary.defaultProps = {
  images: ([
    {
      original: `${libraryLevel1}`,
      thumbnail: `${libraryLevel1}`,
      description: "Library Level 1"
    },
    {
      original: `${libraryLevel2}`,
      thumbnail: `${libraryLevel2}`,
      description: "Library Level 2"
    },
    {
      original: `${libraryLevel3}`,
      thumbnail: `${libraryLevel3}`,
      description: "Library Level 3"
    },
    {
      original: `${libraryLevel4}`,
      thumbnail: `${libraryLevel4}`,
      description: "Library Level 4"
    },
    {
      original: `${libraryPlanPlus0}`,
      thumbnail: `${libraryPlanPlus0}`,
      description: "Library Plan +0.000"
    },
    {
      original: `${libraryPlanPlus3}`,
      thumbnail: `${libraryPlanPlus3}`,
      description: "Library Plan +3.000"
    },
    {
      original: `${libraryPlanPlus6}`,
      thumbnail: `${libraryPlanPlus6}`,
      description: "Library Plan +6.000"
    },
    {
      original: `${libraryPlanPlus9}`,
      thumbnail: `${libraryPlanPlus9}`,
      description: "Library Plan +9.000"
    }
  ])
}
