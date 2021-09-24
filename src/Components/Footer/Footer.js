import React , { Component } from 'react';
import instaicon from "../Icons/instaicon.svg";
import facebookicon from '../Icons/facebookicon.svg';
import twittericon from '../Icons/twittericon.svg';
import './Footer.css';


class Footer extends Component{
  render()
  {
    return (
      <div className="foot">
    
      <div className="content-row-1 ">
       
        <span><label>Let's Chat<br/><br/>Shipping Policy<br/>Refund Policy<br/>Terms of Service<br/>Privacy Policy</label><br/><br/>
      </span>
        
        <span><label>Company<br/><br/>Shop<br/>Sustainability<br/>Benefits<br/>Blogs</label></span>
        <span><label>Info<br/><br/>About<br/>Contact us<br/>FAQ<br/>Become an affiliate</label></span>
        <span><label>Subscribe To Our NewsLetter To Get 10%  Off<br/>
        <input type="text" placeholder="Your Email"  />  </label>
        <button className="signup">SIGN UP </button></span>
        

      </div>
      <span className="image-gallery icons-align">
      <img src={instaicon} alt="instaicon"/>
        <img src={facebookicon} alt="fbicon"/>
        <img src={twittericon} alt="twittericon"/>
   </span>
   <hr/>
   <div className="content-row-1">
     <span >
     <small>
     Privacy policy | Terms of Service<br/>
     &copy;2021 Calgee, All Rights Reserved.</small>
     </span>
     <span className="foot-end">
       <small>
       *These statements have not been evaluted by the Food and Drug Administration.
       This product is not intended to diagnose, treat, cure , or prevent any disease.</small>
     </span>
   </div>
      </div>
    
   
    )
    
  }
}

export default Footer;
