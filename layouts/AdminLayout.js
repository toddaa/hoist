import {Container, Row, Col } from "react-bootstrap";
import Footer from '../components/Footer'

import Sidebar from '../components/Sidebar'

const Layout = (props) => {
  return (
    <>
      <div className='wrapper mt-6'>
        <Container fluid className='h-100'>
            <Row>
              <Col xs={2} id="sidebar-wrapper">
                <Sidebar />
              </Col>
              <Col xs={10} id="page-content-wrapper" className="mt-3">
                {props.children}
                <Footer />
              </Col>
            </Row>
          </Container>
      </div>
    </>
  )
}

export default Layout
