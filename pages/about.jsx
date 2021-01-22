import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from '../layouts/BasicLayout.js'

const AboutPage = () => {
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
              <h1>ABOUT PAGE</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default AboutPage