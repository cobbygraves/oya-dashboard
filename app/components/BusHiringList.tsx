import React from 'react'
import BusHiringListItem from './BusHiringListItem'

const hirings = [
  {
    date: '24 - 04 - 2023',
    bus: 'Coaster',
    cost: 'GH 965.00'
  },
  {
    date: '13 - 01 - 2020',
    bus: 'Mini',
    cost: 'GH 990.00'
  },
  {
    date: '14 - 12 - 2010',
    bus: 'VIP',
    cost: 'GH 3103.00'
  },
  {
    date: '3 - 08 - 2017',
    bus: 'Coaster',
    cost: 'GH 390.00'
  },
  {
    date: '30 - 09 - 2014',
    bus: 'VIP',
    cost: 'GH 1165.00'
  }
]

const BusHiringList = () => {
  return (
    <div className='md:w-2/6 rounded-xl shadow-xl py-2 px-2 overflow-y-scroll max-h-[320px]'>
      <p className='font-bold my-3 text-center text-lg'>Hiring Informations</p>
      {hirings.map((hire) => (
        <BusHiringListItem {...hire} />
      ))}
    </div>
  )
}

export default BusHiringList
