import { useEffect } from 'react'
import ServiceCard from './ServiceCard'
import { TbBus } from 'react-icons/tb'
import { BsFuelPump } from 'react-icons/bs'
import { FaSchool } from 'react-icons/fa'

const services = [
  {
    id: 1,
    image: <TbBus style={{ width: 125, height: 125, color: '#B40303' }} />,
    service: 'Bus Ride',
    message:
      'Download, register and access easy ticket purchasing, mid-route boarding, incident reporting and real-time updates all in one place'
  },
  {
    id: 2,
    image: (
      <svg
        width='110'
        height='110'
        viewBox='0 0 31 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2 10.5H29V25.506C29 26.331 28.3325 27 27.5105 27H3.4895C3.29357 26.9998 3.0996 26.961 2.91869 26.8858C2.73777 26.8106 2.57344 26.7005 2.43511 26.5617C2.29678 26.423 2.18715 26.2583 2.11249 26.0772C2.03783 25.896 1.99961 25.7019 2 25.506V10.5ZM11 13.5V16.5H20V13.5H11ZM0.5 1.5C0.5 0.672 1.1825 0 1.988 0H29.012C29.834 0 30.5 0.666 30.5 1.5V7.5H0.5V1.5Z'
          fill='#B40303'
        />
      </svg>
    ),
    service: 'Parcel Delivery',
    message:
      'Deliver your package with a smile, choose OYA for the ultimate delivery experience!'
  },

  {
    id: 3,
    image: (
      <svg
        width='110'
        height='110'
        viewBox='0 0 31 29'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M23 25.5H8V27C8 27.3978 7.84196 27.7794 7.56066 28.0607C7.27936 28.342 6.89782 28.5 6.5 28.5H5C4.60218 28.5 4.22064 28.342 3.93934 28.0607C3.65804 27.7794 3.5 27.3978 3.5 27V25.5H2V13.5H0.5V7.5H2V3C2 2.20435 2.31607 1.44129 2.87868 0.87868C3.44129 0.31607 4.20435 0 5 0H26C26.7956 0 27.5587 0.31607 28.1213 0.87868C28.6839 1.44129 29 2.20435 29 3V7.5H30.5V13.5H29V25.5H27.5V27C27.5 27.3978 27.342 27.7794 27.0607 28.0607C26.7794 28.342 26.3978 28.5 26 28.5H24.5C24.1022 28.5 23.7206 28.342 23.4393 28.0607C23.158 27.7794 23 27.3978 23 27V25.5ZM5 3V16.5H26V3H5ZM5 19.5V22.5H11V19.5H5ZM20 19.5V22.5H26V19.5H20Z'
          fill='#B40303'
        />
      </svg>
    ),
    service: 'Bus Hiring',
    message:
      'Ride in style, hire an OYA bus - Your safe, comfortable and reliable transportation solution'
  },
  {
    id: 4,
    image: <FaSchool style={{ width: 125, height: 125, color: '#B40303' }} />,
    service: 'HSHS',
    message:
      'Dear, Students, Parents and Guardians can now rely on our safe and secured transport service dubbed Home-School-Home Services (HSHS)'
  },
  {
    id: 5,
    image: <BsFuelPump style={{ width: 125, height: 125, color: '#B40303' }} />,
    service: 'Fuel',
    message:
      'Ut amet exercitation deserunt occaecat laborum ullamco pariatur sit do esse in deserunt dolore pariatur.'
  }
]

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='font-nunito 2xl:max-w-7xl mx-auto '>
      {/*Content of the services goes here*/}
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-none p-[2%] w-[95%] md:w-[90%] md:gap-x-5 md:gap-y-[75px] mt-5 content-center'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              message={service.message}
              service={service.service}
              id={service.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
