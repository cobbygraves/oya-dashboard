'use client'
import React, { useContext } from 'react'
import { FeatureContext } from './Providers'

type ServiceCardProps = {
  id: number
  image: React.ReactNode
  service: string
  message: string
}

const ServiceCard = ({ id, image, service, message }: ServiceCardProps) => {
  const ctx = useContext(FeatureContext)
  return (
    <div
      className='flex flex-col items-center shadow-lg bg-white pt-5  rounded-xl relative mb-[75px] md:mb-[100px] lg:mb-0 h-[300px] cursor-pointer hover:bg-gray-300'
      onClick={() => ctx?.changeFeature(id)}
    >
      <div className={'absolute -top-[17%]'}>{image}</div>
      <h1 className='text-[125%] font-extrabold mb-2 mt-20 text-center'>
        {service}
      </h1>
      <p className='text-[110%] font-light text-center px-3'>{message}</p>
    </div>
  )
}

export default ServiceCard
