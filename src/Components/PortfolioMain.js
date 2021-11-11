import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

import mountHope from '../assets/Portfolio/PortfolioHomePage/2 Mount Hope.jpg';
import sunsetTrail from '../assets/Portfolio/PortfolioHomePage/35 Sunset Trail.jpg';
import airport from '../assets/Portfolio/PortfolioHomePage/Airport.jpg';
import blosser from '../assets/Portfolio/PortfolioHomePage/Blosser.jpg';
import kitchen from '../assets/Portfolio/PortfolioHomePage/Kitchen.jpg';
import livingRoom from '../assets/Portfolio/PortfolioHomePage/Living room.jpg';
import napa from '../assets/Portfolio/PortfolioHomePage/Napa.jpg';
import parkRide from '../assets/Portfolio/PortfolioHomePage/Park & Ride.jpg';
import subwayHub from '../assets/Portfolio/PortfolioHomePage/Subway Hub.jpg';
import warnerMall from '../assets/Portfolio/PortfolioHomePage/Warner Mall.jpg';

class PortfolioMain extends Component {
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
      <Container className='pt-5'>
        <div className='pt-5 pb-5'>
          <h1 className='display-3 text-end' style={{fontWeight: "600"}}>Portfolio</h1>
        </div>
          <div style={{
              display: "block",
              minHeight: "1px",
              width: "100%",
              overflow: "auto"}}
            className="portfolio-gallery"
            >
          <CustomGallery
            images={images}
            enableImageSelection={false}
            rowHeight={300}
            margin={5}
          />
        </div>
      </Container>
    );
    }
  }

  PortfolioMain.propTypes = {
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

  PortfolioMain.defaultProps = {
  images: ([
    {
        src: `${mountHope}`,
        thumbnail: `${mountHope}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "2 Mount Hope"
    },
    {
        src: `${subwayHub}`,
        thumbnail: `${subwayHub}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "Subway Hub",
        detailUrl: '/subway-hub'
    },
    {
        src: `${warnerMall}`,
        thumbnail: `${warnerMall}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "Warner Mall"
    },
    
    {
        src: `${airport}`,
        thumbnail: `${airport}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "Airport"
    },
    {
        src: `${kitchen}`,
        thumbnail: `${kitchen}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "Kitchen"
    },
    {
        src: `${blosser}`,
        thumbnail: `${blosser}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "Blosser"
    },
    {
        src: `${livingRoom}`,
        thumbnail: `${livingRoom}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "Living room"
    },
    {
        src: `${napa}`,
        thumbnail: `${napa}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "Napa"
    },
    {
        src: `${sunsetTrail}`,
        thumbnail: `${sunsetTrail}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "35 Sunset Trail"
    },
    {
        src: `${parkRide}`,
        thumbnail: `${parkRide}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "Park & Ride"
    }
  ])
}

class CustomGallery extends Gallery {
  onClickImage(e) {
      var image = this.state.images[this.state.currentImage];
      window.location.href = image.detailUrl;
  }
}


export default PortfolioMain