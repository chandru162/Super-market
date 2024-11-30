import React from 'react'

function ForgotPassword() {
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center text-success">Forgot Password</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your registered email"
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                      Reset Password
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <p>Remember your password? <a href="/login" className="text-success">Login here</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword