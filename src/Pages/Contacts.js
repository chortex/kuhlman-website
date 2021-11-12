import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import ContactsCover from '../assets/ContactsCover.jpg';
import { InlineWidget } from "react-calendly";

export default class Contacts extends Component {
  render() {
    return (
      <Container className='pt-5 row pb-5 m-auto'>
      <div className='pt-5 col-lg-5 d-flex justify-content-center align-items-center'>
        <div>
          <img
            src={ContactsCover}
            height='auto'
            width='100%'
            alt='contacts'
          />
        </div>
      </div>
      <div className='pt-5 col-lg-7'>
        <h1 className='display-3 text-lg-end text-start' style={{fontWeight: "600"}}>Contact us</h1>
        <div className='p-lg-5 p-3 row d-flex justify-content-around'>
          <div className="col-sm-6">
            <div className='pb-5'>
              <p className='text-secondary'><i className="fas fa-envelope-open fa-2x"></i> E-mail</p>
              <a href='mailto:ostap@kuhlmann.com.ua' className='contacts-link'>ostap@kuhlmann.com.ua</a>
            </div>
            <div className='pb-5'>
              <p className='text-secondary'><i className="fas fa-phone fa-2x"></i> Phone | WhatsApp</p>
              <a href='tel:+380953923232' className='contacts-link'>+380953923232</a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className='pb-5'>
              <p className='text-secondary'><i className="fab fa-skype fa-2x"></i> Skype</p>
              <a href='skype:o.korolyak?chat' className='contacts-link'>o.korolyak</a>
            </div>
            <div className='pb-5'>
              <p className='text-secondary'><i className="fas fa-map-marker-alt fa-2x"></i> Address</p>
              <a href='https://goo.gl/maps/SUtBJn3dGtuQoKT96' target="_blank" rel="noreferrer" className='contacts-link'>Ukraine, Lviv, Horbachevskogo St. 15</a>
            </div>
          </div>
          <hr />
          <div className='pb-3'>
            <p className='text-secondary'><i className="far fa-clock fa-2x"></i> Schedule</p>
            <p>Mon - Fri: 10 AM - 7 PM</p>
            <p>Sat - Sun: Day off</p>
          </div>
          <div>
            <a href='https://www.upwork.com/ag/kuhlmann/' target='_blank' rel="noreferrer" className='btn btn-warning'>Get in touch</a>
          </div>
        </div>
      </div>
      <h2 className='text-center pt-3'>Schedule a meeting!</h2>
      <InlineWidget url="https://calendly.com/ostap-korolyak?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=ecc552"
        styles={{
          height: "700px"
        }}
      />
    </Container>
    )
  }
}