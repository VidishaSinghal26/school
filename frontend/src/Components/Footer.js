import React from 'react';
import '../styles/footer.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol,MDBIcon } from 'mdb-react-ui-kit';
import {NavLink} from 'react-router-dom'


export default function Fotter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/hillwoodsacademy' className='me-4 text-reset'>
           <i class="fab fa-facebook-f"></i>
          </a>
          <a href='https://www.youtube.com/channel/UCC88fv_gmI9QP9JE90LqdCQ' className='me-4 text-reset'>
            <MDBIcon fab icon="youtube" />
          </a>
          <a href='https://instagram.com/hillwoods_academy_greaternoida?igshid=MzRlODBiNWFlZA==' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/company/hillwoods-academy1/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                About us
              </h6>
              <p>
              At Hillwoods Academy, we strive to offer a high quality, modern education environment in new, purpose-built facilities with superb resources
              </p>
            </MDBCol>

 

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <NavLink to='/mission' className='text-reset'>
                  Mission
                </NavLink>
              </p>
              <p>
                <NavLink to='/infrastructure' className='text-reset'>
                  Academics
                </NavLink>
              </p>
              <p>
                <NavLink to='/club' className='text-reset'>
                  Resource Centers
                </NavLink>
              </p>
              <p>
                <NavLink to='/contact' className='text-reset'>
                  Contact Us
                </NavLink>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p >
                <MDBIcon icon="home" className="me-2" />
                HS-30, Eta-1 Greater Noida, Uttar Pradesh , India 201308
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Ha1grnoida@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-2" /> +91-9999083483
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          hillwoodsacadmy.in
        </a>
      </div>
    </MDBFooter>
  );
}