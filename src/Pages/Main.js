import React, { Component } from 'react';
import Cover from '../Components/Cover';
import PortfolioMain from '../Components/PortfolioMain';
import ServicesMain from '../Components/ServicesMain';
import Contacts from './Contacts';


export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
          <Cover />
          <PortfolioMain />
          <ServicesMain />
          <Contacts />
      </React.Fragment>
    )
  }
}