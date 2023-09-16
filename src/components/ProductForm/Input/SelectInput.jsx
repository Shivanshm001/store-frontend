import React from 'react'
import categories from '../../../json/categories.json';

export function SelectInput({ value, onChange }) {

  return (
    <div className='flex flex-col gap-2 w-1/2'>
      <label htmlFor="category" className='text-xs font-semibold'>Category :</label>
      <select name="category" id="category" className='p-2 outline-none ring-1 ring-gray-400 rounded-md' placeholder='Select' value={value} onChange={onChange}>
        <option value="">
          Select
        </option>
        {
          categories.map(category => {
            return <option value={category} key={category}>{category}</option>
          })
        }
      </select>
    </div>
  )
}
