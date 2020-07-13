import { Link } from "gatsby"
import {
  MDBBtn,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBJumbotron,
  MDBRow,
} from "mdbreact"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      description="Sorry this page doesn't contain in our site"
    />
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className="text-white text-center py-5 px-4 my-5"
              style={{
                backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
              }}
            >
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  NOT FOUND
                </MDBCardTitle>
                <p className="mx-5 mb-5">
                  You just hit a route that doesn't exist... the sadness.!
                </p>
                <Link to="/">
                  <MDBBtn
                    outline
                    color="yellow"
                    className="mb-5"
                    href="ansiglobal.com"
                  >
                    <MDBIcon icon="clone" className="mr-2"></MDBIcon> Go back to
                    Home Page
                  </MDBBtn>
                </Link>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default NotFoundPage
