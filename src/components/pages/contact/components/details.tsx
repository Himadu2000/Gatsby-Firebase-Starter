import { MDBCardBody, MDBCol, MDBIcon } from "mdbreact"
import React from "react"

const Bottom = () => (
  <MDBCol lg="4">
    <MDBCardBody className="contact text-center h-100 light-green-text">
      <h3 className="my-4 pb-2">Contact information</h3>
      <ul className="text-lg-left list-unstyled ml-4">
        <li>
          <p>
            <MDBIcon icon="map-marker-alt" className="pr-2" />
          </p>
          <p>Your Address</p>
        </li>
        <li>
          <p>
            <MDBIcon icon="phone" className="pr-2" />
            Your Phone
          </p>
        </li>
        <li>
          <p>
            <MDBIcon icon="envelope" className="pr-2" />
            Your Email
          </p>
        </li>
      </ul>
      <hr className="hr-light my-4" />
    </MDBCardBody>
  </MDBCol>
)

export default Bottom
