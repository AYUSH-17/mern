import React from "react";
import "./home.css";
import LineIcon from "react-lineicons";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoFilmOutline } from "react-icons/io5";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

const Menu = () => {
  return (
    <div>
      {/* Navbar Started */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="#home">
          {/* <img
        src={process.env.PUBLIC_URL +"/logo.jpg"}
         width="30"
         height="30"
        className="d-inline-block align-top"
        alt="WAPP Digitals logo"
      />{' '} */}
          <IoFilmOutline size="3rem" />
          &nbsp; WAPP Digitals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Wedding</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pre-Wedding
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Maternity</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Baley Shower
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Product Photoshoot
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Event Photos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Fashion Photography
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Testimonial</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Download Brochure</Nav.Link>
            <Nav.Link href="#deets">Support</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Navbar Finished */}
    </div>
  );
};

const WappFeatures = ({ title, description }) => {
  return (
    <div className=" col-lg-12 ">
      <h4>
        <i className="lni lni-flag text-white"></i>
      </h4>
      <h4 className="font-weight-bold text-white ">{title}</h4>
      <p className="text-light mx-5">{description}</p>
    </div>
  );
};

const BasicFeatures = ({ iconName, title, description }) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 card">
      <div className="display-3 text-muted ">
        <LineIcon name={iconName} />
        <h4>{title} </h4>
      </div>
      <div className="text-dark">
        <p className=" text-secondary ">{description}</p>
      </div>
    </div>
  );
};

SwiperCore.use([Navigation, Pagination]);

const CardSwiper = () => {
  const swiper = new Swiper(".swiper-container", {
    observer: true,
    observeParents: true,
    loop:true,
    rebuildOnUpdate: true,
    effect: "cube",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <WappFeatures
            title="Easy To Book"
            description="You can book anything at anytime in just one click."
          />
        </div>
        <div className="swiper-slide">
          <WappFeatures
            title="Best Quality"
            description="We deliver best quality service by Skilled professionals 
                    trained by the best . We capture your priceless memories very beautifully."
          />
        </div>
        <div className="swiper-slide">
          <WappFeatures
            title="Life long data access"
            description="Memories that last forever , We believe that few memories
                  are so beautiful that they are meant to be preserved
                  forever. Hence, We provide lifelong data storage facility
                  for you using which you can access and personalize
                  whenever you want."
          />
        </div>
        <div className="swiper-slide">
          <WappFeatures
            title="Passion"
            description="We are not just artirts, we have endless passion for
                  photography and cinematography."
          />
        </div>
        <div className="swiper-slide">
          <WappFeatures
            title="Compare"
            description="Just compare it and you will see that why we are known for
                  our exceptional service."
          />
        </div>
        <div className="swiper-slide">
          <WappFeatures
            title="One solution"
            description="One solution to every service needed for cinematography
                  and photography. No matter what you need, we provide
                  totally customised service on only one platform , BOOK
                  ASAP ON WAPP."
          />
        </div>
      </div>

      <div className="swiper-button-prev "></div>
      <div className="swiper-button-next "></div>

    </div>
  );
};

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Menu />

      {/* Carousel Started */}

      <Carousel>
        <Carousel.Item>
          <img
            className="img-fluid Banner  d-block w-100"
            src={process.env.PUBLIC_URL + "/img/wow111.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Memories that last forever</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid Banner d-block w-100"
            src={process.env.PUBLIC_URL + "/img/Originals/hands.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Your Bond , Our Dedication</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid Banner d-block w-100"
            src={process.env.PUBLIC_URL + "/img/Originals/sir_mam_taj.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Captured Perfectly</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <!-- ========================= feature-section start ========================= --> */}
      <section className="feature-section ">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-9 mx-auto">
            <div className="section-title text-center ">
              <br />
              <br />
              <h1 className="text-primary">Feature</h1>
              <h2 className="text-secondary">Why Choose Us?</h2>
              <p className="text-body">
                We provide our customers. the best in the market at the best
                prices.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row wrap-up">
          <BasicFeatures
            iconName="lni lni-layers "
            title="Variety of Styles"
            description='We get you a wide range of talented artists, each having their
        expertise and their own style. Or if you want, you can choose "All Rounders" with experience in
        all sorts of events.'
          />
          <BasicFeatures
            iconName="lni lni-camera "
            title="Certified Professionals"
            description="Our team consists of certified members with experience and
            knowledge. We also keep on expanding our technology and acquire
            more of the latest devices through a spectrum of standard DSLRs
            to high flying drones for various projects."
          />
          <BasicFeatures
            iconName="lni lni-agenda "
            title="Easy Booking and Flexibility"
            description="Need a booking for an event? Click. And its done! Yes it is that
            simple with WAPP. Login to your account. Give us booking details
            and we will get back to you."
          />
        </div>
      </div>

      {/* <!-- ========================= feature-section end ========================= --> */}

      <div
        className="mt-5 container-fluid"
        style={{ backgroundColor: "	#36454F" }}
      >
        <div className="container-sm">
          <div className="row">
            <Carousel className="col-lg-5 my-5 ">
              <Carousel.Item>
                <img
                  className="d-block w-100 my-auto"
                  src={process.env.PUBLIC_URL + "/img/sir_mam1.jpg"}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Share the love</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 my-auto"
                  src={process.env.PUBLIC_URL + "/img/palm_tree.jpg"}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Creativity at it's best</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 my-auto"
                  src={process.env.PUBLIC_URL + "/img/sakura_sir_mam.jpg"}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>All you need is love and unforgetable Moments</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12  ">
              {/* <!-- Section: Features v.4 --> */}
              <section className="text-white">
                {/* <!-- Section heading --> */}
                <h2 className="h1-responsive font-weight-bold text-center  ">
                  <br />
                  Why is it so great?
                </h2>
                {/* <!-- Section description --> */}
                <p className="lead grey-text text-center w-responsive mx-auto mb-5">
                  With WAPP, you need not worry about anything sveniam.
                </p>
                <div className="row text-center justify-content-center">
                  <CardSwiper />
                </div>
              </section>
              {/* <!-- Section: Features v.4 --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
