import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

import sunsetTrail from '../assets/Portfolio/BIMModelingPortfolio/35 Sunset Trail.jpg';
import fulton from '../assets/Portfolio/BIMModelingPortfolio/1118 Fulton.jpg';
import airport from '../assets/Portfolio/BIMModelingPortfolio/Airport.jpg';
import alehNegev from '../assets/Portfolio/BIMModelingPortfolio/Aleh Negev.jpg';
import baitBalev from '../assets/Portfolio/BIMModelingPortfolio/Bait Balev.jpg';
import beitHaedidud from '../assets/Portfolio/BIMModelingPortfolio/Beit Hayedidut.jpg';
import library from '../assets/Portfolio/BIMModelingPortfolio/National Library of Israel.jpg';
import parkRide from '../assets/Portfolio/BIMModelingPortfolio/Park & Ride.jpg';

export default class BIMPortfolio extends Component {
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

  BIMPortfolio.propTypes = {
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


  BIMPortfolio.defaultProps = {
  images: ([
    {
      src: `${airport}`,
      thumbnail: `${airport}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Airport"
    },
    {
      src: `${parkRide}`,
      thumbnail: `${parkRide}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Park & Ride"
    },
    {
      src: `${alehNegev}`,
      thumbnail: `${alehNegev}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Aleh Negev"
    },
    {
      src: `${library}`,
      thumbnail: `${library}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "National Library of Israel"
    },
    {
        src: `${fulton}`,
        thumbnail: `${fulton}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "1118 Fulton"
    },
    {
      src: `${sunsetTrail}`,
      thumbnail: `${sunsetTrail}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "35 Sunset Trail"
    },
    {
      src: `${beitHaedidud}`,
      thumbnail: `${beitHaedidud}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Beit Hayedidut"
    },
    {
      src: `${baitBalev}`,
      thumbnail: `${baitBalev}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Bait Balev"
    }
  ])
}
