import React from 'react'
import FeaturePanel from './FeaturePanel'
import BusHiringReport from './BusHiringReport'
import BusHiringList from './BusHiringList'
import BookHire from './BookHire'

const BusHiring = () => {
  return (
    <>
      <FeaturePanel
        icon={
          <svg
            width='100'
            height='100'
            viewBox='0 0 31 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M23 25.5H8V27C8 27.3978 7.84196 27.7794 7.56066 28.0607C7.27936 28.342 6.89782 28.5 6.5 28.5H5C4.60218 28.5 4.22064 28.342 3.93934 28.0607C3.65804 27.7794 3.5 27.3978 3.5 27V25.5H2V13.5H0.5V7.5H2V3C2 2.20435 2.31607 1.44129 2.87868 0.87868C3.44129 0.31607 4.20435 0 5 0H26C26.7956 0 27.5587 0.31607 28.1213 0.87868C28.6839 1.44129 29 2.20435 29 3V7.5H30.5V13.5H29V25.5H27.5V27C27.5 27.3978 27.342 27.7794 27.0607 28.0607C26.7794 28.342 26.3978 28.5 26 28.5H24.5C24.1022 28.5 23.7206 28.342 23.4393 28.0607C23.158 27.7794 23 27.3978 23 27V25.5ZM5 3V16.5H26V3H5ZM5 19.5V22.5H11V19.5H5ZM20 19.5V22.5H26V19.5H20Z'
              fill='#B40303'
            />
          </svg>
        }
        title='Bus Hiring'
      />
      <div className='md:flex gap-x-3'>
        <BusHiringReport />
        <BusHiringList />
        <BookHire />
      </div>
    </>
  )
}

export default BusHiring
