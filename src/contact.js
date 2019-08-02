import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            
            <div className="grey-text">
              <h5><MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              /></h5>
             <h5> <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              /></h5>
              <h5><MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              /></h5>
              <h5><MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              /></h5>
            </div>
            <div className="text-center">
            <h5><MDBBtn outline color="secondary">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn></h5>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;