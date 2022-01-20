import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import sectionTopo from '../../assets/Projects/SubwayHub/School/Section Topo.jpg';
import schoolAxonometry from '../../assets/Projects/SubwayHub/School/School Axonometry.jpg';
import level1 from '../../assets/Projects/SubwayHub/School/Level 1.jpg';
import level2 from '../../assets/Projects/SubwayHub/School/Level 2.jpg';
import level3 from '../../assets/Projects/SubwayHub/School/Level 3.jpg';
import level4 from '../../assets/Projects/SubwayHub/School/Level 4.jpg';
import levelRoof from '../../assets/Projects/SubwayHub/School/Level Roof.jpg';
import schoolPlanPlus0 from '../../assets/Projects/SubwayHub/School/School Plan +0.000.jpg';
import schoolPlanPlus6 from '../../assets/Projects/SubwayHub/School/School Plan +6.000.jpg';
import schoolPlanPlus10and300 from '../../assets/Projects/SubwayHub/School/School Plan +10.300.jpg';
import schoolPlanPlus14and200 from '../../assets/Projects/SubwayHub/School/School Plan +14.200.jpg';
import schoolPlanPlus18and300 from '../../assets/Projects/SubwayHub/School/School Plan +18.300.jpg';
import schoolSection from '../../assets/Projects/SubwayHub/School/School Section.jpg';




export default class SubwayHubSchool extends Component {
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
          <h2 className='text-muted display-5 fw-bold'>School</h2>
          <p className='text-muted lh-sm' style={{textIndent: "10px"}}>
          Planned in the north-western part ofthe site-is a multi-level building. The plan is solved in the form of a torus-with a courtyard forrecreation, learningabout nature, and along the perimeter are educational facilities. The planningis decided in such a way that all classes are oriented with windows to the courtyard and in front ofthem there is a recreation in the form of galleries and a space for recreation and leisure ofstudents. The garden is located on the lowest level-but it has direct exits to the courtyard. The school is located at higher levels and has access to open galleries
          </p>
        </div>
      </div>
    )
  }
}

SubwayHubSchool.propTypes = {
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


  SubwayHubSchool.defaultProps = {
  images: ([
    {
      original: `${sectionTopo}`,
      thumbnail: `${sectionTopo}`,
      description: "Section Topo"
    },
    {
      original: `${schoolAxonometry}`,
      thumbnail: `${schoolAxonometry}`,
      description: "School Axonometry"
    },
    {
      original: `${level1}`,
      thumbnail: `${level1}`,
      description: "Level 1"
    },
    {
      original: `${level2}`,
      thumbnail: `${level2}`,
      description: "Level 2"
    },
    {
      original: `${level3}`,
      thumbnail: `${level3}`,
      description: "Level 3"
    },
    {
      original: `${level4}`,
      thumbnail: `${level4}`,
      description: "Level 4"
    },
    {
      original: `${levelRoof}`,
      thumbnail: `${levelRoof}`,
      description: "Level Roof"
    },
    {
      original: `${schoolPlanPlus0}`,
      thumbnail: `${schoolPlanPlus0}`,
      description: "School Plan +0.000"
    },
    {
      original: `${schoolPlanPlus6}`,
      thumbnail: `${schoolPlanPlus6}`,
      description: "School Plan +6.000"
    },
    {
      original: `${schoolPlanPlus10and300}`,
      thumbnail: `${schoolPlanPlus10and300}`,
      description: "School Plan +10.300"
    },
    {
      original: `${schoolPlanPlus14and200}`,
      thumbnail: `${schoolPlanPlus14and200}`,
      description: "School Plan +14.200"
    },
    {
      original: `${schoolPlanPlus18and300}`,
      thumbnail: `${schoolPlanPlus18and300}`,
      description: "School Plan +18.300"
    },
    {
      original: `${schoolSection}`,
      thumbnail: `${schoolSection}`,
      description: "School Section"
    }
  ])
}