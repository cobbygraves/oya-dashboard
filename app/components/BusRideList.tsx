import React from 'react'
import BusRideListItem from './BusRideListItem'

const rides = [
  {
    date: '24 - 04 - 2023',
    destination: 'Accra - Ho',
    fare: 'GH 65.00'
  },
  {
    date: '13 - 01 - 2020',
    destination: 'Takoradi - Kumasi',
    fare: 'GH 90.00'
  },
  {
    date: '14 - 12 - 2010',
    destination: 'Kumasi - Ho',
    fare: 'GH 103.00'
  },
  {
    date: '3 - 08 - 2017',
    destination: 'Takoradi - Kumasi',
    fare: 'GH 90.00'
  },
  {
    date: '30 - 09 - 2014',
    destination: 'Tamale - Ho',
    fare: 'GH 165.00'
  },
  {
    date: '07 - 01 - 2020',
    destination: 'Takoradi - Kumasi',
    fare: 'GH 90.00'
  },
  {
    date: '22 - 12 - 2013',
    destination: 'Kumasi - Sunyani',
    fare: 'GH 85.00'
  }
]

const BusRideList = () => {
  return (
    <div className='md:w-2/6 rounded-xl shadow-xl py-2 px-2 overflow-y-scroll max-h-[320px]'>
      <p className='font-bold my-3 text-center text-lg'>Ride Informations</p>
      {rides.map((ride) => (
        <BusRideListItem {...ride} />
      ))}
    </div>
  )
}

export default BusRideList
