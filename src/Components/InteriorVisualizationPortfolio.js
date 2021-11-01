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
    const images = this.state.images.map((i) => {
      i.customOverlay = (
        <div>
          <div>{i.caption}</div>
          {i.hasOwnProperty('tags') && this.setCustomTags(i)}
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
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${spa2}`,
      thumbnail: `${spa2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${cabinet2}`,
      thumbnail: `${cabinet2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${warnerMallAppartment}`,
      thumbnail: `${warnerMallAppartment}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${coffeeShop2}`,
      thumbnail: `${coffeeShop2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${warnerMallFirstFloor}`,
      thumbnail: `${warnerMallFirstFloor}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${warnerMallModel}`,
      thumbnail: `${warnerMallModel}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${livingRoom1}`,
      thumbnail: `${livingRoom1}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${kitchen1}`,
      thumbnail: `${kitchen1}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${kitchen2}`,
      thumbnail: `${kitchen2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${livingRoom2}`,
      thumbnail: `${livingRoom2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${entrance}`,
      thumbnail: `${entrance}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${bedroom2}`,
      thumbnail: `${bedroom2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
    {
      src: `${bedroom1}`,
      thumbnail: `${bedroom1}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: ""
    },
  ])
}
