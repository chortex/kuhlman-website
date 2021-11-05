import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

import sunsetTrail from '../assets/Portfolio/BIMModelingPortfolio/35 Sunset Trail.jpg';
import fulton from '../assets/Portfolio/BIMModelingPortfolio/1118 Fulton.jpg';
import airport from '../assets/Portfolio/BIMModelingPortfolio/Airport.jpg';
import alehNegev from '../assets/Portfolio/BIMModelingPortfolio/Aleh Negev.jpg';
import baitBalev from '../assets/Portfolio/BIMModelingPortfolio/Bait Balev.jpg';
import beitHaedidud from '../assets/Portfolio/BIMModelingPortfolio/Beit Hayedidut.jpg';
import parkRide from '../assets/Portfolio/BIMModelingPortfolio/Park & Ride.jpg';
import botanicalGarden from '../assets/Portfolio/BIMModelingPortfolio/Botanical Garden.jpg';
import discoveryGarden from '../assets/Portfolio/BIMModelingPortfolio/Discovery Garden.jpg';
import planetarium from '../assets/Portfolio/BIMModelingPortfolio/Planetarium.jpg';
import school from '../assets/Portfolio/BIMModelingPortfolio/School.jpg';
import shop from '../assets/Portfolio/BIMModelingPortfolio/Shop.jpg';
import slokkerHomes from '../assets/Portfolio/BIMModelingPortfolio/Slokker Homes.jpg';
import subwayHub from '../assets/Portfolio/BIMModelingPortfolio/Subway Hub Stadium complex.jpg';

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
          minHeight: "100%",
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
      src: `${botanicalGarden}`,
      thumbnail: `${botanicalGarden}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Botanical Garden"
    },
    {
      src: `${discoveryGarden}`,
      thumbnail: `${discoveryGarden}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Discovery Garden"
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
      src: `${subwayHub}`,
      thumbnail: `${subwayHub}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Subway Hub Stadium complex"
    },
    {
      src: `${planetarium}`,
      thumbnail: `${planetarium}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Planetarium"
    },
    {
      src: `${school}`,
      thumbnail: `${school}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "School"
    },
    {
      src: `${slokkerHomes}`,
      thumbnail: `${slokkerHomes}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Slokker Homes"
    },
    {
      src: `${shop}`,
      thumbnail: `${shop}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Shop"
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
    },
    {
      src: `${sunsetTrail}`,
      thumbnail: `${sunsetTrail}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "35 Sunset Trail"
    },
    {
      src: `${fulton}`,
      thumbnail: `${fulton}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "1118 Fulton"
    },
  ])
}
