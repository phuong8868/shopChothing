import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const MyFooter = () => {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          {/* <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div> */}
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Infomation
                </h6>
                <p>
                  Saigon: 173 Huỳnh Văn Bánh - Dist. Phú Nhuận - 0773 648 867
                  Hanoi: 974 Đường Láng - Dist. Đống Đa - 0975 190 369
                  smakerclothing@gmail.com
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
                <p>
                  <a href="#!" className="text-reset">
                  New Arrivals
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Shop
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                  Look-book
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    News
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                  Hướng dẫn mua hàng
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                  Quy cách đổi hàng
                  </a>
                </p>

              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Saigon: 173 Huỳnh Văn Bánh - Dist. Phú Nhuận - 0773 648 867
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  smakerclothing@gmail.com
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Copyright © 2024 Smaker. All rights reserved.
        </div>
      </MDBFooter>
    </div>
  );
};

export default MyFooter;
