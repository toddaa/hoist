import Footer from '../components/Footer'

const Layout = (props) => {
  return (
    <>
      <div className='wrapper mt-6'>
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
