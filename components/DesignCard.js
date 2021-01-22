import Card from 'react-bootstrap/Card'
import Link from 'next/link'
// import sanityClient from '../utils/sanityClient';
// import { imageBuilder } from '../utils/sanityClient';
// import imageUrlBuilder from '@sanity/image-url'

import styles from '../styles/DesignCard.module.scss';

// const builder = imageUrlBuilder(sanityClient)

// function urlFor(source) {
//   return builder.image(source)
// }

const DesignCard = ({keyImage, slug, title}) => {
  // console.log(title)
  return (
    <Card className={`m-3 ${styles.designCard}`}>
      <Link href={`/design/${slug}`}>
        <a>
          {/* <img src={urlFor(keyImage).height(187).url()}></img> */}
        </a>
      </Link>
      <Card.Body className={styles.designCardBody}>
        <Link href={`/design/${slug}`}>
        <a>
        <p className='card-text'>{title}</p>
        </a>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default DesignCard
