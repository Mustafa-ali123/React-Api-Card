import React from 'react'
import '../App.css';

const Spinner = () => {
    return (
      <div className="container mx-auto">
      <div className="row mx-auto ">
          <div className="col-lg-12 md-12 sm-12">
        <div class="spinner-border spin text-primary mx-auto " role="status">
    <span class="visually-hidden mx-auto">Loading...</span>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Spinner
