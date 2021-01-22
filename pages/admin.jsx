import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../layouts/AdminLayout.js'

const iconTachometer = (
  <FontAwesomeIcon icon={['fas', 'tachometer-alt']} className='fa-fw fa-lg' />
)
const IndexPage = () => {
  return (
    <Layout>
      <Container fluid className='content root'>
        <Row>
          <Col md={12}>
            <h2>{iconTachometer} Administration Dashboard</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h4>Welcome to the administration dashboard.  </h4>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card bg='info' className="mb-2" style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Registered Users</Card.Title>
                <Card.Text>
                  1
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card bg='info' className="mb-2" style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Design Count</Card.Title>
                <Card.Text>
                  12
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
