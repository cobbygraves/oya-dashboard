type BusRideListItemProps = {
  date: string
  destination: string
  fare: string
}

const BusRideListItem = ({ date, destination, fare }: BusRideListItemProps) => {
  return (
    <p className='rounded p-1 text-sm shadow mb-3'>
      <span className=' font-semibold mr-2'>{date} |</span>
      <span className=' font-semibold mx-2'>{destination} </span>
      <span className=' font-semibold mr-2'>| {fare}</span>
    </p>
  )
}

export default BusRideListItem
