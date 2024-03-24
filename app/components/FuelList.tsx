import React from 'react'
import FuelListItem from './FuelListItem'

const fuels = [
  {
    date: '24 - 04 - 2023',
    liters: '50 liters',
    cost: 'GH 965.00'
  },
  {
    date: '13 - 01 - 2020',
    liters: '35 liters',
    cost: 'GH 990.00'
  },
  {
    date: '14 - 12 - 2010',
    liters: '200 liters',
    cost: 'GH 3103.00'
  },
  {
    date: '3 - 08 - 2017',
    liters: '27 liters',
    cost: 'GH 390.00'
  },
  {
    date: '30 - 09 - 2014',
    liters: '14 liters',
    cost: 'GH 1165.00'
  }
]

const FuelList = () => {
  return (
    <div className='md:w-2/6 rounded-xl shadow-xl py-2 px-2 overflow-y-scroll max-h-[320px]'>
      <p className='font-bold my-3 text-center text-lg'>Fuel Informations</p>
      {fuels.map((fuel) => (
        <FuelListItem {...fuel} />
      ))}
    </div>
  )
}

export default FuelList
