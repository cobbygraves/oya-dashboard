import React from 'react'

type HumbugerProps = {
  active: boolean
  handleActive: (show: boolean) => void
}

export default function Humbuger({ active, handleActive }: HumbugerProps) {
  return (
    <div
      className='w-6 flex flex-col h-7 justify-evenly items-end cursor-pointer md:hidden'
      onClick={() => handleActive(!active)}
    >
      <span
        className={`h-1 bg-[#9b0102] ${
          active
            ? 'rotate-45 origin-left transition-all ease-in duration-300'
            : 'bg-white transition-all ease-in duration-300'
        } w-full`}
      ></span>
      <span
        className={`h-1 ${active ? 'opacity-0' : 'bg-[#9b0102]'} w-full`}
      ></span>
      <span
        className={`h-1 bg-[#9b0102] ${
          active
            ? '-rotate-45 origin-left transition-all ease-in duration-300'
            : 'bg-[#9b0102] transition-all ease-in duration-300'
        } w-full`}
      ></span>
      {/* <MobileMenu show={active} menuClick={() => setActive(false)} /> */}
    </div>
  )
}
