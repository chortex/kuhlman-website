import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

import balletHole1 from '../assets/Portfolio/InteriorVisualizationPortfolio/Ballet Hall - View 1.jpg';
import spa2 from '../assets/Portfolio/InteriorVisualizationPortfolio/Spa View 2.jpg';
import cabinet2 from '../assets/Portfolio/InteriorVisualizationPortfolio/Cabinet - View 2.jpg';
import warnerMallAppartment from '../assets/Portfolio/InteriorVisualizationPortfolio/Warner Mall - Apartment.jpg';
import coffeeShop2 from '../assets/Portfolio/InteriorVisualizationPortfolio/Cofee Shop - View 2.jpg';
import warnerMallFirstFloor from '../assets/Portfolio/InteriorVisualizationPortfolio/Warner Mall - First Floor.jpg';
import warnerMallModel from '../assets/Portfolio/InteriorVisualizationPortfolio/Warner Mall - Model Room.jpg';
import livingRoom1 from '../assets/Portfolio/InteriorVisualizationPortfolio/Living room - View 1.jpg';
import kitchen1 from '../assets/Portfolio/InteriorVisualizationPortfolio/Kitchen - View 1.jpg';
import kitchen2 from '../assets/Portfolio/InteriorVisualizationPortfolio/Kitchen View 2.jpg';
import livingRoom2 from '../assets/Portfolio/InteriorVisualizationPortfolio/Living room - View 2.jpg';
import entrance from '../assets/Portfolio/InteriorVisualizationPortfolio/Entrance.jpg';
import bedroom2 from '../assets/Portfolio/InteriorVisualizationPortfolio/Bedroom - View 2.jpg';
import bedroom1 from '../assets/Portfolio/InteriorVisualizationPortfolio/Bedroom - View 1.jpg';



export default class IteriorVisualizationPortfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: this.props.images
    };
  }

  render () {
    [...document.querySelectorAll('img')].forEach(img => img.title = '')

    const images = this.state.images.map((i) => {
      i.customOverlay = (
        <div className='caption-wrapper'>
          <div>{i.caption}</div>
        </div>);
      return i;
    });

    return (
      <div 
        style={{
          display: "block",
          minHeight: "1px",
          width: "100%",
          overflow: "auto"}}
        className="portfolio-gallery"
      >
        <Gallery
          images={images}
          enableImageSelection={false}
          rowHeight={300}
          margin={5}
          lightboxWidth={1440}
        />
      </div>
    );
    }
  }

  IteriorVisualizationPortfolio.propTypes = {
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


  IteriorVisualizationPortfolio.defaultProps = {
  images: ([
    {
      src: `${balletHole1}`,
      thumbnail: `${balletHole1}`,
      thumbnailWidth: 533,
      thumbnailHeight: 300,
      caption: "Ballet Hall"
    },
    {
      src: `${spa2}`,
      thumbnail: `${spa2}`,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
      caption: "Spa"
    },
    {
      src: `${cabinet2}`,
      thumbnail: `${cabinet2}`,
      thumbnailWidth: 425,
      thumbnailHeight: 300,
      caption: "Cabinet"
    },
    {
      src: `${warnerMallAppartment}`,
      thumbnail: `${warnerMallAppartment}`,
      thumbnailWidth: 400,
      thumbnailHeight: 300,
      caption: "Warner Mall"
    },
    {
      src: `${coffeeShop2}`,
      thumbnail: `${coffeeShop2}`,
      thumbnailWidth: 800,
      thumbnailHeight: 300,
      caption: "Cofee Shop"
    },
    {
      src: `${warnerMallFirstFloor}`,
      thumbnail: `${warnerMallFirstFloor}`,
      thumbnailWidth: 520,
      thumbnailHeight: 300,
      caption: "Warner Mall"
    },
    {
      src: `${warnerMallModel}`,
      thumbnail: `${warnerMallModel}`,
      thumbnailWidth: 400,
      thumbnailHeight: 300,
      caption: "Warner Mall"
    },
    {
      src: `${livingRoom1}`,
      thumbnail: `${livingRoom1}`,
      thumbnailWidth: 530,
      thumbnailHeight: 300,
      caption: "Living room"
    },
    {
      src: `${kitchen1}`,
      thumbnail: `${kitchen1}`,
      thumbnailWidth: 530,
      thumbnailHeight: 300,
      caption: "Kitchen"
    },
    {
      src: `${kitchen2}`,
      thumbnail: `${kitchen2}`,
      thumbnailWidth: 500,
      thumbnailHeight: 300,
      caption: "Kitchen"
    },
    {
      src: `${livingRoom2}`,
      thumbnail: `${livingRoom2}`,
      thumbnailWidth: 530,
      thumbnailHeight: 300,
      caption: "Living room"
    },
    {
      src: `${entrance}`,
      thumbnail: `${entrance}`,
      thumbnailWidth: 420,
      thumbnailHeight: 300,
      caption: "Entrance"
    },
    {
      src: `${bedroom2}`,
      thumbnail: `${bedroom2}`,
      thumbnailWidth: 530,
      thumbnailHeight: 300,
      caption: "Bedroom"
    },
    {
      src: `${bedroom1}`,
      thumbnail: `${bedroom1}`,
      thumbnailWidth: 530,
      thumbnailHeight: 300,
      caption: "Bedroom"
    },
  ])
}
