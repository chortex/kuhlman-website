import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
import PortfolioMain from '../Components/PortfolioMain';
import ServicesMain from '../Components/ServicesMain';
import Contacts from './Contacts';


export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
          <Jumbotron />
          <PortfolioMain />
          <ServicesMain />
          <Contacts />
      </React.Fragment>
    )
  }
}