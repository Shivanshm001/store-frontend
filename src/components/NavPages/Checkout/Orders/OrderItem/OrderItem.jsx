import React from "react"

export function OrderItem({ name, quantity, price }) {

    return <li className='capitalize flex justify-between tracking-wider pt-7 pb-1 border-b border-b-gray-300'>
      <span>
        <span>{name}</span>
        <span> {quantity && `X ${quantity}`}</span>
      </span>
      <span className='font-semibold'>${(price && quantity) ? (price * quantity).toFixed(2) : 0}</span>
    </li>
  }