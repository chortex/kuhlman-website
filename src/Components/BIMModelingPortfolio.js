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
        <CustomGallery
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
      caption: "Botanical Garden",
      detailUrl: '/subway-hub'
    },
    {
      src: `${discoveryGarden}`,
      thumbnail: `${discoveryGarden}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "Discovery Garden",
      detailUrl: '/subway-hub'
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
      caption: "Subway Hub Stadium complex",
      detailUrl: '/subway-hub'
    },
    {
      src: `${planetarium}`,
      thumbnail: `${planetarium}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "Planetarium",
      detailUrl: '/subway-hub'
    },
    {
      src: `${school}`,
      thumbnail: `${school}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "School",
      detailUrl: '/subway-hub'
    },
    {
      src: `${slokkerHomes}`,
      thumbnail: `${slokkerHomes}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "Slokker Homes",
      detailUrl: '/slokker-homes'
    },
    {
      src: `${shop}`,
      thumbnail: `${shop}`,
      thumbnailWidth: 500,
      thumbnailHeight: 310,
      caption: "Shop",
      detailUrl: '/subway-hub'
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


class CustomGallery extends Gallery {
  onClickImage(e) {
      var image = this.state.images[this.state.currentImage];
      window.location.href = image.detailUrl;
  }
}
