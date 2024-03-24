type ParcelDeliveryItemProps = {
  date: string
  item: string
  cost: string
}

const ParcelDeliveryItem = ({ date, item, cost }: ParcelDeliveryItemProps) => {
  return (
    <p className='rounded p-1 text-sm shadow mb-3'>
      <span className=' font-semibold mr-2'>{date} |</span>
      <span className=' font-semibold mx-2'>{item} </span>
      <span className=' font-semibold mr-2'>| {cost}</span>
    </p>
  )
}

export default ParcelDeliveryItem
