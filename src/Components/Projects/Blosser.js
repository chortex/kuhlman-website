import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import blosserMap1 from '../../assets/Projects/Blosser/Blosser_Map 1.jpg';
import blosserMap2 from '../../assets/Projects/Blosser/Blosser_Map 2.jpg';
import blosserSitePlan from '../../assets/Projects/Blosser/Blosser_Site Plan.jpg';
import blosserStreetView from '../../assets/Projects/Blosser/Blosser_Street View.jpg';
import blosserAxonometric from '../../assets/Projects/Blosser/Blosser_Axonometric.jpg';
import blosserBuilding1 from '../../assets/Projects/Blosser/Blosser_Building 1.jpg';
import blosserBuilding2 from '../../assets/Projects/Blosser/Blosser_Building 2.jpg';
import blosserBuilding3 from '../../assets/Projects/Blosser/Blosser_Building 3.jpg';
import blosserBuilding4 from '../../assets/Projects/Blosser/Blosser_Building 4.jpg';
import blosserView1 from '../../assets/Projects/Blosser/Blosser View 1.jpg';
import blosserView2 from '../../assets/Projects/Blosser/Blosser View 2.jpg';


export default class Blosser extends Component {

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
          <h1 className='display-3' style={{fontWeight: "600"}}>Blosser</h1>
        </div>

        <div className='pt-5 pb-5 mb-5 row'>
          <div className='col-lg-8'>
            <div>
              <ImageGallery items={images}/>
            </div>
          </div>
          <div className='col-lg-4'>
            <h4 className='text-muted fw-bold'><i className="fas fa-map-marker-alt"></i> Location: <span className='fw-light'>Santa Maria, California, USA</span></h4>
            <br />
            <h4 className='text-muted fw-bold'><i className="fas fa-cube"></i> Plot Size: <span className='fw-light'>1.30 acres</span></h4>
            <br/>
            <p className='text-muted lh-sm'>
            The goal was to create a site plan to place 50 units with playgrounds and sports facilities on it as well as develop floor plans for every single unit. We have found place for 51 houses, still having some zone for sports activities and landscapes design. The challenging part of this project was, that we also needed to follow Santa Maria's downtown buildings regulations
            </p>
          </div>
        </div>

      </Container>
    )
  }
}

Blosser.propTypes = {
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


  Blosser.defaultProps = {
  images: ([
    {
      original: `${blosserMap1}`,
      thumbnail: `${blosserMap1}`,
      description: "Blosser Map 1"
    },
    {
      original: `${blosserMap2}`,
      thumbnail: `${blosserMap2}`,
      description: "Blosser Map 2"
    },
    {
      original: `${blosserSitePlan}`,
      thumbnail: `${blosserSitePlan}`,
      description: "Blosser Site Plan"
    },
    {
      original: `${blosserStreetView}`,
      thumbnail: `${blosserStreetView}`,
      description: "Blosser Street View"
    },
    {
      original: `${blosserAxonometric}`,
      thumbnail: `${blosserAxonometric}`,
      description: "Blosser Axonometric"
    },
    {
      original: `${blosserBuilding1}`,
      thumbnail: `${blosserBuilding1}`,
      description: "Blosser Building 1"
    },
    {
      original: `${blosserBuilding2}`,
      thumbnail: `${blosserBuilding2}`,
      description: "Blosser Building 2"
    },
    {
      original: `${blosserBuilding3}`,
      thumbnail: `${blosserBuilding3}`,
      description: "Blosser Building 3"
    },
    {
      original: `${blosserBuilding4}`,
      thumbnail: `${blosserBuilding4}`,
      description: "Blosser Building 4"
    },
    {
      original: `${blosserView1}`,
      thumbnail: `${blosserView1}`,
      description: "Blosser View 1"
    },
    {
      original: `${blosserView2}`,
      thumbnail: `${blosserView2}`,
      description: "Blosser View 2"
    }
  ])
}
