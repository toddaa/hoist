import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../layouts/AdminLayout.js'
import PageToolbar from '../components/PageToolbar'

const iconImages = (
  <FontAwesomeIcon icon={['fas', 'images']} className='fa-fw fa-lg' />
)
const iconDelete = (
  <FontAwesomeIcon icon={['fas', 'times-circle']}/>
)
const iconEdit = (
  <FontAwesomeIcon icon={['fas', 'edit']} />
)

const IndexPage = () => {
  return (
    <Layout>
      <Container fluid className='content root'>
        <Row>
          <Col md={12}>
            <h2>{iconImages} Design Administration</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <PageToolbar search addDesign deleteDesign />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Table striped bordered>
              <thead>
                <tr>
                  <th></th>
                  <th>Thumbnail</th>
                  <th>Design</th>
                  <th>Type</th>
                  <th>Date Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Check type='checkbox' />
                  </td>
                  <td></td>
                  <td>Test</td>
                  <td>type</td>
                  <td>date</td>
                  <td>
                    <Button variant="warning" size="sm">{iconEdit} Edit</Button>
                    <Button variant="danger" size="sm">{iconDelete} Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
