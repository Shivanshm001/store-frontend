import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import BreadCrumb from '../BreadCrumb/BreadCrumb';

export function Pages() {
  const { page } = useParams();
  return (
    <>
      <BreadCrumb />
      <div>
        {page}
        <Outlet />
      </div>
    </>
  )
}
