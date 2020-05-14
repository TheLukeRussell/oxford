import React from 'react';
import { Card } from 'react-bootstrap';
import './InstaCard.css';

const InstaCard = () => {
  return (
    <Card className='bg-dark text-white image'>
      <Card.Img
        src='https://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png'
        alt='Card image'
      />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default InstaCard;
