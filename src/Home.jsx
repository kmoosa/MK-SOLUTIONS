import React from "react";
import {NavLink} from "react-router-dom";
import Card from "./Card";
function Home() {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
     <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div >
            <h3 className="text-center"> WELCOME TO <strong>MK SOLUTIONS</strong></h3>
            <p className="my-4"><strong>MK SOLUTIONS</strong> is one of the best content marketing companies in India 
              that builds content to educate, entertain, and convert your target audience 
              as your customers</p>
          </div>
          <div>
            <NavLink to="/service" className="btn btn-primary btn-lg">Get Started</NavLink>
          </div>
        </div>
       
          </div>
          
      </div>
    </section>
    </>
  );
}

export default Home;