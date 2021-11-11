import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import shops3dView from '../../assets/Projects/SubwayHub/Shops/Shops 3D View.jpg';
import shop from '../../assets/Projects/SubwayHub/Shops/Shop.jpg';
import shopSection from '../../assets/Projects/SubwayHub/Shops/Shop_Section.jpg';
import shopsFacadeA from '../../assets/Projects/SubwayHub/Shops/Shops_FacadeA.jpg';
import shopsFacadeB from '../../assets/Projects/SubwayHub/Shops/Shops_FacadeB.jpg';
import shopsAxonometric from '../../assets/Projects/SubwayHub/Shops/Shops_Axonometric.jpg';
import shopsGroundLevel from '../../assets/Projects/SubwayHub/Shops/Shops_Ground Level.jpg';
import shops2ndLevel from '../../assets/Projects/SubwayHub/Shops/Shops_2nd Level.jpg';
import shops3rdLevel from '../../assets/Projects/SubwayHub/Shops/Shops_3rd Level.jpg';
import shops4thLevel from '../../assets/Projects/SubwayHub/Shops/Shops_4th Level.jpg';
import shops5thLevel from '../../assets/Projects/SubwayHub/Shops/Shops_5th Level.jpg';
import shopsPanelsAxonometric from '../../assets/Projects/SubwayHub/Shops/Shops_Panels Axonometric.jpg';
import shopsCanopyAxonometric from '../../assets/Projects/SubwayHub/Shops/Shops_Canopy Axonometric.jpg';


export default class SubwayHubShops extends Component {
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
        <div className='col-lg-8'>
        <div>
          <ImageGallery items={images} thumbnailClass={'justify-content-center'} />
        </div>
        </div>
        <div className='col-lg-4'>
          <h2 className='text-muted display-5 fw-bold'>Shops</h2>
          <p className='text-muted lh-sm'>
          The shops building has a total of 5 levels. The store is divided according to the specifics of goods and services and includes: grocery stores, industrial goods stores,entertainmentfacilities, permits and office space. Each cell has an entrance group with a vestibule and bathrooms for visitors, including bathroomsfor less mobile groups (ADA), utility rooms, inventory (depending on the type of trade). The main volume is occupied by trade racks and shop windows, where the goods are presented, as well as places for visitors (in permits, entertainment facilities and offices). The shops are equipped with all necessary technological equipment. Floor connections with escalators, stairwells and elevators.
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubShops.propTypes = {
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


  SubwayHubShops.defaultProps = {
  images: ([
    {
      original: `${shops3dView}`,
      thumbnail: `${shops3dView}`,
      description: "Shops 3D View"
    },
    {
      original: `${shop}`,
      thumbnail: `${shop}`,
      description: "Shop"
    },
    {
      original: `${shopSection}`,
      thumbnail: `${shopSection}`,
      description: "Shop Section"
    },
    {
      original: `${shopsFacadeA}`,
      thumbnail: `${shopsFacadeA}`,
      description: "Shops Facade A"
    },
    {
      original: `${shopsFacadeB}`,
      thumbnail: `${shopsFacadeB}`,
      description: "Shops Facade B"
    },
    {
      original: `${shopsAxonometric}`,
      thumbnail: `${shopsAxonometric}`,
      description: "Shops Axonometric"
    },
    {
      original: `${shopsGroundLevel}`,
      thumbnail: `${shopsGroundLevel}`,
      description: "Shops Ground Level"
    },
    {
      original: `${shops2ndLevel}`,
      thumbnail: `${shops2ndLevel}`,
      description: "Shops 2nd Level"
    },
    {
      original: `${shops3rdLevel}`,
      thumbnail: `${shops3rdLevel}`,
      description: "Shops 3rd Level"
    },
    {
      original: `${shops4thLevel}`,
      thumbnail: `${shops4thLevel}`,
      description: "Shops 4th Level"
    },
    {
      original: `${shops5thLevel}`,
      thumbnail: `${shops5thLevel}`,
      description: "Shops 5th Level"
    },
    {
      original: `${shopsPanelsAxonometric}`,
      thumbnail: `${shopsPanelsAxonometric}`,
      description: "Shops Panels Axonometric"
    },
    {
      original: `${shopsCanopyAxonometric}`,
      thumbnail: `${shopsCanopyAxonometric}`,
      description: "Shops Canopy Axonometric"
    }
  ])
}
