import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

import blosser from '../assets/Portfolio/ArchitecturalDesignPortfolio/Blosser_Axonometric.jpg';
import gjeversrudveien from '../assets/Portfolio/ArchitecturalDesignPortfolio/74-18 Gjeversrudveien 10 - Axonometric 2.jpg';
import shops from '../assets/Portfolio/ArchitecturalDesignPortfolio/Shops 3D View.jpg';
import botanicalGarden from '../assets/Portfolio/ArchitecturalDesignPortfolio/Botanical Garden Facade.jpg';
import discoveryGarden from '../assets/Portfolio/ArchitecturalDesignPortfolio/Discovery Garden Section.jpg';
import topo from '../assets/Portfolio/ArchitecturalDesignPortfolio/Section Topo.jpg';
import park from '../assets/Portfolio/ArchitecturalDesignPortfolio/Central Park Section 2.jpg';
import theatre from '../assets/Portfolio/ArchitecturalDesignPortfolio/Theatre 3D section.jpg';
import planetarium from '../assets/Portfolio/ArchitecturalDesignPortfolio/Planetarium 1.jpg';
import golf from '../assets/Portfolio/ArchitecturalDesignPortfolio/Golf Stadium & Football Stadium.jpg';
import subway from '../assets/Portfolio/ArchitecturalDesignPortfolio/Subway Section 1.jpg';



export default class ArchitecturalDesignPortfolio extends Component {
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
          lightboxWidth={1440}
        />
      </div>
    );
    }
  }

  ArchitecturalDesignPortfolio.propTypes = {
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


  ArchitecturalDesignPortfolio.defaultProps = {
  images: ([
    {
      src: `${blosser}`,
      thumbnail: `${blosser}`,
      thumbnailWidth: 400,
      thumbnailHeight: 250,
      caption: "Blosser Axonometric",
      detailUrl: '/blosser'
    },
    {
      src: `${gjeversrudveien}`,
      thumbnail: `${gjeversrudveien}`,
      thumbnailWidth: 420,
      thumbnailHeight: 300,
      caption: "74-18 Gjeversrudveien 10 - Axonometric 2",
      detailUrl: '/gjeversrudveien'
    },
    {
      src: `${shops}`,
      thumbnail: `${shops}`,
      thumbnailWidth: 450,
      thumbnailHeight: 350,
      caption: "Shops 3DView",
      detailUrl: '/subway-hub'
    },
    {
      src: `${botanicalGarden}`,
      thumbnail: `${botanicalGarden}`,
      thumbnailWidth: 450,
      thumbnailHeight: 270,
      caption: "Botanical Garden Facade",
      detailUrl: '/subway-hub'
    },
    {
      src: `${discoveryGarden}`,
      thumbnail: `${discoveryGarden}`,
      thumbnailWidth: 400,
      thumbnailHeight: 250,
      caption: "Discovery Garden Section",
      detailUrl: '/subway-hub'
    },
    {
        src: `${topo}`,
        thumbnail: `${topo}`,
        thumbnailWidth: 395,
        thumbnailHeight: 250,
        caption: "Section Topo",
        detailUrl: '/subway-hub'
    },
    {
      src: `${park}`,
      thumbnail: `${park}`,
      thumbnailWidth: 380,
      thumbnailHeight: 250,
      caption: "Central Park Section 2",
      detailUrl: '/subway-hub'
    },
    {
      src: `${theatre}`,
      thumbnail: `${theatre}`,
      thumbnailWidth: 400,
      thumbnailHeight: 250,
      caption: "Theatre 3D section",
      detailUrl: '/subway-hub'
    },
    {
      src: `${planetarium}`,
      thumbnail: `${planetarium}`,
      thumbnailWidth: 500,
      thumbnailHeight: 490,
      caption: "Planetarium",
      detailUrl: '/subway-hub'
    },
    {
      src: `${golf}`,
      thumbnail: `${golf}`,
      thumbnailWidth: 450,
      thumbnailHeight: 310,
      caption: "Golf Stadium & Football Stadium",
      detailUrl: '/subway-hub'
    },
    {
      src: `${subway}`,
      thumbnail: `${subway}`,
      thumbnailWidth: 500,
      thumbnailHeight: 225,
      caption: "Subway Section 1",
      detailUrl: '/subway-hub'
    }
  ])
}


class CustomGallery extends Gallery {
  onClickImage(e) {
      var image = this.state.images[this.state.currentImage];
      window.location.href = image.detailUrl;
  }
}
