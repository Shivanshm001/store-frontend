import React from 'react'
import { useParams } from 'react-router-dom'

export  function Pages() {
    const {page} = useParams();
  return (
    <div>{page}</div>
  )
}
