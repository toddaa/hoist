import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import styles from '../styles/Header.module.scss';

const iconSearch = (
  <FontAwesomeIcon icon={['fas', 'search']} className='fa-fw' />
)

const iconLogin = (
  <FontAwesomeIcon icon={['fas', 'lock']} className='fa-fw' />
)

const iconAdmin = (
  <FontAwesomeIcon icon={['fas', 'cogs']} className='fa-fw' />
)

const Header = (props) => {
  // console.log(props)
  const { auth } = props

  let fixedVal = ''

  if (auth){
    fixedVal = 'top'
  }

  return (
    <Navbar bg="dark" expanded className={`navbar-dark`} fixed={fixedVal}>
      <Navbar.Brand href='/'>Hoist</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id='navbarSupportedContent'>
        <Nav className='ml-auto'>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="success">{iconSearch} Search</Button>
          </Form>
          {/* {auth ?
              <>
                <Nav.Link href="/admin" className='nav-item'>{iconAdmin} Admin</Nav.Link>
                <Nav.Link className='nav-item'>{iconSearch} Profile</Nav.Link>
              </>
            :
              <>
                <Nav.Link className='nav-item'>{iconLogin} Login</Nav.Link>
              </>
          } */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
