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
          lightboxWidth={1440}
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
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "Airport"
    },
    {
      src: `${botanicalGarden}`,
      thumbnail: `${botanicalGarden}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: <a href="/subway-hub">Botanical Garden</a>
    },
    {
      src: `${discoveryGarden}`,
      thumbnail: `${discoveryGarden}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: <a href="/subway-hub">Discovery Garden</a>
    },
    {
      src: `${parkRide}`,
      thumbnail: `${parkRide}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "Park & Ride"
    },
    {
      src: `${alehNegev}`,
      thumbnail: `${alehNegev}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "Aleh Negev"
    },
    {
      src: `${subwayHub}`,
      thumbnail: `${subwayHub}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: <a href="/subway-hub">Stadium Complex</a>
    },
    {
      src: `${planetarium}`,
      thumbnail: `${planetarium}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: <a href="/subway-hub">Planetarium</a>
    },
    {
      src: `${school}`,
      thumbnail: `${school}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: <a href="/subway-hub">School</a>
    },
    {
      src: `${slokkerHomes}`,
      thumbnail: `${slokkerHomes}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: <a href="/slokker-homes">Slokker Homes</a>
    },
    {
      src: `${shop}`,
      thumbnail: `${shop}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: <a href="/subway-hub">Shop</a>
    },
    {
      src: `${beitHaedidud}`,
      thumbnail: `${beitHaedidud}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "Beit Hayedidut"
    },
    {
      src: `${baitBalev}`,
      thumbnail: `${baitBalev}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "Bait Balev"
    },
    {
      src: `${sunsetTrail}`,
      thumbnail: `${sunsetTrail}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "35 Sunset Trail"
    },
    {
      src: `${fulton}`,
      thumbnail: `${fulton}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "1118 Fulton"
    },
  ])
}
