import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import ContactsCover from '../assets/ContactsCover.jpg';

export default class Contacts extends Component {
  render() {
    return (
      <Container className='pt-5 row pb-5 m-auto'>
      <div className='pt-5 col-lg-6'>
        <img
          src={ContactsCover}
          height='auto'
          width='100%'
          className=''
          alt='contacts'
        />
      </div>
      <div className='pt-5 col-lg-6'>
        <h1 className='display-3 text-lg-end text-start' style={{fontWeight: "600"}}>Contact us</h1>
        <div className='p-lg-5 p-3'>
          <div className='pb-5'>
            <p className='text-secondary'><i class="fas fa-envelope-open fa-2x"></i> E-mail</p>
            <a href='mailto:ostap@kuhlmann.com.ua' className='contacts-link'>ostap@kuhlmann.com.ua</a>
          </div>
          <div className='pb-5'>
            <p className='text-secondary'><i class="fas fa-phone fa-2x"></i> Phone | WatsApp</p>
            <a href='tel:+380953923232' className='contacts-link'>+380953923232</a>
          </div>
          <div>
            <a href='https://www.linkedin.com/company/kuhlmannteam/' target='_blank' rel="noreferrer" className='btn btn-warning'>Get in touch</a>
          </div>
        </div>
      </div>
    </Container>
    )
  }
}