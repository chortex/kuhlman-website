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
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Blosser Axonometric"
    },
    {
      src: `${gjeversrudveien}`,
      thumbnail: `${gjeversrudveien}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "74-18 Gjeversrudveien 10 - Axonometric 2"
    },
    {
      src: `${shops}`,
      thumbnail: `${shops}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Shops 3DView"
    },
    {
      src: `${botanicalGarden}`,
      thumbnail: `${botanicalGarden}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Botanical Garden Facade"
    },
    {
      src: `${discoveryGarden}`,
      thumbnail: `${discoveryGarden}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Discovery Garden Section"
    },
    {
        src: `${topo}`,
        thumbnail: `${topo}`,
        thumbnailWidth: "auto",
        thumbnailHeight: "auto",
        caption: "Section Topo"
    },
    {
      src: `${park}`,
      thumbnail: `${park}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Central Park Section 2"
    },
    {
      src: `${theatre}`,
      thumbnail: `${theatre}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Theatre 3D section"
    },
    {
      src: `${planetarium}`,
      thumbnail: `${planetarium}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Planetarium"
    },
    {
      src: `${golf}`,
      thumbnail: `${golf}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Golf Stadium & Football Stadium"
    },
    {
      src: `${subway}`,
      thumbnail: `${subway}`,
      thumbnailWidth: "auto",
      thumbnailHeight: "auto",
      caption: "Subway Section 1"
    }
  ])
}
