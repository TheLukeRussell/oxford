import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='row no-gutters services-container'>
      <div id='service-left' className='col-4'></div>
      <div id='service-middle' className='col-4'>
        <h1>Services</h1>
        <ul>
          <li>The Oxford Classic (Hair Cut) ~ $32</li>
          <li>Haircut & Beard Trim ~ $45</li>
          <li>Haircut & Shave ~ $60</li>
          <li>Beard Trim ~ $25</li>
          <li>Shave ~ $35</li>
          <li>Kids Cut ~ $25</li>
        </ul>
        <div id='line' className='row no-gutters'></div>
        <h3>** Add On Services **</h3>
        <ul>
          <li className='bottom-text'>Skin Fade Add-On ~ $5</li>
          <li className='bottom-text'>Shampoo Add-On ~ $5</li>
          <li className='bottom-text'>Facial Area Waxing ~ $10</li>
        </ul>
      </div>
      <div id='service-right' className='col-4'></div>
    </div>
  );
};

export default Services;
