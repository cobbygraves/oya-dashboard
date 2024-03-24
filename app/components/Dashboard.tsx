'use client'
import { useContext, useState } from 'react'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
import { Layout, Grid } from 'antd'
import { Popover } from 'antd'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Home from './Home'
import Humbuger from './Humbuger'
import { FeatureContext, AuthConstext } from './Providers'
import Logout from './Logout'
const { useBreakpoint } = Grid
const { Header, Content, Sider } = Layout

const sideNav = ['Dashboard', 'Bus Ride', 'Parcel', 'Hiring', 'HSHS', 'Fuel']

const Dashboard = () => {
  const ctx = useContext(FeatureContext)
  const actx = useContext(AuthConstext)
  const [mobileMenu, setMobileMenu] = useState(false)
  const screens = useBreakpoint()

  const showMobileMenu = (value: boolean) => {
    setMobileMenu(value)
  }

  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        style={{
          position: 'fixed',
          top: 0,
          height: '200vh',
          background: 'white',
          zIndex: 100,
          boxShadow: '0 10px 10px rgb(0 0 0 / 0.25)'
        }}
      >
        <div className='h-screen'>
          <div className='flex flex-col px-2 gap-y-4 mt-[85px]'>
            {sideNav.map((navItem, index) => (
              <div>
                <p
                  key={navItem}
                  className={`font-semibold text-xl ml-3 hover:cursor-pointer hover:text-[#9B0102] ${
                    ctx?.feature === index ? 'text-[#9B0102]' : ''
                  }`}
                  onClick={() => {
                    ctx?.changeFeature(index)
                  }}
                >
                  {navItem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            width: '100%',
            paddingRight: '2%',
            paddingLeft: '2%',
            zIndex: 200,
            position: 'fixed',
            background: 'white',
            boxShadow: '0 10px 10px -10px rgb(0 0 0 / 0.25)'
          }}
        >
          <div className='h-full w-full flex items-center justify-between'>
            <div className='flex items-center gap-x-2 mt-3 mb-6'>
              <Image
                height={65}
                width={65}
                src='/OyaLogo.png'
                alt='logo'
                objectFit='cover'
              />

              <h3 className='font-bold text-2xl'>Oya!</h3>
            </div>

            <div className='flex items-center gap-x-3'>
              <div className='hidden md:flex items-center'>
                <div className='flex items-center'>
                  <Popover content={<Logout />}>
                    <div className='flex items-center cursor-pointer hover:text-[#B40303]'>
                      {actx?.user?.username !== '' ? (
                        <p>{actx?.user?.username.split(' ')[0]}</p>
                      ) : (
                        <FaUser size={20} />
                      )}
                      <RiArrowDropDownLine size={25} />
                    </div>
                  </Popover>
                </div>
              </div>
              <Humbuger active={mobileMenu} handleActive={showMobileMenu} />
            </div>
          </div>
        </Header>
        <Content
          style={{
            position: 'relative',
            background: 'white',

            width: screens.xs ? '90%' : '80%',
            margin: `95px 5% 100px ${screens.xs ? '5%' : '18%'}`
          }}
        >
          <Home feature={ctx?.feature} />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Dashboard
