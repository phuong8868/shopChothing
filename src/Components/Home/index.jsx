import React from "react";

import NavbarCusttom from "../Navbar";
import MyFooter from "../MyFooter"
import ProductGrid from "../ProductGrid"
import "./home.css";
import wrapper_menu from '../Assets/wrapper_menu.png'
import wrapper_menu_2 from '../Assets/wrapper_menu_2.png'
import wrapper_menu_3 from '../Assets/wrapper_menu_3.png'
import logo_footer_x from '../Assets/logo_footer_x.png'
import logo_footer from '../Assets/logo_footer.png'

import Carousel from "react-bootstrap/Carousel";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Home = () => {
  return (
    <>
      <div>
        <NavbarCusttom />
      </div>




      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={wrapper_menu}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={wrapper_menu_2}
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={wrapper_menu_3}
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
      </div>

      <ProductGrid />
      {/* <ProductGrid />
      <ProductGrid /> */}


      <div className="logo_footer_x">
        <img src={logo_footer_x} alt="logo_footer_x"  />
      </div>

      <div className="logo_footer">
      <img src={logo_footer} alt="logo_footer"  />
      </div>

      <div style={{ justifyContent: "center", alignContent: "center" }}>

      </div>
      <MyFooter />
    </>
  );
};

export default Home;
