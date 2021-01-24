import {useReducer, useState} from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  PinterestShareButton, PinterestIcon,
  TwitterShareButton, TwitterIcon
} from "react-share";
import { withSSRContext } from 'aws-amplify'
import { useRouter} from 'next/router'

import { Design } from '../../models'

import Layout from '../../layouts/BasicLayout.js'

const iconDownload = (
  <FontAwesomeIcon icon={['fas', 'cloud-download-alt']} className='fa-fw' />
)
const iconPlus = (
  <FontAwesomeIcon icon={['fas', 'plus']} className='fa-fw' />
)

const DesignPage = ({ design }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  // console.log(slug)
  // const { title, creationDate, summary, comments, keyImage } = props
  // const author = ''
  // const createdDate = new Date(creationDate).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

  // const commentRows = (comments!= null ? comments.map((comment, i) => {
  //   // console.log(comment)
  //   const commentDate = new Date(comment.dateTime).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
  //   return (
  //     <tr key={i}>
  //       <td>{comment.text}</td>
  //       <td>{comment.author}</td>
  //       <td>{commentDate}</td>
  //     </tr>
  //   )
  // }) : [
  //   <tr key={Math.random()}>
  //     <td colSpan='3' className="text-center">No Comments Yet</td>
  //   </tr>
  // ]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Head>
        <title>{design.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container fluid className='h-100 content design pt-4'>
          <Row className='h-100'>
            <Col md={{span: 10, offset:1}}>

              <Row className='mb-3'>
                <Col md="7">
                  <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                    <Carousel.Item>
                      {/* <img src={urlFor(keyImage).height(500).url()}></img> */}
                      <Carousel.Caption className="carousel-content">1</Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      {/* <img src={urlFor(keyImage).height(500).url()}></img> */}
                      <Carousel.Caption className="carousel-content">2</Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      {/* <img src={urlFor(keyImage).height(500).url()}></img> */}
                      <Carousel.Caption className="carousel-content">3</Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col md="5">

                  <Row className='mb-3'>
                    <Col md="12">
                      <h4 className='title'>{design.title}</h4>
                      <h5 className='author'>{design.Author.name}</h5>
                      {/* <h6 className='date'>{createdDate}</h6> */}
                    </Col>
                  </Row>

                  <Row className='mb-3'>
                    <Col md="12">
                      <Button variant="primary" block>{iconDownload} Download</Button>
                    </Col>
                  </Row>

                  <Row className='mb-3'>
                    <Col md="12">
                      <Card style={{width: '100%'}}>
                        <Card.Header>
                          Share
                        </Card.Header>
                        <Card.Body>
                          <FacebookShareButton className='mx-1' url=''><FacebookIcon borderRadius={10} size={50} /></FacebookShareButton>
                          <TwitterShareButton className='mx-1' url=''><TwitterIcon borderRadius={10} size={50} /></TwitterShareButton>
                          <PinterestShareButton className='mx-1' url=''><PinterestIcon borderRadius={10} size={50} /></PinterestShareButton>
                          <EmailShareButton className='mx-1' url=''><EmailIcon borderRadius={10} size={50} /></EmailShareButton>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col md="12">
                  <Card style={{width: '100%'}}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="summary">
                      <Card.Header>
                        <Nav variant="tabs">
                          <Nav.Item>
                            <Nav.Link eventKey="summary">Summary</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="comments">Comments</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Card.Body>
                        <Tab.Content>
                          <Tab.Pane eventKey="summary">
                            {design.summary}
                          </Tab.Pane>
                          <Tab.Pane eventKey="comments">
                            <Table striped bordered>
                              <thead>
                                <tr>
                                  <th>Comment</th>
                                  <th>Author</th>
                                  <th>Date</th>
                                </tr>
                              </thead>
                              {/* <tbody>{commentRows}</tbody> */}
                            </Table>
                            <Button variant="primary" size="sm">{iconPlus} Add Comment</Button>
                          </Tab.Pane>
                        </Tab.Content>
                      </Card.Body>
                    </Tab.Container>
                  </Card>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default DesignPage

export async function getStaticPaths(req) {
  const { DataStore } = withSSRContext(req)
  const designs = await DataStore.query(Design)
  const paths = designs.map(({slug}) => `/design/${slug}`)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps (req) {
  const { DataStore } = withSSRContext(req)
  const { params } = req
  const { slug } = params
  const design = await DataStore.query(Design, c => c.slug("eq", slug))

  return {
    props: {
      design: JSON.parse(JSON.stringify(design))[0]
    },
    revalidate: 100
  }
}

// export async function getServerSideProps (req){
//   console
//   const { DataStore } = withSSRContext(req)
//   const { params } = req
//   const { slug } = params
//   const design = await DataStore.query(Design, c => c.slug("eq", slug))
//   // console.log(design)
//   return {
//     props: {
//       design: JSON.parse(JSON.stringify(design))[0]
//     }
//   }
// }