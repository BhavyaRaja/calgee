import React , { Component } from 'react';
import './Header.css';
import truck  from '../Icons/truck-1058.svg';


class Header extends Component{
  render()
  {
    return (
    <header className="header-style">
    <img src={truck} alt="truckicon"/>&nbsp;&nbsp;<span>Free Shipping + 30 Day Money Back Guarantee</span>
    </header>
    )
    
  }
}

export default Header;
