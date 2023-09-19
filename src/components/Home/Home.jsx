import React from 'react'


import { HeroCarousel } from './HeroCarousel/HeroCarousel';
import { FashionSection } from './FashionSection/FashionSection';
import { SportsSection } from './SportsSection/SportsSection';
import { TrendingSection } from './TrendingSection/TrendingSection';
import { DealOfTheWeek } from './DealOfTheWeek/DealOfTheWeek';
export function Home() {
  return (
    <div className='flex flex-col gap-10  '>
      <section>
        <HeroCarousel />
      </section>
      <section>
        <TrendingSection />
      </section>
      <section>
        <DealOfTheWeek />
      </section>
      <section>
        <FashionSection />
      </section>
      <section>
        <SportsSection />
      </section>
    </div>
  )
}
