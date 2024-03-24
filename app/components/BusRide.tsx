import React from 'react'
import FeaturePanel from './FeaturePanel'
import { TbBus } from 'react-icons/tb'
import BusRideReport from './BusRideReport'
import BusRideList from './BusRideList'
import BookRide from './BookRide'

const BusRide = () => {
  return (
    <>
      <FeaturePanel
        icon={<TbBus style={{ width: 125, height: 125, color: '#B40303' }} />}
        title='Bus Ride'
      />
      <div className='md:flex gap-x-3'>
        <BusRideReport />
        <BusRideList />
        <BookRide />
      </div>
    </>
  )
}

export default BusRide
