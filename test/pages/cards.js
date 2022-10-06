
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css'
import {ProductDetail} from './productDetails.js'
import Link from 'next/link';

//deleted
// main div - className="mt-5 d-grid gap-4 ps-5"
//card title, add to cart - className='mt-2'

export default function Cardsss() {
  return (
    <div style={{ float: 'left' }} className="mt-6 d-grid gap-4 ps-5">
      <Card style={{ display: 'flex', flexDirection: 'row',width: '50rem' }} >
        <Card.Img style={{ width: '10rem' }} src="https://i5.walmartimages.com/asr/d63cc29a-1802-4b13-bee5-30f1f03435e7.ef5de3226a1d75ce0e8dd94e4f79eaca.jpeg" fluid />
        <Card.Body >
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <>
            <button href="#" className={styles.button} >Add to cart</button> {' '}
            <button className={styles.button} ><Link href="/productDetails" className={styles.Link}>Buy now</Link></button> {' '}
            <button href="#" className={styles.button} >Suggest</button>
          </>
        </Card.Body>
      </Card>

      <Card style={{ display: 'flex', flexDirection: 'row',width: '50rem' }} >
        <Card.Img style={{ width: '10rem' }} src="https://i5.walmartimages.com/asr/d63cc29a-1802-4b13-bee5-30f1f03435e7.ef5de3226a1d75ce0e8dd94e4f79eaca.jpeg" fluid />
        <Card.Body >
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <>
            <button href="#" className={styles.button} >Add to cart</button> {' '}
            <button className={styles.button} ><Link href="/productDetails" className={styles.Link}>Buy now</Link></button> {' '}
            <button href="#" className={styles.button} >Suggest</button>
          </>
        </Card.Body>
      </Card>

      <Card style={{ display: 'flex', flexDirection: 'row',width: '50rem' }} >
        <Card.Img style={{ width: '10rem' }} src="https://i5.walmartimages.com/asr/d63cc29a-1802-4b13-bee5-30f1f03435e7.ef5de3226a1d75ce0e8dd94e4f79eaca.jpeg" fluid />
        <Card.Body >
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <>
            <button href="#" className={styles.button} >Add to cart</button> {' '}
            <button className={styles.button} ><Link href="/productDetails" className={styles.Link}>Buy now</Link></button> {' '}
            <button href="#" className={styles.button} >Suggest</button>
          </>
        </Card.Body>
      </Card>
    </div>
   );
 }

 export {Cardsss};
