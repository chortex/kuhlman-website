import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/HeaderLogo.svg';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Main from '../Pages/Main';
import Portfolio from '../Pages/Portfolio';
import Services from '../Pages/Services';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import PrivacyPolicy from '../Pages/PrivacyPolicy';




export default class Header extends Component {
  state = {
    bg: "transparent"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 20) {
      this.setState({ bg: "white"});
    } else {
      this.setState({ bg: "transparent"});
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <>
      <Router>
        <Navbar bg={this.state.bg} expand="md" variant={this.state.variant} fixed="top" className='shadow-sm p-0'>
          <Container>
            <Navbar.Brand href='/' className='d-flex align-items-center '>
              <img
                src={logo}
                height='72'
                width='auto'
                className='d-inline-block align-top logo-image pe-3'
                alt='Logo'
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='d-flex align-items-center ms-auto'>
                <Nav.Link as={NavLink} exact to='/' className="p-4 nav-link"> Home </Nav.Link>
                <Nav.Link as={NavLink} to='/portfolio' className="p-4"> Portfolio </Nav.Link>
                <Nav.Link as={NavLink} to='/services' className="p-4"> Services </Nav.Link>
                <Nav.Link as={NavLink} to='/about' className="p-4"> About </Nav.Link>
                <Nav.Link as={NavLink} to='/contacts' className="p-4"> Contacts </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
        </Switch>
      </Router>
      </>
    )
  }
}
