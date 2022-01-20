import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import theatre3dSection from '../../assets/Projects/SubwayHub/Theatre/Theatre 3D section.jpg';
import theatreAxonometry from '../../assets/Projects/SubwayHub/Theatre/Theatre Axonometry.jpg';
import theatreLevel1 from '../../assets/Projects/SubwayHub/Theatre/Theatre Level 1.jpg';
import theatreLevel2 from '../../assets/Projects/SubwayHub/Theatre/Theatre Level 2.jpg';
import theatreLevel3 from '../../assets/Projects/SubwayHub/Theatre/Theatre Level 3.jpg';
import theatreLevel4 from '../../assets/Projects/SubwayHub/Theatre/Theatre Level 4.jpg';
import theatreLevel5 from '../../assets/Projects/SubwayHub/Theatre/Theatre Level 5.jpg';
import theatreLevel6 from '../../assets/Projects/SubwayHub/Theatre/Theatre Level 6 Dome.jpg';
import theatrePlus0 from '../../assets/Projects/SubwayHub/Theatre/Theater+0.000.jpg';
import theatrePlus3 from '../../assets/Projects/SubwayHub/Theatre/Theater+3.000.jpg';
import theatrePlus6 from '../../assets/Projects/SubwayHub/Theatre/Theater+6.000.jpg';
import theatrePlus9 from '../../assets/Projects/SubwayHub/Theatre/Theater+9.000.jpg';
import theatrePlus13 from '../../assets/Projects/SubwayHub/Theatre/Theater+13.000.jpg';





export default class SubwayHubTheatre extends Component {
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
            <ImageGallery items={images}/>
          </div>
        </div>
        <div className='col-lg-4'>
          <h2 className='text-muted display-5 fw-bold'>Theatre</h2>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          Located in the northern part of the complex and occupies levels B2 and B1. The roundshape of the theater in plan is due to the shape of the site and relief. At the entrance to thetheater designed a large lobby with ticket offices, wardrobes, outerwear, places for posters. Thelobby is designed as an atrium, thevolume of which is used as a public space with areas of cafes, communication and discussion of what is seen in the theater. Behind the scenes, the space is usedas ancillary and auxiliary rooms for actors: rehearsal halls, costume rooms, dressing rooms, singingand dancing halls, etc.
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubTheatre.propTypes = {
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


  SubwayHubTheatre.defaultProps = {
  images: ([
    {
      original: `${theatre3dSection}`,
      thumbnail: `${theatre3dSection}`,
      description: "Theatre 3D section"
    },
    {
      original: `${theatreAxonometry}`,
      thumbnail: `${theatreAxonometry}`,
      description: "Theatre Axonometry"
    },
    {
      original: `${theatreLevel1}`,
      thumbnail: `${theatreLevel1}`,
      description: "Theatre Level 1"
    },
    {
      original: `${theatreLevel2}`,
      thumbnail: `${theatreLevel2}`,
      description: "Theatre Level 2"
    },
    {
      original: `${theatreLevel3}`,
      thumbnail: `${theatreLevel3}`,
      description: "Theatre Level 3"
    },
    {
      original: `${theatreLevel4}`,
      thumbnail: `${theatreLevel4}`,
      description: "Theatre Level 4"
    },
    {
      original: `${theatreLevel5}`,
      thumbnail: `${theatreLevel5}`,
      description: "Theatre Level 5"
    },
    {
      original: `${theatreLevel6}`,
      thumbnail: `${theatreLevel6}`,
      description: "Theatre Level 6 Dome"
    },
    {
      original: `${theatrePlus0}`,
      thumbnail: `${theatrePlus0}`,
      description: "Theatre +0.000"
    },
    {
      original: `${theatrePlus3}`,
      thumbnail: `${theatrePlus3}`,
      description: "Theatre +3.000"
    },
    {
      original: `${theatrePlus6}`,
      thumbnail: `${theatrePlus6}`,
      description: "Theatre +6.000"
    },
    {
      original: `${theatrePlus9}`,
      thumbnail: `${theatrePlus9}`,
      description: "Theatre +9.000"
    },
    {
      original: `${theatrePlus13}`,
      thumbnail: `${theatrePlus13}`,
      description: "Theatre +13.000"
    }
  ])
}