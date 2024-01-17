import React from 'react';

import { Banner } from './Banner/Banner';
import { FashionSection } from './FashionSection/FashionSection';
import { SportsSection } from './SportsSection/SportsSection';
import { TrendingSection } from './TrendingSection/TrendingSection';
import { DealOfTheWeek } from './DealOfTheWeek/DealOfTheWeek';
import { LiaClock, LiaShippingFastSolid } from 'react-icons/lia';
import { IconContext } from 'react-icons/lib';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';


function MiniCard({ children, title, subtitle }) {
  return (
    <div className="flex gap-4 justify-center items-end">
      {children}
      <div className='flex flex-col'>
        <h2 className=' font-semibold tracking-wide text-neutral-800'>{title}</h2>
        <p className='text-neutral-800 tracking-wide'>{subtitle}</p>
      </div>
    </div>
  );
}


export function Home() {
  useDocumentTitle("Store");
  return (
    <div className='flex flex-col gap-20  '>
      <section>
        <Banner />
      </section>
      <section>
        <TrendingSection />
      </section>
      <section>
        <FashionSection />
      </section>
      <section>
        <DealOfTheWeek />
      </section>
      <section>
        <SportsSection />
      </section>

      <section>
        <div className='grid place-items-center my-8'>
          <div className='grid grid-cols-3 gap-4 place-items-center border border-gray-200 p-8 w-[90%]'>
            <MiniCard title={"FREE SHIPPING"} subtitle={"For all orders avobe $50"}>
              <LiaShippingFastSolid className=' text-6xl font-extralight text-yellow-600' />
            </MiniCard>

            <MiniCard title={"DELIVERY ON TIME"} subtitle={"If goods have prolems"}>
              <LiaClock className=' text-6xl font-extralight text-yellow-600' />
            </MiniCard>
            <MiniCard title={"SECURE PAYMENT"} subtitle={"100% secure payment"}>
              <LiaShippingFastSolid className=' text-6xl font-extralight text-yellow-600' />
            </MiniCard>
          </div>
        </div>
      </section>
    </div>
  );
}
