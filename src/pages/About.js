import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5 bg-light-subtle">
          
          <div class="col-lg-5">
            <h1 class="fw-bold text-success">About</h1>
            <h1 class="fw-bold text-warning">Little Lemon</h1>
            <h3 class="font-weight-light">
            Welcome to Little Lemon Mediterranean Restaurant, your go-to place for delicious and authentic Mediterranean
        cuisine. We take pride in serving the freshest ingredients, inspired by the flavors of the Mediterranean region.
            </h3>
          </div>
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hero Pic"
            />
          </div>
        </div>
        <h1 class="text-success font-weight-bold">Our Chef's</h1>
        <h2 class="font-weight-light mb-5 pb-5"> Our skilled chefs are dedicated to creating mouthwatering dishes that will transport your taste buds to the
        sunny shores of the Mediterranean. From classic Greek salads to flavorful bruschetta and delightful lemon
        desserts, every item on our menu is prepared with love and care.</h2>
        <h1 class="text-success font-weight-bold">Our Serving</h1>
        <h2 class="font-weight-light mb-5 pb-5"> Whether you're dining with friends, family, or on your own, our warm and inviting atmosphere is perfect for any
        occasion. Come and experience the Little Lemon difference - a taste of the Mediterranean right in the heart of
        your city.</h2>
        <h2 class="text-success font-weight-bold" style={{textAlign:'center'}}>We look forward to serving you soon!</h2>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default About;