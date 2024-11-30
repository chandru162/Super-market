import React from 'react'

function Contact() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-success">Contact Us</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-success">Send Message</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>Get in Touch</h3>
                <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                <div className="mt-4">
                  <h5>Address</h5>
                  <p>123 Super Market Street<br />City, State 12345</p>
                  <h5>Phone</h5>
                  <p>(123) 456-7890</p>
                  <h5>Email</h5>
                  <p>info@supermarket.com</p>
                  <h5>Business Hours</h5>
                  <p>Monday - Friday: 9:00 AM - 8:00 PM<br />
                     Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact