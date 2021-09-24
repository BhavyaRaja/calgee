import React , { Component } from 'react';
import shoppingBag from '../Icons/shopping-bag.svg';
//import waveicon from '../Icons/waveicon.svg';
import './Navbar.css';


class Navbar extends Component{
  render()
  {
    return (
    <div className="nav-style container"> 
        <span>caglee</span> 
        <nav>
            <a href="#">SHOP</a> 
            <a href="#">SUSTAINABILITY</a> 
            <a href="#">ABOUT US</a> 
            <a href="#">BENEFITS</a>
            <a href="#">BLOG</a>
        </nav>
        <span className="nav-right">ACCOUNT&nbsp;&nbsp;&nbsp;<img src={shoppingBag} alt="shoppingBag" /></span>  
    </div>
    )
    
  }
}

export default Navbar;
