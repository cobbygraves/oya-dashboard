import React from 'react'
import BusHiringGraph from './BusHiringGraph'
const BusHiringReport = () => {
  return (
    <div className='rounded-xl shadow-xl py-2 min-h-[100px]'>
      <p className='font-bold my-3 text-center text-lg'>Hiring Statistics</p>
      <div className='flex justify-between px-5 '>
        <div className='mt-2'>
          <p className='text-[#9b0102] '>Total Hire Cost</p>
          <p className='text-[#9b0102] text-[10px] mt-2'>49% ^</p>
        </div>
        <p className='font-bold ml-2 mb-2 text-2xl text-[#9b0102]'>
          GH&#8373; 90,700
        </p>
      </div>
      <BusHiringGraph />
    </div>
  )
}

export default BusHiringReport
