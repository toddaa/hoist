import Card from 'react-bootstrap/Card'
import Link from 'next/link'

import styles from '../styles/DesignCard.module.scss';

const DesignCard = ({keyImage, slug, title}) => {
  // console.log(title)
  return (
    <Link href={`/design/${slug}`}>
      <Card className={`m-3 ${styles.designCard}`}>
          {/* <img src={urlFor(keyImage).height(187).url()}></img> */}
        <Card.Body className={styles.designCardBody}>
          <p className='card-text'>{title}</p>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default DesignCard
