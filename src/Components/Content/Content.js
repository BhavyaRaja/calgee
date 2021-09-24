import React , { Component } from 'react';
import handpills from '../Icons/handpills.png';
import onesymbol from '../Icons/onesymbol.svg';
import deepsea from '../Icons/deepsea.jpg';
import saveicon from '../Icons/saveicon.png';
import hearticon from '../Icons/hearticon.svg';
import humanbone from '../Icons/humanbones.svg';
import plusicon from '../Icons/plusicon.svg';
import brainicon from '../Icons/brainicon.svg';
import eyeicon from '../Icons/eyeicon.svg';
import birdicon from '../Icons/birdicon.svg';
import gifticon from '../Icons/gifticon.svg';
import alarmicon from '../Icons/alarmicon.svg';
import sunicon from '../Icons/sunicon.svg';
import leaficon from '../Icons/leaficon.svg';
import usaicon from '../Icons/usaicon.svg';
import bottleicon from '../Icons/bottleicon.svg';
import './Content.css';


class Content extends Component{
  render()
  {
    return (
    
    <div className="container">
        <div className="content-row-1">
        <span>
            <small>100% Plant Based Alternative</small> <br/><br/>
            <strong>Sustainable <br/>
                Omega-3
                </strong><br/><br/>
            85% More Potent Than Fish Oil<br/><br/>

            <button className="btn-primary">Shop Now</button>
            </span> 
        <span><img id="handpills" src={handpills} alt="handpillsicon" /></span>
        </div>
        <div className="content-row-2 wave-mid">
        <div class=" content-row-1">
            <span><strong>The Best Omega 3 <br/>
                      Supplement</strong></span>
                      <span>
                          <div id="onesymbol"><img  src={onesymbol} alt="oneicon" /></div> 
                          <div id="onesymbol-text">
                              <div>FOR THE</div>
                              <div>PLANET</div>
                              <div>-MEMBER-</div>
                              </div>  
                              </span>
                           </div>
                      <hr />
                       <div >
                          <span className="content-2-img-align"> 
                          <img className="vertical-line" src={leaficon} alt="leaficon" />
                          <img className="vertical-line" src={usaicon} alt="usaicon" />
                          <img className="vertical-line" src={bottleicon} alt="usaicon" />
                          <img  src={leaficon} alt="leaficon" />
                          </span>
                          <div className="img-text-style row-2-img-text">
                <span>100% Vegan</span>
                <span>Made in USA</span>
                <span>Non GMO</span>
                <span>Gluten free</span>
               </div>
            </div> 
       </div>
        <div className="content-row-3 content-row-1">
        <span className="image-style">
        <img id="deepsea" src={deepsea} alt="deepseaicon" />
            </span> 
        <span>
            <strong>The Calgee <br/>
                Story
                </strong><br/><br/>
            <small>Why We Started Calgee<br/><br/>
            Omega 3 is great for our health but it's not always great 
            for the planet. Traditional fish oil supplements hurt
            marine ecosystem through destructive overfishing.<br/><br/>
            And most vegan algae oil supplements contain 
            carrageenan in their soft-gels or use questionable
            sourcing that leaves you wondering.<br/><br />
            That's why we've created a pure, potent algae oil free of 
            anything you don't need in your body. Our tapioca soft gel
            contains no carrageenan. 
         </small>
            </span>
        </div>
        <div className="content-row-4 content-row-3 content-row-1">
        <span>
        <strong>Our Mission</strong><br/><br/>
            <small>We set out to create the world's most sustainable 
                   and high-quality health supplements. For you and the planet.
                   We want to make a positive difference by creating the 
                   highest-quality products to help you live a healthier life.<br/><br/>
                   In addition to joining <bold>1% For The Planet Members</bold>on 
                   Day 1, we're committed to joining the B Corp movement
                   and becoming a Climate Netural brand. We take a holistic 
                   view - from plant to package.<br/><br />
                   Join us in reducing our environmental footprint while
                   retaining an ocean's worth of goodness in our algae-
                   powered Omega-3.<br/><br/>
                   <button className="btn-primary">ABOUT US</button>                    
            
         </small>
            </span> 
        <span className="image-style">
         <img id="deepsea" src={deepsea} alt="deepseaicon" />
            </span>
        </div>
        <div>
            <img id="saveicon" src={saveicon} alt='saveicon' />
        </div>
        <div className="content-row-5 content-row-1">
        <span>
            <h2>Why You Need<br/>
            Omega 3 In <br/>
            Your Diet</h2>
            </span> 
        <span>
            <small>Most people don't get sufficient Omega 3 fatty acids in their 
            diets,especially Vegans and Vegetarians. Studies have shown 
            that Omega 3 is essential to your overall health and wellbeing
            including eyes,joints,heart, and brain*.
            </small><br/>
            <h2>Omega 3 May Support*</h2>
            <span className="image-gallery">
            <img src={hearticon} alt="hearticon"/>
            <img src={humanbone} alt="hearticon"/>
            <img src={plusicon} alt="hearticon"/>
            <img src={brainicon} alt="hearticon"/>
            <img src={eyeicon} alt="hearticon"/>
            </span>
            <div className="img-text-style">
                <span>HEART*</span>
                <span>JOINTS*</span>
                <span>IMMUNITY*</span>
                <span>BRAIN*</span>
                <span>EYES*</span>
            </div>
            <button className="btn-primary btn-secondary">
                VIEW OMEGA 3 BENEFITS
            </button>

            </span>

        </div>
        <div className="content-row-6 content-row-3 content-row-1">
        <span className="image-style">
        <img id="deepsea" src={deepsea} alt="deepseaicon" />
            </span> 
        <span>
            <strong>Sustainable Fish<br/>
                Oil Alternative
                </strong><br/><br/>
            <small>We're proud to offer the purest & only single-sourced EPA & <br/>
            DHA algae oil without carrageenan.<br/><br/>
            The algae is grown in a strict, controlled indoor environment.<br/>
            This prevents contamination and minimizes the environmental<br/>
            impact.<br/><br/>
            The algae is processed only using water, without any chemicals<br/>
            or solvents.
         </small>
         <span className="image-gallery row-6-img">
            <img src={birdicon} alt="birdicon" />
             <img src={gifticon} alt="gifticon" />
             <img src={alarmicon} alt="alarmicon" />
             <img src={sunicon} alt="sunicon" />
           </span>
           <div className="img-text-style row-6-text">
                <span>free shipping always</span>
                <span>pause or cancel at anytime</span>
                <span>no long term commitment</span>
                <span>30 day money back guarantee</span>
                
            </div>
         <button className="btn-primary btn-secondary">
                LEARN MORE
            </button>
            </span>

        </div>
        <div className="content-row-7">
            <h1>Happy Customers</h1>
            <p>These heroes are saving the planet one fish at a time</p>
            <div className="content-row-1">
                <span className="vertical-line"><strong>4.9</strong><br/>
                &#11088;&#11088;&#11088;&#11088;&#11088;<br/>
                Based on 13 Reviews</span>
                <span className="vertical-line ">
                <span className="review">&#11088;&#11088;&#11088;&#11088;&#11088;</span><progress max="100" value="90"></progress><small>(12)</small><br/>
                <span className="review">&#11088;&#11088;&#11088;&#11088;&#11088;</span><progress max="100" value="10"></progress><small>(1)</small><br/>
                <span className="review">&#11088;&#11088;&#11088;&#11088;&#11088;</span><progress max="100" value="0"></progress><small>(0)</small><br/>
                <span className="review">&#11088;&#11088;&#11088;&#11088;&#11088;</span><progress max="100" value="0"></progress><small>(0)</small><br/>
                </span>
                <span><button className="btn-primary btn-secondary">WRITE A REVIEW</button></span>
               
                </div>
               <span className="btn-review-align"><button className="btn-review">Reviews 13</button></span>
                <hr/>
           
            
           
        </div>
        <div className="contact-us content-row-7">
            <h1>Connect with Us</h1>
            <h3>@CalgeeHealth</h3>
            <span>
            <img id="deepsea"  src={deepsea} alt="deepseaicon" />
            <img id="deepsea"  src={deepsea} alt="deepseaicon" />
            <img id="deepsea"  src={deepsea} alt="deepseaicon" />
            <img id="deepsea"  src={deepsea} alt="deepseaicon" />
            <img id="deepsea"  src={deepsea} alt="deepseaicon" />
            <img id="deepsea"  src={deepsea} alt="deepseaicon" />
            </span>
        </div>
        </div>
    
    )
    
  }
}

export default Content;
