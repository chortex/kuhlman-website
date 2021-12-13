import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import livingRoomView1 from '../../assets/Projects/DoroshenkoResidence/Living room_View 1.jpg';
import livingRoomView2 from '../../assets/Projects/DoroshenkoResidence/Living room_View 2.jpg';
import livingRoomView3 from '../../assets/Projects/DoroshenkoResidence/Living room_View 3.jpg';
import kitchenView1 from '../../assets/Projects/DoroshenkoResidence/Kitchen_View 1.jpg';
import doroshenkoResidence from '../../assets/Projects/DoroshenkoResidence/Doroshenkos Residence.jpg';


export default class DoroshenkoResidence extends Component {

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
          <h1 className='display-3' style={{fontWeight: "600"}}>Doroshenko Residence</h1>
        </div>

        <div className='pt-5 pb-5 mb-5 row'>
          <div className='col-lg-8'>
            <div>
              <ImageGallery items={images}/>
            </div>
          </div>
          <div className='col-lg-4'>
            <h5 className='text-muted fw-bold'><i className="fas fa-map-marker-alt"></i> Location: <span className='fw-light'>Portland, USA</span></h5>
            <br />
            <h5 className='text-muted fw-bold'><i className="fas fa-cube"></i> Plot Size: <span className='fw-light'>3200 sq.ft</span></h5>
            <br/>
            <p className='text-muted lh-sm'>
            The client wanted an exterior and interior design of major areas of the house like kitchen, bathrooms, master bedroom, guest bedroom/office, laundry, entry area. Also, we helped with paint choices, stone surfaces, staircase & railings' design
            </p>
          </div>
        </div>

      </Container>
    )
  }
}

DoroshenkoResidence.propTypes = {
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


  DoroshenkoResidence.defaultProps = {
  images: ([
    {
      original: `${livingRoomView1}`,
      thumbnail: `${livingRoomView1}`,
      description: "Living room View 1"
    },
    {
      original: `${livingRoomView2}`,
      thumbnail: `${livingRoomView2}`,
      description: "Living room View 2"
    },
    {
      original: `${livingRoomView3}`,
      thumbnail: `${livingRoomView3}`,
      description: "Living room View 3"
    },
    {
      original: `${kitchenView1}`,
      thumbnail: `${kitchenView1}`,
      description: "Kitchen"
    },
    {
      original: `${doroshenkoResidence}`,
      thumbnail: `${doroshenkoResidence}`,
      description: "Doroshenkos Residence"
    }
  ])
}
