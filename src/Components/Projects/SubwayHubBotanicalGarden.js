import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import botanicalGardenFacade from '../../assets/Projects/SubwayHub/BotanicalGarden/Botanical Garden Facade.jpg';
import botanicalGardenSection from '../../assets/Projects/SubwayHub/BotanicalGarden/Botanical Garden Section.jpg';
import botanicalGardenAxonometric1 from '../../assets/Projects/SubwayHub/BotanicalGarden/Botanical Garden Axonometric 1.jpg';
import botanicalGardenAxonometric2 from '../../assets/Projects/SubwayHub/BotanicalGarden/Botanical Garden Axonometric 2.jpg';
import botanicalGardenPlan from '../../assets/Projects/SubwayHub/BotanicalGarden/Botanical Garden Plan.jpg';
import botanicalGardenInterior from '../../assets/Projects/SubwayHub/BotanicalGarden/Botanical Garden Interior.jpg';




export default class SubwayHubBotanicalGarden extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: this.props.images
    };
  }


  render() {
    const images = this.state.images.map((i) => {
      i.customOverlay = (
        <div>
          <div>{i.caption}</div>
          {i.hasOwnProperty('tags') && this.setCustomTags(i)}
        </div>);
      return i;
    });

    return(
      <div className='pt-5 pb-5 mb-5 row'>
        <div className='col-lg-8 mt-5'>
          <div>
            <ImageGallery items={images}/>
          </div>
        </div>
        <div className='col-lg-4 mt-5'>
          <h2 className='text-muted display-5 fw-bold'>Botanical Garden</h2>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          Coming soon...
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubBotanicalGarden.propTypes = {
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


  SubwayHubBotanicalGarden.defaultProps = {
  images: ([
    {
      original: `${botanicalGardenFacade}`,
      thumbnail: `${botanicalGardenFacade}`,
      description: "Botanical Garden Facade"
    },
    {
      original: `${botanicalGardenSection}`,
      thumbnail: `${botanicalGardenSection}`,
      description: "Botanical Garden Section"
    },
    {
      original: `${botanicalGardenAxonometric1}`,
      thumbnail: `${botanicalGardenAxonometric1}`,
      description: "Botanical Garden Axonometric 1"
    },
    {
      original: `${botanicalGardenAxonometric2}`,
      thumbnail: `${botanicalGardenAxonometric2}`,
      description: "Botanical Garden Axonometric 2"
    },
    {
      original: `${botanicalGardenPlan}`,
      thumbnail: `${botanicalGardenPlan}`,
      description: "Botanical Garden Plan"
    },
    {
      original: `${botanicalGardenInterior}`,
      thumbnail: `${botanicalGardenInterior}`,
      description: "Botanical Garden Interior"
    }
  ])
}