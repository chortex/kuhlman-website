import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoLight from '../assets/HeaderLogo.svg';
import logoDark from '../assets/HeaderLogoDark.svg';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Main from '../Pages/Main';
import Portfolio from '../Pages/Portfolio';
import Services from '../Pages/Services';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import NoMatch from '../Components/NoMatch';
import RouterScrollTop from '../Components/RouterScrollTop';
import SubwayHub from '../Components/Projects/SubwayHub';
import Gjeversrudveien from '../Components/Projects/Gjeversrudveien';
import Blosser from '../Components/Projects/Blosser';
import SlokkerHomes from '../Components/Projects/SlokkerHomes';
import DoroshenkoResidence from '../Components/Projects/DoroshenkoResidence';
import PlaceDesVosges from '../Components/Projects/PlaceDesVosges';
import Fuchs from '../Components/Projects/Fuchs';
import BalletHall from '../Components/Projects/BalletHall';




export default class Header extends Component {
  state = {
    bg: "transparent",
    logo: logoDark
  };

  listenScrollEvent = e => {
    if (window.scrollY > 20) {
      this.setState({ bg: "white", logo: logoLight});
    } else {
      this.setState({ bg: "transparent", logo: logoDark});
    }
  };

  changeBg = e => {
    this.setState({ bg: "white", logo: logoLight})
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <>
      <Router>
        <RouterScrollTop />
        <Navbar bg={this.state.bg} expand="md" fixed="top" className='shadow-sm p-0 navbar'>
          <Container>
            <Navbar.Brand href='/' className='d-flex align-items-center '>
              <img
                src={this.state.logo}
                height='72'
                width='auto'
                className='d-inline-block align-top logo-image pe-3'
                alt='Logo'
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={this.changeBg} />
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
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
          <Route path={process.env.PUBLIC_URL + '/portfolio'} component={Portfolio} />
          <Route path={process.env.PUBLIC_URL + '/services'} component={Services} />
          <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
          <Route path={process.env.PUBLIC_URL + '/contacts'} component={Contacts} />
          <Route path={process.env.PUBLIC_URL + '/privacy-policy'} component={PrivacyPolicy} />
          <Route path={process.env.PUBLIC_URL + '/subway-hub'} component={SubwayHub} />
          <Route path={process.env.PUBLIC_URL + '/gjeversrudveien'} component={Gjeversrudveien} />
          <Route path={process.env.PUBLIC_URL + '/blosser'} component={Blosser} />
          <Route path={process.env.PUBLIC_URL + '/slokker-homes'} component={SlokkerHomes} />
          <Route path={process.env.PUBLIC_URL + '/doroshenko-residence'} component={DoroshenkoResidence} />
          <Route path={process.env.PUBLIC_URL + '/place-des-vosges'} component={PlaceDesVosges} />
          <Route path={process.env.PUBLIC_URL + '/fuchs'} component={Fuchs} />
          <Route path={process.env.PUBLIC_URL + '/ballet-hall'} component={BalletHall} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </>
    )
  }
}
