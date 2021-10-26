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

export default class PortfolioMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: this.props.images
    };
  }

  setCustomTags (i) {
    return (
      i.tags.map((t) => {
        return (<div
          key={t.value}
          style={customTagStyle}>
          {t.title}
          </div>);
      })
    );
  }

  render () {
    const images = this.state.images.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
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
            overflow: "auto"}}>
          <Gallery
            images={images}
            enableImageSelection={false}
            rowHeight={333}
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

  const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "740px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%"
  };

  const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px"
  };

  PortfolioMain.defaultProps = {
  images: ([
    {
        src: `${mountHope}`,
        thumbnail: `${mountHope}`,
        thumbnailWidth: "100%",
        thumbnailHeight: "auto",
        caption: "2 Mount Hope"
    },
    {
        src: `${subwayHub}`,
        thumbnail: `${subwayHub}`,
        thumbnailWidth: "100%",
        thumbnailHeight: "auto",
        caption: "Subway Hub"
    },
    {
        src: `${warnerMall}`,
        thumbnail: `${warnerMall}`,
        thumbnailWidth: "100%",
        thumbnailHeight: "auto",
        caption: "Warner Mall"
    },
    {
        src: `${airport}`,
        thumbnail: `${airport}`,
        thumbnailWidth: "100%",
        thumbnailHeight: "auto",
        caption: "Airport"
    },
    {
        src: `${kitchen}`,
        thumbnail: `${kitchen}`,
        thumbnailWidth: "100%",
        thumbnailHeight: "auto",
        caption: "Kitchen"
    },
    {
        src: `${blosser}`,
        thumbnail: `${blosser}`,
        thumbnailWidth: "100%",
        thumbnailHeight: "auto",
        caption: "Blosser"
    },
    {
        src: `${livingRoom}`,
        thumbnail: `${livingRoom}`,
        thumbnailWidth: "100%",
        thumbnailHeight: "auto",
        caption: "Living room"
    },
    {
        src: `${napa}`,
        thumbnail: `${napa}`,
        thumbnailWidth: "100%",
        thumbnailHeight: "auto",
        caption: "Napa"
    },
    {
        src: `${sunsetTrail}`,
        thumbnail: `${sunsetTrail}`,
        thumbnailWidth: 500,
        thumbnailHeight: 350,
        caption: "35 Sunset Trail"
    },
    {
        src: `${parkRide}`,
        thumbnail: `${parkRide}`,
        thumbnailWidth: "100%",
        thumbnailHeight: "auto",
        caption: "Park & Ride"
    }
  ])
}