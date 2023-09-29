export function OrderItemDetail({ title, value }) {
    return <li className='capitalize flex justify-between tracking-wider pt-7 pb-1 border-b border-b-gray-300'>
      <span className=''>{title}</span>
      <span className={`font-semibold ${title.toLowerCase() === 'total' && "text-yellow-400"}`}>${value}</span>
    </li>
  }