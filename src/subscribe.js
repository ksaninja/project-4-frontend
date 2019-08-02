import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import './home.css'
const Subscribe = () => {
  return (
    <MDBContainer className="centering">
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4 h111" >Subscribe</p>
            <div className="grey-text">
              <h4><MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              /></h4>
              <h4><MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              /></h4>
            </div>
            <div className="text-center">
              <MDBBtn className="btn btn-outline-light">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Subscribe;