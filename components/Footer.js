import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/Footer.module.scss';

const iconReact = (
  <FontAwesomeIcon icon={['fab', 'react']} className='fa-fw fa-lg react' />
)
const iconAWS = (
  <FontAwesomeIcon icon={['fab', 'aws']} className='fa-fw fa-lg react' />
)
const iconPlus = (
  <FontAwesomeIcon icon={['fas', 'plus']} className='fa-fw fa-xs' />
)

const Footer = () => {
  return (
    <footer className={`globalFooter py-4 mt-5 ${styles.footer}`}>
      <Container>
        <Row>
          <Col md="4">
            <ul className='pl-0 mb-0'>
              <li className={styles.footerLinks}><a href='/about'>About</a></li>
              <li className={styles.footerLinks}><a href='/terms'>Terms of Use</a></li>
              <li className={styles.footerLinks}><a href='/privacy'>Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md="8">
            <p>{iconReact} {iconPlus} {iconAWS}</p>
            <p>&#169; Copyright 2021 by Aaron Todd. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
