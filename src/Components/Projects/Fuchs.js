import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import fuchsView1 from '../../assets/Projects/Fuchs/Fuchs_View 1.jpg';
import fuchsView2 from '../../assets/Projects/Fuchs/Fuchs_View 3.jpg';
import fuchsView3 from '../../assets/Projects/Fuchs/Fuchs_View 3.jpg';


export default class Fuchs extends Component {

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
          <h1 className='display-3' style={{fontWeight: "600"}}>Fuchs</h1>
        </div>

        <div className='pt-5 pb-5 mb-5 row'>
          <div className='col-lg-8'>
            <div>
              <ImageGallery items={images}/>
            </div>
          </div>
          <div className='col-lg-4'>
            <h5 className='text-muted fw-bold'><i className="fas fa-map-marker-alt"></i> Location: <span className='fw-light'>New York, USA</span></h5>
            <br />
            <h5 className='text-muted fw-bold'><i className="fas fa-cube"></i> Plot Size: <span className='fw-light'>180 sq.ft</span></h5>
            <br/>
            <p className='text-muted lh-sm'>
            The client wanted his home library to breathe history. He was excited to see it in the traditional style. With the wooden ceiling and red furniture, this space started getting a perfect place to read your favorite book with a glass of good brandy. We've drawn every single millwork, so the furniture guys produced the cabinets exactly as we wanted
            </p>
          </div>
        </div>

      </Container>
    )
  }
}

Fuchs.propTypes = {
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


  Fuchs.defaultProps = {
  images: ([
    {
      original: `${fuchsView1}`,
      thumbnail: `${fuchsView1}`,
      description: "Fuchs View 1"
    },
    {
      original: `${fuchsView2}`,
      thumbnail: `${fuchsView2}`,
      description: "Fuchs View 2"
    },
    {
      original: `${fuchsView3}`,
      thumbnail: `${fuchsView3}`,
      description: "Fuchs View 3"
    }
  ])
}
