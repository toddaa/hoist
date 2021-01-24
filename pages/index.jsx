import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'

import Layout from '../layouts/BasicLayout.js'

import DesignCard from '../components/DesignCard'

import styles from '../styles/CardDeck.module.scss';

import { DataStore } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { Design } from '../models'


const IndexPage = () => {
  const [designs, setDesigns] = useState([])
  useEffect(() => {
    fetchPosts()
    async function fetchPosts() {
      const designData = await DataStore.query(Design)
      // console.log(designData)
      setDesigns(designData)
    }
    DataStore.observe(Design).subscribe(() => fetchPosts())
  }, [])

  return (
    <>
      <Head>
        <title>HoistUp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container fluid className='h-100 content root'>
          <Row className='h-100'>
            <Col md={{span: 10, offset:1}}>
              <div className={styles.deck}>
                {designs.map((design,i) => (<DesignCard key={design.id} {...design} />))}
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage