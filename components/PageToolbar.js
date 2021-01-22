import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconAddUser = (
  <FontAwesomeIcon icon={['fas', 'plus-circle']} />
)
const iconDeleteUsers = (
  <FontAwesomeIcon icon={['fas', 'trash']} />
)
const iconDelete = (
  <FontAwesomeIcon icon={['fas', 'times-circle']} />
)
const iconEdit = (
  <FontAwesomeIcon icon={['fas', 'edit']} />
)
const iconSearch = (
  <FontAwesomeIcon icon={['fas', 'search']} />
)

const PageToolbar = (props) => {
  // console.log(props)
  return (
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" size="sm" />
                <Button variant="success" size="sm">{iconSearch} Search</Button>
              </Form>
              <Nav>
                {props.addUser ? <Button variant="primary" size="sm" className='ml-2'>{iconAddUser} Add User</Button> : ''}
                {props.deleteUser ? <Button variant="danger" size="sm" className='ml-2' disabled>{iconDeleteUsers} Delete Users</Button> : ''}
                {props.addDesign ? <Button variant="primary" size="sm" className='ml-2'>{iconAddUser} Add Design</Button> : ''}
                {props.deleteDesign ? <Button variant="danger" size="sm" className='ml-2' disabled>{iconDeleteUsers} Delete Design</Button> : ''}


              </Nav>
            </Navbar.Collapse>
          </Navbar>
  )
}

export default PageToolbar
