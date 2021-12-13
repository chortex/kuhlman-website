import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import gjeversrudveienMap from '../../assets/Projects/Gjeversrudveien/74-18 Gjeversrudveien 10 - Map.jpg';
import gjeversrudveienAxonometric1 from '../../assets/Projects/Gjeversrudveien/74-18 Gjeversrudveien 10 - Axonometric 1.jpg';
import gjeversrudveienAxonometric2 from '../../assets/Projects/Gjeversrudveien/74-18 Gjeversrudveien 10 - Axonometric 2.jpg';
import gjeversrudveienView1 from '../../assets/Projects/Gjeversrudveien/74-18 Gjeversrudveien 10 - Street VIew 1.jpg';
import gjeversrudveienView2 from '../../assets/Projects/Gjeversrudveien/74-18 Gjeversrudveien 10 - Street VIew 2.jpg';
import gjeversrudveienView3 from '../../assets/Projects/Gjeversrudveien/74-18 Gjeversrudveien 10 - Street VIew 3.jpg';


export default class Gjeversrudveien extends Component {

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
          <h1 className='display-3' style={{fontWeight: "600"}}>Gjeversrudveien</h1>
        </div>

        <div className='pt-5 pb-5 mb-5 row'>
          <div className='col-lg-8'>
            <div>
              <ImageGallery items={images}/>
            </div>
          </div>
          <div className='col-lg-4'>
            <h5 className='text-muted fw-bold'><i className="fas fa-map-marker-alt"></i> Location: <span className='fw-light'>Ytre Enebakk, Norway</span></h5>
            <br />
            <h5 className='text-muted fw-bold'><i className="fas fa-cube"></i> Plot Size: <span className='fw-light'>0.74 acres</span></h5>
            <br/>
            <p className='text-muted lh-sm'>
            The idea of these houses is to use single apartments modules, which are joined together and create a fully functional residential building. Developed in collaboration with <b>Sirkel & Mall</b> Architectural company
            </p>
          </div>
        </div>

      </Container>
    )
  }
}

Gjeversrudveien.propTypes = {
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


  Gjeversrudveien.defaultProps = {
  images: ([
    {
      original: `${gjeversrudveienMap}`,
      thumbnail: `${gjeversrudveienMap}`,
      description: "74-18 Gjeversrudveien 10 - Map"
    },
    {
      original: `${gjeversrudveienAxonometric1}`,
      thumbnail: `${gjeversrudveienAxonometric1}`,
      description: "74-18 Gjeversrudveien 10 - Axonometric 1"
    },
    {
      original: `${gjeversrudveienAxonometric2}`,
      thumbnail: `${gjeversrudveienAxonometric2}`,
      description: "74-18 Gjeversrudveien 10 - Axonometric 2"
    },
    {
      original: `${gjeversrudveienView1}`,
      thumbnail: `${gjeversrudveienView1}`,
      description: "74-18 Gjeversrudveien 10 - Street VIew 1"
    },
    {
      original: `${gjeversrudveienView2}`,
      thumbnail: `${gjeversrudveienView2}`,
      description: "74-18 Gjeversrudveien 10 - Street VIew 2"
    },
    {
      original: `${gjeversrudveienView3}`,
      thumbnail: `${gjeversrudveienView3}`,
      description: "74-18 Gjeversrudveien 10 - Street VIew 3"
    }
  ])
}
