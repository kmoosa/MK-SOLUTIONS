import React, { useState } from "react";
import { useActionData } from "react-router-dom";

function Contact() {
const [data,setData]=useState({
  fullname:" ",
  email:" ",
  query:" ",
});
const InputEvent =(event)=>{
  const {name,value}=event.target;

  setData((preVal)=>{
    return {
      ...preVal,
      [name]:value,
    }
  })
}

const formSubmit=()=>
{

};

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control"
                  name="email"
                  value={""}
                  onChange={InputEvent}
                  id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control"
                  name="fullname"
                  value={""}
                  onChange={InputEvent}
                  id="exampleFormControlInput1" placeholder="Enter Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"><strong>Enter your Query</strong></label>
                <textarea class="form-control"
                  name="query"
                  value={""}
                  onChange={InputEvent}
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;