import React from 'react'
import FeaturePanel from './FeaturePanel'
import ParcelDeliveryReport from './ParcelDeliveryReport'
import ParcelDeliveryList from './ParcelDeliveryList'
import DeliverParcel from './DeliverParcel'

const ParcelDeivery = () => {
  return (
    <>
      <FeaturePanel
        icon={
          <svg
            width='100'
            height='100'
            viewBox='0 0 31 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2 10.5H29V25.506C29 26.331 28.3325 27 27.5105 27H3.4895C3.29357 26.9998 3.0996 26.961 2.91869 26.8858C2.73777 26.8106 2.57344 26.7005 2.43511 26.5617C2.29678 26.423 2.18715 26.2583 2.11249 26.0772C2.03783 25.896 1.99961 25.7019 2 25.506V10.5ZM11 13.5V16.5H20V13.5H11ZM0.5 1.5C0.5 0.672 1.1825 0 1.988 0H29.012C29.834 0 30.5 0.666 30.5 1.5V7.5H0.5V1.5Z'
              fill='#B40303'
            />
          </svg>
        }
        title='Parcel Delivery'
      />
      <div className='md:flex gap-x-3'>
        <ParcelDeliveryReport />
        <ParcelDeliveryList />
        <DeliverParcel />
      </div>
    </>
  )
}

export default ParcelDeivery
