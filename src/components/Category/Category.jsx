import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import BreadCrumb from '../BreadCrumb/BreadCrumb';


export function Category() {

  const { category } = useParams();
  
  return (
    <div>
      <BreadCrumb />
      {category}
      <div>
        <Outlet />
      </div>
    </div>
  )
}
