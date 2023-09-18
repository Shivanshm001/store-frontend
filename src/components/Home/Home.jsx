import React from 'react'


import { Trending } from './Trending/Trending';
import { Carousel } from './Carousel/Carousel';
export function Home() {
  return (
    <>
    <div>
      <Carousel />
    </div>
    <div>
      <Trending />
    </div>
    </>
    )
}
