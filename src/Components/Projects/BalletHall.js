import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import balletHallView1 from '../../assets/Projects/BalletHall/Ballet Hall_View 1.jpg';
import balletHallView2 from '../../assets/Projects/BalletHall/Ballet Hall_View 2.jpg';
import balletHallView3 from '../../assets/Projects/BalletHall/Ballet Hall_View 3.jpg';
import balletHallBathroom from '../../assets/Projects/BalletHall/Ballet Hall_Bathroom.jpg';
import balletHallStorage from '../../assets/Projects/BalletHall/Ballet Hall_Storage.jpg';
import balletHallChangingRoom from '../../assets/Projects/BalletHall/Ballet Hall_Woman Changing Room.jpg';


export default class BalletHall extends Component {

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
      <Container className='pt-5'>
        <div className='pt-5 pb-5'>
          <h1 className='display-3' style={{fontWeight: "600"}}>Ballet Hall</h1>
        </div>

        <div className='pt-5 pb-5 mb-5 row'>
          <div className='col-lg-8'>
            <div>
              <ImageGallery items={images}/>
            </div>
          </div>
          <div className='col-lg-4'>
            <h4 className='text-muted fw-bold'><i className="fas fa-map-marker-alt"></i> Location: <span className='fw-light'>Lviv, Ukraine</span></h4>
            <br />
            <h4 className='text-muted fw-bold'><i className="fas fa-cube"></i> Plot Size: <span className='fw-light'>345 m<sup>2</sup></span></h4>
            <br/>
            <p className='text-muted lh-sm'>
            Reconstruction of the ballet hall for 50 dancers. The main goal was to keep existing gypsum tiles on the walls with traditional ornament and make the feel of lightness by using the paper decorative elements on the ceiling, which form the shape of a wave
            </p>
          </div>
        </div>

      </Container>
    )
  }
}

BalletHall.propTypes = {
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


  BalletHall.defaultProps = {
  images: ([
    {
      original: `${balletHallView1}`,
      thumbnail: `${balletHallView1}`,
      description: "Ballet Hall View 1"
    },
    {
      original: `${balletHallView2}`,
      thumbnail: `${balletHallView2}`,
      description: "Ballet Hall View 2"
    },
    {
      original: `${balletHallView3}`,
      thumbnail: `${balletHallView3}`,
      description: "Ballet Hall View 3"
    },
    {
      original: `${balletHallBathroom}`,
      thumbnail: `${balletHallBathroom}`,
      description: "Ballet Hall Bathroom"
    },
    {
      original: `${balletHallStorage}`,
      thumbnail: `${balletHallStorage}`,
      description: "Ballet Hall Storage"
    },
    {
      original: `${balletHallChangingRoom}`,
      thumbnail: `${balletHallChangingRoom}`,
      description: "Ballet Hall Woman Changing Room"
    }
  ])
}
