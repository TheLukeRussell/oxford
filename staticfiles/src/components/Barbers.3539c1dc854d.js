import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Barbers.css';

const Barbers = () => {
  return (
    <Card className='m-5' style={{ width: '18rem' }}>
      <Card.Img src='https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_1.png' />
      <Card.Body>
        <Card.Title>Barber Name</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, commodi officia? Laborum
          fuga nam, nostrum quisquam nihil fugiat, unde fugit veniam consequatur eligendi quasi
          perferendis neque natus voluptatem, temporibus veritatis.
        </Card.Text>
        <Button variant='primary'>Book With...</Button>
      </Card.Body>
    </Card>
  );
};

export default Barbers;
