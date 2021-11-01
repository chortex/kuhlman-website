import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import aboutVideo from '../assets/about_video.mp4';
import teamPhoto from '../assets/KuhlmannTeam.jpg';

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
          Kuhlmann Studio was founded in 2017 by Ostap Koroliak, who started as an independent entrepreneur in a small room in his house and grew into a company, which delivers high-quality services to clients from all around the world. Our clients are Architects, Interior Designers, Architectural, Engineering, and construction companies from the USA, Canada, UK, European Union, Denmark, Sweden, Norway, and Australia.
          </p>
          <p className="text-muted">
          In need to find a great team? Someone who is not just excellent, but also a good person you can form a dependable, life-long business relationship with. We are sure, you are going to need multiple architectural services along with your life and you can do this search once by choosing us.
          </p>
          <p>
          We work together to design, create and produce work that we are proud of.
          </p>
          <p>
          Our core values are:
          </p>
          <ul>
            <li><b>PASSION:</b> Do what you love, love what you do</li>
            <li><b>RESPONSIBILITY:</b> Act with a high sense of responsibility</li>
            <li><b>QUALITY:</b> Deliver superior quality and even more</li>
            <li><b>COLLABORATION:</b> Achieve more through friendly team and customer collaboration</li>
            <li><b>INNOVATION:</b> Challenge the traditional approach and encourage creative ideas</li>
          </ul>
          <p>
          We look forward to meeting you soon
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
          width='80%'
          className=''
          alt='contacts'
        />
      </div>
    </Container>
      </React.Fragment>
    )
  }
}