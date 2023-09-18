import React from 'react'


import { Trending } from './Trending/Trending';
import { Carousel } from './Carousel/Carousel';
import { Fashion } from './Fashion/Fashion';

export function Home() {
  return (
    <>
    <section>
      <Carousel />
    </section>
    <section>
      <Trending />
    </section>
    <section>
      <Fashion />
    </section>
    </>
    )
}
