import React from 'react'
import FeaturePanel from './FeaturePanel'
import FuelReport from './FuelReport'
import FuelList from './FuelList'
import SubscribeFuel from './SubscribeFuel'
import { BsFuelPump } from 'react-icons/bs'

const Fuel = () => {
  return (
    <>
      <FeaturePanel
        icon={
          <BsFuelPump style={{ width: 125, height: 125, color: '#B40303' }} />
        }
        title='Fuel'
      />
      <div className='md:flex gap-x-3'>
        <FuelReport />
        <FuelList />
        <SubscribeFuel />
      </div>
    </>
  )
}

export default Fuel
