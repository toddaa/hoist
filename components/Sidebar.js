import React from "react";
import {Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/Sidebar.module.scss';

const iconUsers = (
  <FontAwesomeIcon icon={['fas', 'users']} className='fa-fw fa-lg' />
)
const iconCogs = (
  <FontAwesomeIcon icon={['fas', 'cogs']} className='fa-fw fa-lg' />
)
const iconImages = (
  <FontAwesomeIcon icon={['fas', 'images']} className='fa-fw fa-lg' />
)
const iconTachometer = (
  <FontAwesomeIcon icon={['fas', 'tachometer-alt']} className='fa-fw fa-lg' />
)
const Sidebar = () => {
  return (
      <>
          <Nav className={`bg-light sidebar d-none d-md-block col-md-12 ${styles.sidebar}` }>
            <Nav.Item>
                <Nav.Link href="/admin" className={styles.navLink}>{iconTachometer} Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/users" className={styles.navLink}>{iconUsers} User Accounts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/designs" className={styles.navLink}>{iconImages} Designs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/system" className={styles.navLink}>{iconCogs} Site Preferences</Nav.Link>
            </Nav.Item>
          </Nav>
      </>
  );
};

export default Sidebar