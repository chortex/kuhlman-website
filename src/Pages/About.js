import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import aboutVideo from '../assets/about_video.mp4';
import teamPhoto from '../assets/teamPhoto_2.jpg';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="video-background-holder">
        <div class="video-background-overlay"></div>
        <video playsinline autoplay="true" muted loop>
          <source src={aboutVideo} type="video/mp4" />
        </video>
        <div class="video-background-content container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 className="display-1" style={{fontWeight:"600"}}>Kuhlmann Team</h1>
              <p class="display-6 lead mb-0">We provide high-quality services in BIM Modeling, Architectural Design, Interior Design, and photorealistic visualization</p>
            </div>
          </div>
        </div>
      </div>
      <Container className='row pb-5 m-auto'>
      <div className='pt-5 pe-5 col-xl-5'>
        <h1 className='display-3 text-start' style={{fontWeight: "600"}}>About us</h1>
        <div className='pt-lg-3'>
          <p className="text-muted">
            Kuhlmann - some story about kuhlmann team must be here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
          </p>
          <p className="text-muted">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
          </p>
          <div>
            <a href='/contacts' className='btn btn-secondary'>Contact us</a>
          </div>
        </div>
      </div>
      <div className='pt-5 col-xl-7'>
        <img
          src={teamPhoto}
          height='auto'
          width='100%'
          className=''
          alt='contacts'
        />
      </div>
    </Container>
      </React.Fragment>
    )
  }
}