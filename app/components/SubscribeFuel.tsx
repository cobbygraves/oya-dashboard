import React from 'react'

const SubscribeFuel = () => {
  return (
    <div className='md:w-2/6 rounded-xl shadow-xl py-2 px-2 overflow-y-scroll max-h-[320px]'>
      <p className='font-bold text-4xl text-center'>Subscribe to fuel plan ?</p>
      <hr className='border border-black my-2' />
      <ul className=' text-lg'>
        <li>1. Dial *238*3# on all networks</li>
        <li>2. Choose option - 5</li>
        <li>3. Enter car model</li>
        <li>4. Enter car number</li>
        <li>5. Select plan to subscribe</li>
        <li>7. Enter your payment amount</li>
        <li>8. Enter your MOMO pin to confirm</li>
      </ul>
    </div>
  )
}

export default SubscribeFuel
