import React from "react";
import "./App.css";
import { Home } from "./components/Home.js";
import AboutUs from "./components/AboutUs.js";
import Brochure from "./components/Brochure.js";
import Testimonial from "./components/Testimonial.js";
import ContactUs from "./components/ContactUs.js";
import Support from "./components/Support.js";
import BabyShower from "./components/services/BabyShower";
import EventPhotos from "./components/services/EventPhotos";
import FashionPhotography from "./components/services/FashionPhotography";
import Maternity from "./components/services/Maternity";
import PreWedding from "./components/services/PreWedding";
import ProductPhotoshoot from "./components/services/ProductPhotoshoot";
import Wedding from "./components/services/Wedding";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/brochure" component={Brochure} />
      <Route path="/testimonial" component={Testimonial} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/Support" component={Support} />
      <Route path="/services/babyshower" component={BabyShower} />
      <Route path="/services/eventPhotos" component={EventPhotos} />
      <Route
        path="/services/fashionphotography"
        component={FashionPhotography}
      />
      <Route path="/services/maternity" component={Maternity} />
      <Route path="/services/preWedding" component={PreWedding} />
      <Route path="/services/productPhotoshoot" component={ProductPhotoshoot} />
      <Route path="/services/wedding" component={Wedding} />
      <Route component={Error} />
    </Switch>
  );
};

export default App;
