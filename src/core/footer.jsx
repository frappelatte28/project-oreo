import React, { Component } from "react";

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
                <li><a href="#">Home</a></li>
                <li><a href="#">cart</a></li>
            </ul>
          </div>
          <div class="section2">address</div>
          <div class="section3">about us</div>
        </div>
        {/* <div className="icons">
          <ul>
            <li>
              <i class="fa fa-linkedin"></i>
            </li>
            <li>
              {" "}
              <i class="fa fa-twitter"></i>
            </li>
            <li>
              <i class="fa fa-instagram"></i>
            </li>
          </ul>
        </div> */}
        <p className="col-sm">
          &copy;{new Date().getFullYear()} All rights reserved | Terms Of
          Service | Privacy
        </p>
      </div>
    );
  }
}

export default Footer;
