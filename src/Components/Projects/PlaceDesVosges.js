import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import chambre2 from '../../assets/Projects/PlaceDesVosges/Place des Vosges_Chambre 2.jpg';
import entree1 from '../../assets/Projects/PlaceDesVosges/Place des Vosges_Entree 1.jpg';
import entree2 from '../../assets/Projects/PlaceDesVosges/Place des Vosges_Entree 2.jpg';
import salleDeBains from '../../assets/Projects/PlaceDesVosges/Place des Vosges_Salle de Bains des Invites.jpg';
import sejour2 from '../../assets/Projects/PlaceDesVosges/Place des Vosges_Sejour 2.jpg';
import sejour1 from '../../assets/Projects/PlaceDesVosges/Place des Vosges_Sejour 1.jpg';


export default class PlaceDesVosges extends Component {

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
      <Container className='pt-5'>
        <div className='pt-5 pb-5'>
          <h1 className='display-3' style={{fontWeight: "600"}}>Place des Vosges</h1>
        </div>

        <div className='pt-5 pb-5 mb-5 row'>
          <div className='col-lg-8'>
            <div>
              <ImageGallery items={images}/>
            </div>
          </div>
          <div className='col-lg-4'>
            <h5 className='text-muted fw-bold'><i className="fas fa-map-marker-alt"></i> Location: <span className='fw-light'>Paris, France</span></h5>
            <br />
            <h5 className='text-muted fw-bold'><i className="fas fa-cube"></i> Plot Size: <span className='fw-light'>70 m<sup>2</sup></span></h5>
            <br/>
            <p className='text-muted lh-sm'>
            The renovation of an apartment in the historic center of Paris. Created in collaboration with Interior Designer <b>Max Gunavan</b>. The modern space in the style of minimalism, which combines well with large, antique windows and high ceilings creating a comfortable and well-lit space. We were fighting for each centimeter working within existing tight conditions but transforming the spaces into a modern look on another hand
            </p>
          </div>
        </div>

      </Container>
    )
  }
}

PlaceDesVosges.propTypes = {
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


  PlaceDesVosges.defaultProps = {
  images: ([
    {
      original: `${chambre2}`,
      thumbnail: `${chambre2}`,
      description: "Place des Vosges Chambre 2"
    },
    {
      original: `${entree1}`,
      thumbnail: `${entree1}`,
      description: "Place des Vosges Entree 1"
    },
    {
      original: `${entree2}`,
      thumbnail: `${entree2}`,
      description: "Place des Vosges Entree 2"
    },
    {
      original: `${salleDeBains}`,
      thumbnail: `${salleDeBains}`,
      description: "Place des Vosges Salle de Bains des Invites"
    },
    {
      original: `${sejour2}`,
      thumbnail: `${sejour2}`,
      description: "Place des Vosges Sejour 2"
    },
    {
      original: `${sejour1}`,
      thumbnail: `${sejour1}`,
      description: "Place des Vosges Sejour 1"
    }
  ])
}
