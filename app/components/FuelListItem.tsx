type FuelListItemProps = {
  date: string
  liters: string
  cost: string
}

const FuelListItem = ({ date, liters, cost }: FuelListItemProps) => {
  return (
    <p className='rounded p-1 text-sm shadow mb-3'>
      <span className=' font-semibold mr-2'>{date} |</span>
      <span className=' font-semibold mx-2'>{liters} </span>
      <span className=' font-semibold mr-2'>| {cost}</span>
    </p>
  )
}

export default FuelListItem
