import React from 'react'
import NavTab from '../../NavTab'
import PageBlock from '../../PageBlock/PageBlock'
import './Experience.css'
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

const Experience = () => {
  return (
    <>
    <div>
        <h1 className="text-center">My Resume Website</h1>
        <NavTab />
    </div>
    <div className='align-div'>
        <h5 className='center'>Experience Timeline</h5>
        <PageBlock header='Job Example #1'>
        Experiences I had in this job!!! Collaborates with TD Synnex Sales Reps, 
        Reseller Reps, End Users and internal IBM Employees on technical solutions featuring: IBM Power 9 and 10 servers, 
        AIX, IBM i and Linux distributions 
        </PageBlock>
        <PageBlock header='Job Example #2'>
        Experiences I had in this job!!! Collaborates with TD Synnex Sales Reps, 
        Reseller Reps, End Users and internal IBM Employees on technical solutions featuring: IBM Power 9 and 10 servers, 
        AIX, IBM i and Linux distributions 
        </PageBlock>
        <PageBlock header='Job Example #3'>
        Experiences I had in this job!!! Collaborates with TD Synnex Sales Reps, 
        Reseller Reps, End Users and internal IBM Employees on technical solutions featuring: IBM Power 9 and 10 servers, 
        AIX, IBM i and Linux distributions 
        </PageBlock>
    </div>
    <div>
      <MDBContainer fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }}>
        <div className="main-timeline">
          <div className="timeline left">
            <MDBCard>
              <MDBCardBody className="p-4">
                <h3>2017</h3>
                <h5>May to April</h5>
                <PageBlock header='Job Example #1'>
                  Experiences I had in this job!!! Collaborates with TD Synnex Sales Reps, 
                  Reseller Reps, End Users and internal IBM Employees on technical solutions featuring: IBM Power 9 and 10 servers, 
                  AIX, IBM i and Linux distributions 
                </PageBlock>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard>
              <MDBCardBody className="p-4">
                <h3>2016</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard>
              <MDBCardBody className="p-4">
                <h3>2015</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard>
              <MDBCardBody className="p-4">
                <h3>2012</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard>
              <MDBCardBody className="p-4">
                <h3>2011</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard>
              <MDBCardBody className="p-4">
                <h3>2007</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </MDBContainer>
    </div>
    </>
  )
}

export default Experience