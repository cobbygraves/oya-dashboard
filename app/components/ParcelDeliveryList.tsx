import React from 'react'
import ParcelDeliveryItem from './ParcelDeliveryItem'

const parcels = [
  {
    date: '24 - 04 - 2023',
    item: 'Suit Case',
    cost: 'GH 35.00'
  },
  {
    date: '13 - 01 - 2020',
    item: 'Bag of Rice',
    cost: 'GH 90.00'
  },
  {
    date: '14 - 12 - 2010',
    item: 'Provisions',
    cost: 'GH 20.00'
  },
  {
    date: '3 - 08 - 2017',
    item: 'Shoe',
    cost: 'GH 50.00'
  },
  {
    date: '30 - 09 - 2014',
    item: 'Fridge',
    cost: 'GH 165.00'
  },
  {
    date: '07 - 01 - 2020',
    item: 'Laptop',
    cost: 'GH 90.00'
  }
]

const ParcelDeliveryList = () => {
  return (
    <div className='md:w-2/6 rounded-xl shadow-xl py-2 px-2 overflow-y-scroll max-h-[320px]'>
      <p className='font-bold my-3 text-center text-lg'>Parcel Informations</p>
      {parcels.map((parcel) => (
        <ParcelDeliveryItem {...parcel} />
      ))}
    </div>
  )
}

export default ParcelDeliveryList
