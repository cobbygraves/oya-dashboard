import React from 'react'
import BusHiringListItem from './BusHiringListItem'

const hirings = [
  {
    date: '14 - 04 - 2023',
    bus: 'Coaster',
    cost: 'GH 865.00'
  },
  {
    date: '11 - 01 - 2020',
    bus: 'Mini',
    cost: 'GH 790.00'
  },
  {
    date: '14 - 12 - 2010',
    bus: 'VIP',
    cost: 'GH 1103.00'
  },
  {
    date: '30 - 08 - 2017',
    bus: 'Coaster',
    cost: 'GH 390.00'
  },
  {
    date: '03 - 09 - 2014',
    bus: 'VIP',
    cost: 'GH 2165.00'
  },
  {
    date: '01 - 01 - 2020',
    bus: 'Mini',
    cost: 'GH 490.00'
  },
  {
    date: '04 - 12 - 2010',
    bus: 'VIP',
    cost: 'GH 2103.00'
  }
]

const HSHSList = () => {
  return (
    <div className='md:w-2/6 rounded-xl shadow-xl py-2 px-2 overflow-y-scroll max-h-[320px]'>
      <p className='font-bold my-3 text-center text-lg'>HSHS Informations</p>
      {hirings.map((hire) => (
        <BusHiringListItem {...hire} />
      ))}
    </div>
  )
}

export default HSHSList
