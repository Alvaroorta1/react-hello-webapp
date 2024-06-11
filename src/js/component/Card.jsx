import React from "react"

const Card = ({name, phone, email, address}) => {

    return (
  <>
      <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src="..." className="img-fluid rounded-start" alt="..."></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{name}</h5> 
          <p className="card-text">{phone}</p> 
          <p className="card-text">{email}</p>
        <p className="card-text"><small className="text-body-secondary">{address}</small></p>
      </div>
    </div>
  </div>
</div>
</>


  )
}

export default Card