import React from 'react'

function Nopage() {
  return (
    <div>
      <div className="container text-center py-5">
        <h1 className="display-1">404</h1>
        <h2 className="display-4">Page Not Found</h2>
        <p className="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className="mt-4">
          <a href="/" className="btn btn-primary">Go Back Home</a>
        </div>
      </div>
    </div>
  )
}

export default Nopage