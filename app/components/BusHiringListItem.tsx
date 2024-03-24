type BusHiringListItemProps = {
  date: string
  bus: string
  cost: string
}

const BusHiringListItem = ({ date, bus, cost }: BusHiringListItemProps) => {
  return (
    <p className='rounded p-1 text-sm shadow mb-3'>
      <span className=' font-semibold mr-2'>{date} |</span>
      <span className=' font-semibold mx-2'>{bus} </span>
      <span className=' font-semibold mr-2'>| {cost}</span>
    </p>
  )
}

export default BusHiringListItem
