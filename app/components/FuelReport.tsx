import React from 'react'
import FuelGraph from './FuelGraph'
const FuelReport = () => {
  return (
    <div className='rounded-xl shadow-xl py-2 min-h-[100px]'>
      <p className='font-bold my-3 text-center text-lg'>Fuel Statistics</p>
      <div className='flex justify-between px-5 '>
        <div className='mt-2'>
          <p className='text-[#9b0102] '>Total Fuel Cost</p>
          <p className='text-[#9b0102] text-[10px] mt-2'>88% ^</p>
        </div>
        <p className='font-bold ml-2 mb-2 text-2xl text-[#9b0102]'>
          GH&#8373; 290,700
        </p>
      </div>
      <FuelGraph />
    </div>
  )
}

export default FuelReport
