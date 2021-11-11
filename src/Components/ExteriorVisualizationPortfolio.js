import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

import napa3 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Napa Residence_View 3.jpg';
import parkAndRideTop from '../assets/Portfolio/ExteriorVisualizationPortfolio/Park & Ride_Top View.jpg';
import busStation4 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Bus Station_View 4.jpg';
import residence from '../assets/Portfolio/ExteriorVisualizationPortfolio/Residence.jpg';
import busStation3 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Bus Station_View 3.jpg';
import busStation1 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Bus Station_View 1.jpg';
import residence1 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Napa Residence_View 1.jpg';
import airport1 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Airport_View 1.jpg';
import heisHaus1 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Heise Haus_Exterior 1.jpg';
import heisHotel from '../assets/Portfolio/ExteriorVisualizationPortfolio/Heise Haus - Hotel.jpg';
import heisHausVillage from '../assets/Portfolio/ExteriorVisualizationPortfolio/Heise Haus - Village.jpg';
import napa2 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Napa Residence_View 2.jpg';
import airport2 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Airport_View 2.jpg';
import mountHope2 from '../assets/Portfolio/ExteriorVisualizationPortfolio/2 Mount Hope.jpg';
import parkAndRideSection from '../assets/Portfolio/ExteriorVisualizationPortfolio/Park & Ride_Section.jpg';
import napa4 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Napa Residence_View 4.jpg';
import heisHausChristmas from '../assets/Portfolio/ExteriorVisualizationPortfolio/Heise Haus - Christmas.jpg';
import parkAndRide from '../assets/Portfolio/ExteriorVisualizationPortfolio/Park & Ride.jpg';
import busStation2 from '../assets/Portfolio/ExteriorVisualizationPortfolio/Bus Station_View 2.jpg';


export default class ExteriorVisualizationPortfolio extends Component {
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

  ExteriorVisualizationPortfolio.propTypes = {
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


  ExteriorVisualizationPortfolio.defaultProps = {
  images: ([
    {
      src: `${napa3}`,
      thumbnail: `${napa3}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Napa Residence"
    },
    {
      src: `${parkAndRideTop}`,
      thumbnail: `${parkAndRideTop}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Park & Ride"
    },
    {
      src: `${busStation4}`,
      thumbnail: `${busStation4}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Bus Station"
    },
    {
      src: `${residence}`,
      thumbnail: `${residence}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Residence"
    },
    {
      src: `${busStation3}`,
      thumbnail: `${busStation3}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Bus Station"
    },
    {
      src: `${busStation1}`,
      thumbnail: `${busStation1}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Bus Station"
    },
    {
      src: `${residence1}`,
      thumbnail: `${residence1}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Napa Residence"
    },
    {
      src: `${airport1}`,
      thumbnail: `${airport1}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Airport"
    },
    {
      src: `${heisHaus1}`,
      thumbnail: `${heisHaus1}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Heise Haus"
    },
    {
      src: `${heisHotel}`,
      thumbnail: `${heisHotel}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Heise Haus"
    },
    {
      src: `${heisHausVillage}`,
      thumbnail: `${heisHausVillage}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Heise Haus"
    },
    {
      src: `${napa2}`,
      thumbnail: `${napa2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Napa Residence"
    },
    {
      src: `${airport2}`,
      thumbnail: `${airport2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Airport"
    },
    {
      src: `${mountHope2}`,
      thumbnail: `${mountHope2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "2 Mount Hope"
    },
    {
      src: `${parkAndRideSection}`,
      thumbnail: `${parkAndRideSection}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Park & Ride"
    },
    {
      src: `${napa4}`,
      thumbnail: `${napa4}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Napa Residence"
    },
    {
      src: `${heisHausChristmas}`,
      thumbnail: `${heisHausChristmas}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Heise Haus"
    },
    {
      src: `${parkAndRide}`,
      thumbnail: `${parkAndRide}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Park & Ride"
    },
    {
      src: `${busStation2}`,
      thumbnail: `${busStation2}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Bus Station"
    }
  ])
}
