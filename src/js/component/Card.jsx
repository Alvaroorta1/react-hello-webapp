import React from "react"
import { Link } from "react-router-dom"
import Modal from "./Modal.jsx"
const Card = ({ id, name, phone, email, address }) => {

  return (
    <>
      <div className="row mb-2">
        <div className="col-md-4">
          <img src="https://img6.arthub.ai/64a2f941-7687.webp" width="50%" className="img-fluid rounded-start" alt="..."></img>
        </div>
        <div className="col-md-8 d-flex">
          <div className="card-body ">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{phone}</p>
            <p className="card-text">{email}</p>
            <p className="card-text"><small className="text-body-secondary">{address}</small></p>
          </div>
          <div class="d-flex justify-content-between">
            <Link to={"/editContact/" + id}>
              <i class="bi bi-pencil-fill mx-1"></i>
            </Link>
            <Modal id={id}></Modal>
          </div>
        </div>
      </div>
    </>


  )
}

export default Card







