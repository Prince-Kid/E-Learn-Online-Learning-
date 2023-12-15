import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import "./App.css"
import Home from "./common/Home/Home";
import Footer from "./common/footer/Footer";
import Courses from "./components/courses/Courses";
import About from "./components/About/About";
import PicingCard from "./components/pricing/PicingCard";
import Blogs from "./components/Blogs/Blogs";
import TeamBack from "./components/Team/TeamBack";
import Contact from "./components/contact/Contact";
function App() {
  return (   
   <>
  <Router>
        <Header />
       <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/Courses" component={Courses}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/pricing" component={PicingCard}/>
          <Route exact path="/journal" component={Blogs}/>
          <Route exact path="/team" component={TeamBack}/>
          <Route exact path="/contact" component={Contact}/>
          
        </Switch>
      <Footer/>
      </Router>
   </>
  );
}

export default App;
