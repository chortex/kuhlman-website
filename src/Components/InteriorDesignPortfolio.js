import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

import fuchs from '../assets/Portfolio/InteriorDesignPortfolio/Fuchs_View 1.jpg';
import livingRoom from '../assets/Portfolio/InteriorDesignPortfolio/Living room_View 2.jpg';
import desVoskes from '../assets/Portfolio/InteriorDesignPortfolio/Place des Vosges_Seyour 1.jpg';
import balletHall from '../assets/Portfolio/InteriorDesignPortfolio/Ballet Hall_View 1.jpg';


export default class InteriorDesignPortfolio extends Component {
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

  InteriorDesignPortfolio.propTypes = {
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


  InteriorDesignPortfolio.defaultProps = {
  images: ([
    {
      src: `${fuchs}`,
      thumbnail: `${fuchs}`,
      thumbnailWidth: 470,
      thumbnailHeight: 390,
      caption: <a href="/fuchs">Fuchs</a>
    },
    {
      src: `${livingRoom}`,
      thumbnail: `${livingRoom}`,
      thumbnailWidth: 500,
      thumbnailHeight: 300,
      caption: <a href="/doroshenko-residence">Living room</a>
    },
    {
      src: `${desVoskes}`,
      thumbnail: `${desVoskes}`,
      thumbnailWidth: 400,
      thumbnailHeight: 270,
      caption: <a href="/place-des-vosges">Place des Vosges</a>
    },
    {
      src: `${balletHall}`,
      thumbnail: `${balletHall}`,
      thumbnailWidth: 500,
      thumbnailHeight: 280,
      caption: <a href="/ballet-hall">Ballet Hall</a>
    }
  ])
}
