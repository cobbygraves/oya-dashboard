import React from 'react'
import ParcelDeliveryGraph from './ParcelDeliveryGraph'
const ParcelDeliveryReport = () => {
  return (
    <div className='rounded-xl shadow-xl py-2 min-h-[100px]'>
      <p className='font-bold my-3 text-center text-lg'>
        Parcel Delivery Statistics
      </p>
      <div className='flex justify-between px-5 '>
        <div className='mt-2'>
          <p className='text-[#9b0102] '>Total Delivery Cost</p>
          <p className='text-[#9b0102] text-[10px] mt-2'>15% ^</p>
        </div>
        <p className='font-bold ml-2 mb-2 text-2xl text-[#9b0102]'>
          GH&#8373; 8,200
        </p>
      </div>
      <ParcelDeliveryGraph />
    </div>
  )
}

export default ParcelDeliveryReport
