import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../layouts/AdminLayout.js'
import PageToolbar from '../components/PageToolbar'

const iconUsers = (
  <FontAwesomeIcon icon={['fas', 'users']} className='fa-fw fa-lg' />
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
            <h2>{iconUsers} User Administration</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <PageToolbar search addUser deleteUser />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Table striped bordered>
              <thead>
                <tr>
                  <th></th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Account Type</th>
                  <th>Date Created</th>
                  <th>Date Last Activity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Check type='checkbox' />
                  </td>
                  <td>toddaa</td>
                  <td>Aaron Todd</td>
                  <td>ADMIN</td>
                  <td>date</td>
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
