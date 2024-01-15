import React, { useEffect, useState } from 'react';
import images from './images/images';
import { TextAnimation } from './TextAnimation/TextAnimation';
import { ImageAnimation } from './ImageAnimation/ImageAnimation';


function delayInSeconds(seconds) {
  const SECOND_AS_MILLISECOND = 1000;
  return (seconds * SECOND_AS_MILLISECOND);
}
const BANNER_ANIMATION_DELAY = delayInSeconds(6);


export function Banner() {


  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRefresh(prev => !prev), BANNER_ANIMATION_DELAY);
    return () => clearTimeout(timer);
  }, [refresh]);


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