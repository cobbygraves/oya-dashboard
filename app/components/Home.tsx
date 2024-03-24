import React from 'react'
import Services from './Services'
import BusRide from './BusRide'
import ParcelDeivery from './ParcelDelivery'
import BusHiring from './BusHiring'
import HSHS from './HSHS'
import Fuel from './Fuel'

type HomeProps = {
  feature: number | undefined
}

const Home = ({ feature }: HomeProps) => {
  switch (feature) {
    case 0:
      return <Services />
    case 1:
      return <BusRide />
    case 2:
      return <ParcelDeivery />
    case 3:
      return <BusHiring />
    case 4:
      return <HSHS />
    case 5:
      return <Fuel />
    default:
      return <Services />
  }
}

export default Home
