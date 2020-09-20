import React, { Component } from "react";
import style from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, fafacebook, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'


class Footer extends Component {
  render() {
    return (
      <div className="wrapper">
        <span class="main">
          <form>
            <label>
              <p> Suscribe to our news letter</p>
             
              <input type="email" name="" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </span>
        <div className="section">
          <div class="secton1">
             <ul class="footer-nav">
                <li class  = "links"><a href="#">Home</a></li>
                <li><a href="#">cart</a></li>
            </ul>
          </div>
          <div class="section2">address</div>
          <div class="section3">about us</div>
        </div>
        <div className={style.icons}>
        
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          
        </div>
        <p className="col-sm lisence">
          &copy;{new Date().getFullYear()} All rights reserved | Terms Of
          Service | Privacy
        </p>
      </div>
    );
  }
}

// baby here is hthe thing about css scoping , ma

export default Footer;
