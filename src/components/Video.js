import React from 'react';

const Video = () => {
  const videoSource =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  return (
    <div className='row no-gutters'>
      <video autoPlay='autoplay' loop='loop' muted className='Video col-12'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
