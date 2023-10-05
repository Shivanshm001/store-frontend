import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import BreadCrumb from '../BreadCrumb/BreadCrumb';

export function Pages() {
  const { page } = useParams();
  return (
    <div className='bg-transparent'>
      <BreadCrumb />
      <div className='bg-transparent'>
        <Outlet />
      </div>
    </div>
  )
}
