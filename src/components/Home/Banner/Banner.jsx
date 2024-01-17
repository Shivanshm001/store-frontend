import React from 'react';
import { ImageAnimation } from './ImageAnimation/ImageAnimation';
import { TextAnimation } from './TextAnimation/TextAnimation';
import images from './images/images';


function delayInSeconds(seconds) {
  const SECOND_AS_MILLISECOND = 1000;
  return (seconds * SECOND_AS_MILLISECOND);
}
const BANNER_ANIMATION_DELAY = delayInSeconds(6);


export function Banner() {


  return (
    <div className='h-[100vh] min-h-[100vh]  grid grid-cols-2 place-items-center bg-gray-100'>
      {
        <>
          <TextAnimation />
          <ImageAnimation images={images}/>
        </>
      }
    </div>
  );
}