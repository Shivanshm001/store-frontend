import React from 'react'
import { useParams } from 'react-router-dom';


export function Category() {

  const { category } = useParams();
  
  return (
    <div>{category}</div>
  )
}
