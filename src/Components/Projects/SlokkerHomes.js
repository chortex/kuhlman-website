import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import slokkerHomesMap from '../../assets/Projects/SlokkerHomes/Slokker Homes Map.jpg';
import slokkerHomesAxonometry1 from '../../assets/Projects/SlokkerHomes/Slokker Homes Axonometry  1.jpg';
import slokkerHomesAxonometry2 from '../../assets/Projects/SlokkerHomes/Slokker Homes Axonometry  2.jpg';
import slokkerHomesAxonometryTop from '../../assets/Projects/SlokkerHomes/Slokker Homes Axonometry Top.jpg';
import slokkerHomesSchematicAxonometry1 from '../../assets/Projects/SlokkerHomes/Slokker Homes Schematic Axonometry  1.jpg';
import slokkerHomesSchematicAxonometry2 from '../../assets/Projects/SlokkerHomes/Slokker Homes Schematic Axonometry  2.jpg';
import slokkerHomesStreetView1 from '../../assets/Projects/SlokkerHomes/Slokker Homes Street View 1.jpg';
import slokkerHomesStreetView2 from '../../assets/Projects/SlokkerHomes/Slokker Homes Street View 2.jpg';
import slokkerHomesStreetView3 from '../../assets/Projects/SlokkerHomes/Slokker Homes Street View 3.jpg';
import slokkerHomesStreetView4 from '../../assets/Projects/SlokkerHomes/Slokker Homes Street View 4.jpg';


export default class SlokkerHomes extends Component {

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
          <h1 className='display-3' style={{fontWeight: "600"}}>Slokker Homes</h1>
        </div>

        <div className='pt-5 pb-5 mb-5 row'>
          <div className='col-lg-8'>
            <div>
              <ImageGallery items={images}/>
            </div>
          </div>
          <div className='col-lg-4'>
            <h4 className='text-muted fw-bold'><i className="fas fa-map-marker-alt"></i> Location: <span className='fw-light'>Calgary, Alberta, Canada</span></h4>
            <br />
            <h4 className='text-muted fw-bold'><i className="fas fa-cube"></i> Plot Size: <span className='fw-light'>1.80 acres</span></h4>
            <br/>
            <p className='text-muted lh-sm'>
            The client's preference was to have a North-South walkable street attached but instead of the current commercial options, he wanted to explore angle parking and retail facing a walkable street. We have developed several options and the best one is ready for your review. Enjoy
            </p>
          </div>
        </div>

      </Container>
    )
  }
}

SlokkerHomes.propTypes = {
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


  SlokkerHomes.defaultProps = {
  images: ([
    {
      original: `${slokkerHomesMap}`,
      thumbnail: `${slokkerHomesMap}`,
      description: "Slokker Homes Map"
    },
    {
      original: `${slokkerHomesAxonometry1}`,
      thumbnail: `${slokkerHomesAxonometry1}`,
      description: "Slokker Homes Axonometry 1"
    },
    {
      original: `${slokkerHomesAxonometry2}`,
      thumbnail: `${slokkerHomesAxonometry2}`,
      description: "Slokker Homes Axonometry 2"
    },
    {
      original: `${slokkerHomesAxonometryTop}`,
      thumbnail: `${slokkerHomesAxonometryTop}`,
      description: "Slokker Homes Axonometry Top"
    },
    {
      original: `${slokkerHomesSchematicAxonometry1}`,
      thumbnail: `${slokkerHomesSchematicAxonometry1}`,
      description: "Slokker Homes Schematic Axonometry 1"
    },
    {
      original: `${slokkerHomesSchematicAxonometry2}`,
      thumbnail: `${slokkerHomesSchematicAxonometry2}`,
      description: "Slokker Homes Schematic Axonometry 2"
    },
    {
      original: `${slokkerHomesStreetView1}`,
      thumbnail: `${slokkerHomesStreetView1}`,
      description: "Slokker Homes Street View 1"
    },
    {
      original: `${slokkerHomesStreetView2}`,
      thumbnail: `${slokkerHomesStreetView2}`,
      description: "Slokker Homes Street View 2"
    },
    {
      original: `${slokkerHomesStreetView3}`,
      thumbnail: `${slokkerHomesStreetView3}`,
      description: "Slokker Homes Street View 3"
    },
    {
      original: `${slokkerHomesStreetView4}`,
      thumbnail: `${slokkerHomesStreetView4}`,
      description: "Slokker Homes Street View 4"
    }
  ])
}
