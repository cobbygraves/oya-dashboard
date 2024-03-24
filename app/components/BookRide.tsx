import React from 'react'

const BookRide = () => {
  return (
    <div className='md:w-2/6 rounded-xl shadow-xl py-2 px-2 overflow-y-scroll max-h-[320px]'>
      <p className='font-bold text-4xl text-center'>Want to book a ride ?</p>
      <hr className='border border-black my-2' />
      <ul className=' text-lg'>
        <li>1. Dial *238*3# on all networks</li>
        <li>2. Choose option - 3</li>
        <li>3. Enter your location</li>
        <li>4. Enter your destination</li>
        <li>5. Enter your date of depature</li>
        <li>6. Enter your payment amount</li>
        <li>7. Enter your MOMO pin to confirm</li>
      </ul>
    </div>
  )
}

export default BookRide
