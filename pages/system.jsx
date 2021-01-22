import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../layouts/AdminLayout.js'

const iconCogs = (
  <FontAwesomeIcon icon={['fas', 'cogs']} className='fa-fw fa-lg' />
)
const IndexPage = () => {
  return (
    <Layout>
      <Container fluid className='content root'>
        <Row>
          <Col md={12}>
            <h2>{iconCogs} Site Preferences</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
