'use client'
import React, { useState, useContext } from 'react'
import { Button } from 'antd'
import { AuthConstext } from './Providers'

export default function Logout() {
  const ctx = useContext(AuthConstext)

  const handleSignIn = () => {
    ctx?.setUser({ username: '', password: '' })
  }

  return (
    <div className='w-full'>
      <button
        className='py-1 px-5 border border-[#B40303] w-full text-md block rounded-lg text-[#B40303] hover:text-white hover:bg-[#B40303]'
        onClick={handleSignIn}
      >
        Logout
      </button>
    </div>
  )
}
