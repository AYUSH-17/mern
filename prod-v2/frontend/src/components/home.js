import React from "react";
import "./home.css";
import LineIcon from "react-lineicons";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoFilmOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div 
    style = {{ overflowX: "hidden" }}
    >
      {/* Navbar Started */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
  <IoFilmOutline size = "3rem" />&nbsp;
            WAPP Digitals        
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About Us</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Support</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Our Company
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

      {/* Navbar Finished */}

      {/* Carousel Started */}

      <Carousel>
        <Carousel.Item>
          <img
            className="img-fluid Banner  d-block w-100"
            src="img/wow111.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid Banner d-block w-100"
            src="img/Originals/hands.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid Banner d-block w-100"
            src="img/Originals/mam_taj.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
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
          <div className="col-lg-4 col-md-12 col-sm-12 card">
            <div className="display-3 text-muted ">
              <LineIcon name="lni lni-layers " />
              <h4>Variety of Styles </h4>
            </div>
            <div className="text-dark">
              {/* <h4>Variety of Styles </h4> */}
              <p className=" text-secondary ">
                We get you a wide range of talented artists, each having their
                expertise and their own style. <br />
                Or if you want, you can choose 'All Rounders' with experience in
                all sorts of events.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 card">
            <div className="display-3 text-muted">
              <i className="lni lni-camera"></i>
              <h4>Certified Professionals</h4>
            </div>
            <div className="text-dark">
              {/* <h4>Certified Professionals</h4> */}
              <p className=" text-secondary ">
                Our team consists of certified members with experience and
                knowledge. We also keep on expanding our technology and acquire
                more of the latest devices through a spectrum of standard DSLRs
                to high flying drones for various projects.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 card">
            <div className="display-3 text-muted">
              <i className="lni lni-agenda"></i>
              <h4>Easy Booking and Flexibility</h4>
            </div>
            <div className="text-dark">
              {/* <h4>Easy Booking and Flexibility</h4> */}
              <p className=" text-secondary ">
                Need a booking for an event? Click. And its done! Yes it is that
                simple with WAPP. Login to your account. Give us booking details
                and we will get back to you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ========================= feature-section end ========================= --> */}

      <div
        className="mt-5 container-fluid"
        style={{ backgroundColor: "	#36454F" }}
      >
        <div className="container-sm">
          <div className="row">
            <Carousel className="col-lg-5 my-5">
              <Carousel.Item>
                <img
                  className="d-block w-100 my-auto"
                  src="img/sir_mam1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 my-auto"
                  src="img/palm_tree.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 my-auto"
                  src="img/sakura_sir_mam.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
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

                {/*<!-- Grid row -->*/}
                <div className="row text-center justify-content-center">
                  {/*<!-- Grid column -->*/}
                  <div className=" col-md-4 ">
                    {/*<!-- Grid row -->*/}
                    <div className="row ">
                      {/*<!-- Grid column -->*/}
                      <div className="col-2">
                      <i className="lni lni-flag"></i>
                      </div>
                      {/*<!-- Grid column -->*/}
                      {/*<!-- Grid column -->*/}
                      <div className="col-10">
                        <h4 className="font-weight-bold ">International</h4>
                        <p className="grey-text small">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Reprehenderit maiores nam, aperiam minima
                          assumenda deleniti hic.
                        </p>
                      </div>
                      {/*<!-- Grid column -->*/}
                    </div>
                    {/*<!-- Grid row -->*/}
                    {/*<!-- Grid row -->*/}
                    <div className="row ">
                      {/*<!-- Grid column -->*/}
                      <div className="col-2">
                      <i className="lni lni-ruler-pencil"></i>
                      </div>
                      {/*<!-- Grid column -->*/}

                      {/*<!-- Grid column -->*/}
                      <div className="col-10">
                        <h4 className="font-weight-bold ">Experimental</h4>
                        <p className="grey-text small">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Reprehenderit maiores nam, aperiam minima
                          assumenda deleniti hic.
                        </p>
                      </div>
                      {/*<!-- Grid column -->*/}
                    </div>
                    {/*<!-- Grid row -->*/}

                    {/*<!-- Grid row -->*/}
                    <div className="row  ">
                      {/*<!-- Grid column -->*/}
                      <div className="col-2">
                      <i className="lni lni-flag"></i>
                      </div>
                      {/*<!-- Grid column -->*/}

                      {/*<!-- Grid column -->*/}
                      <div className="col-10">
                        <h4 className="font-weight-bold ">Relaxing</h4>
                        <p className="grey-text small ">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Reprehenderit maiores nam, aperiam minima
                          assumenda deleniti hic.
                        </p>
                      </div>
                      {/*<!-- Grid column -->*/}
                    </div>
                    {/*<!-- Grid row -->*/}
                  </div>
                  {/*<!-- Grid column -->*/}

                  {/*<!-- Grid column -->*/}
                  <div className=" col-md-4 ">
                    {/*<!-- Grid row -->*/}
                    <div className="row ">
                      {/*<!-- Grid column -->*/}
                      <div className="col-2">
                      <i className="lni lni-flag"></i>
                      </div>
                      {/*<!-- Grid column -->*/}
                      {/*<!-- Grid column -->*/}
                      <div className="col-10">
                        <h4 className="font-weight-bold ">Magical</h4>
                        <p className="grey-text small">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Reprehenderit maiores nam, aperiam minima
                          assumenda deleniti hic.
                        </p>
                      </div>
                      {/*<!-- Grid column -->*/}
                    </div>
                    {/*<!-- Grid row -->*/}
                    {/*<!-- Grid row -->*/}
                    <div className="row ">
                      {/*<!-- Grid column -->*/}
                      <div className="col-2">
                      <i className="lni lni-ruler-pencil"></i>
                      </div>
                      {/*<!-- Grid column -->*/}

                      {/*<!-- Grid column -->*/}
                      <div className="col-10">
                        <h4 className="font-weight-bold">Rapid</h4>
                        <p className="grey-text small">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Reprehenderit maiores nam, aperiam minima
                          assumenda deleniti hic.
                        </p>
                      </div>
                      {/*<!-- Grid column -->*/}
                    </div>
                    {/*<!-- Grid row -->*/}

                    {/*<!-- Grid row -->*/}
                    <div className="row  ">
                      {/*<!-- Grid column -->*/}
                      <div className="col-2">
                      <i className="lni lni-flag"></i>
                      </div>
                      {/*<!-- Grid column -->*/}

                      {/*<!-- Grid column -->*/}
                      <div className="col-10">
                        <h4 className="font-weight-bold ">Beloved</h4>
                        <p className="grey-text small  ">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Reprehenderit maiores nam, aperiam minima
                          assumenda deleniti hic.
                        </p>
                      </div>
                      {/*<!-- Grid column -->*/}
                    </div>
                    {/*<!-- Grid row -->*/}
                  </div>
                  {/*<!-- Grid column -->*/}
                </div>
                {/*<!-- Grid row -->*/}
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
