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
        <CustomGallery
          images={images}
          enableImageSelection={false}
          rowHeight={300}
          margin={5}
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
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Fuchs",
      detailUrl: "/fuchs"
    },
    {
      src: `${livingRoom}`,
      thumbnail: `${livingRoom}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Living room",
      detailUrl: "/doroshenko-residence"
    },
    {
      src: `${desVoskes}`,
      thumbnail: `${desVoskes}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Place des Vosges",
      detailUrl: "/place-des-vosges"
    },
    {
      src: `${balletHall}`,
      thumbnail: `${balletHall}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Ballet Hall",
      detailUrl: "/ballet-hall"
    }
  ])
}


class CustomGallery extends Gallery {
  onClickImage(e) {
      var image = this.state.images[this.state.currentImage];
      window.location.href = image.detailUrl;
  }
}
