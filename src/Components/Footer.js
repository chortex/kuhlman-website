import React, { Component } from 'react';
import { Container , Navbar, Nav } from 'react-bootstrap';
import logoFooter from '../assets/FooterLogo.svg';




export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='bg-secondary'>
          <hr />
          <Container className='pb-3 d-flex justify-content-between m-auto align-items-center row p-0'>
            <div className='col-md-4 p-4 p-md-0 d-flex justify-content-center justify-content-md-start'>
              <a href='https://www.linkedin.com/company/kuhlmannstudio' target='_blank' rel="noreferrer" className='footer-social'><i className="fab fa-linkedin fa-2x"></i></a>
              <a href='https://www.instagram.com/kuhlmannstudio/' target='_blank' rel="noreferrer" className='footer-social'><i className="fab fa-instagram-square fa-2x"></i></a>
              <a href='https://www.behance.net/kuhlmannstudio' target='_blank' rel="noreferrer" className='footer-social'><i className="fab fa-behance-square fa-2x"></i></a>
              <a href='https://www.facebook.com/kuhlmannstudio' target='_blank' rel="noreferrer" className='footer-social'><i className="fab fa-facebook-square fa-2x"></i></a>
              <a href='https://vimeo.com/kuhlmann' target='_blank' rel="noreferrer" className='footer-social'><i className="fab fa-vimeo fa-2x"></i></a>
            </div>
            <div className='col-md-4 d-flex p-4 p-md-0'>
              <Nav.Link href='/privacy-policy' className='text-secondary p-0 m-auto privacy-policy-link'> Privacy policy </Nav.Link>
            </div>
            <div className='col-md-4 d-lg-flex justify-content-end d-none'>
              <Navbar.Brand href='/'>
                <img
                src={logoFooter}
                height='78'
                width='auto'
                className='d-inline-block align-top logo-image'
                alt='Logo'
                />
              </Navbar.Brand>
            </div>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}