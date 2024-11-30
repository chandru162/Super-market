import React from 'react'

function About() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-success">About Us</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Our Story</h2>
            <p>Welcome to Super Market, your one-stop destination for fresh groceries and daily essentials. Established in 2023, we have been committed to providing high-quality products at competitive prices.</p>
            <p>Our mission is to make grocery shopping convenient and enjoyable while ensuring that our customers receive the freshest products available.</p>
          </div>
          <div className="col-md-6">
            <h2>Why Choose Us?</h2>
            <ul className="list-unstyled">
              <li>✓ Fresh and Quality Products</li>
              <li>✓ Competitive Prices</li>
              <li>✓ Wide Selection</li>
              <li>✓ Excellent Customer Service</li>
              <li>✓ Fast Delivery</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <h2>Our Values</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Quality</h3>
                    <p className="card-text">We never compromise on the quality of our products.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Customer First</h3>
                    <p className="card-text">Your satisfaction is our top priority.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Sustainability</h3>
                    <p className="card-text">We are committed to environmental responsibility.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About