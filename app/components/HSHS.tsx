import React from 'react'
import FeaturePanel from './FeaturePanel'
import HSHSReport from './HSHSReport'
import HSHSList from './HSHSList'
import BookHSHS from './BookHSHS'
import { FaSchool } from 'react-icons/fa'

const HSHS = () => {
  return (
    <>
      <FeaturePanel
        icon={
          <FaSchool style={{ width: 125, height: 125, color: '#B40303' }} />
        }
        title='Home-School-Home'
      />
      <div className='md:flex gap-x-3'>
        <HSHSReport />
        <HSHSList />
        <BookHSHS />
      </div>
    </>
  )
}

export default HSHS
