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
    [...document.querySelectorAll('img')].forEach(img => img.title = '')

    const images = this.state.images.map((i) => {
      i.customOverlay = (
        <div className='caption-wrapper'>
          <div>{i.caption}</div>
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
          <Gallery
            images={images}
            enableImageSelection={false}
            rowHeight={300}
            lightboxWidth={1440}
            margin={5}
          />
        </div>
        <div className='pt-3'>
          <a href='/portfolio' className='go-to-portfolio-btn'>Go to Portfolio <i class="fas fa-arrow-right"></i></a>
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
        thumbnailWidth: 400,
        thumbnailHeight: 400,
        caption: "2 Mount Hope"
    },
    {
        src: `${subwayHub}`,
        thumbnail: `${subwayHub}`,
        thumbnailWidth: 400,
        thumbnailHeight: 250,
        caption: <a href="/subway-hub">Subway Hub</a>
    },
    {
        src: `${warnerMall}`,
        thumbnail: `${warnerMall}`,
        thumbnailWidth: 400,
        thumbnailHeight: 375,
        caption: "Warner Mall"
    },
    
    {
        src: `${airport}`,
        thumbnail: `${airport}`,
        thumbnailWidth: 400,
        thumbnailHeight: 450,
        caption: "Airport"
    },
    {
        src: `${kitchen}`,
        thumbnail: `${kitchen}`,
        thumbnailWidth: 320,
        thumbnailHeight: 300,
        caption: <a href="/place-des-vosges">Kitchen</a>
    },
    {
        src: `${blosser}`,
        thumbnail: `${blosser}`,
        thumbnailWidth: 520,
        thumbnailHeight: 350,
        caption: <a href="/blosser">Blosser</a>
    },
    {
        src: `${livingRoom}`,
        thumbnail: `${livingRoom}`,
        thumbnailWidth: 550,
        thumbnailHeight: 370,
        caption: <a href="/doroshenko-residence">Living room</a>
    },
    {
        src: `${napa}`,
        thumbnail: `${napa}`,
        thumbnailWidth: 550,
        thumbnailHeight: 300,
        caption: "Napa"
    },
    {
        src: `${sunsetTrail}`,
        thumbnail: `${sunsetTrail}`,
        thumbnailWidth: 520,
        thumbnailHeight: 300,
        caption: "35 Sunset Trail"
    },
    {
        src: `${parkRide}`,
        thumbnail: `${parkRide}`,
        thumbnailWidth: 520,
        thumbnailHeight: 300,
        caption: "Park & Ride"
    }
  ])
}


export default PortfolioMain