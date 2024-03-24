'use client'
import { useState, useContext } from 'react'
// import { useRouter } from 'next/navigation'
import { Button, notification } from 'antd'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { registeredUsers } from '../utils/users'
import { AuthConstext } from './Providers'
import Image from 'next/image'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

function Login() {
  // const router = useRouter()
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [type, setType] = useState('password')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [signup, setSignup] = useState(false)
  const [loading, setLoading] = useState(false)
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordConfirmError, setPasswordConfirmError] = useState(false)
  const [api, contextHolder] = notification.useNotification()

  const authCTX = useContext(AuthConstext)

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'LOGIN FAILED',
      description: 'Wrong Username or Password'
    })
  }

  const handleToggle = () => {
    if (type === 'password') {
      setPasswordVisible(true)
      setType('text')
    } else {
      setPasswordVisible(false)
      setType('password')
    }
  }

  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     )
  // }

  const loginHandler = async () => {
    if (signup) {
      if (
        username.trim() === '' &&
        password.trim() === '' &&
        passwordConfirm.trim() === ''
      ) {
        setUsernameError(true)
        setPasswordError(true)
        setPasswordConfirmError(true)
        return
      }

      if (
        username.trim() === '' &&
        password.trim() === passwordConfirm.trim()
      ) {
        return setUsernameError(true)
      }

      if (password.trim() !== passwordConfirm.trim()) {
        return setPasswordConfirmError(true)
      }
      if (
        username.trim() !== '' &&
        password.trim() !== passwordConfirm.trim()
      ) {
        setPasswordError(true)
        setPasswordConfirmError(true)
        return
      }
      registeredUsers.push({ username, password })
      openNotificationWithIcon('success')
      authCTX?.setUser({ username, password })
    } else {
      if (username.trim() === '' && password.trim() === '') {
        setUsernameError(true)
        setPasswordError(true)
        return
      }
      if (username.trim() === '') {
        return setUsernameError(true)
      }

      if (password.trim() === '') {
        return setPasswordError(true)
      }
      setLoading(true)
      const loginUser = registeredUsers.find(
        (user) => user.username === username
      )
      if (loginUser?.password === password) {
        authCTX?.setUser({ username, password })
      } else {
        openNotificationWithIcon('error')
      }
      setLoading(false)
    }
  }

  const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (usernameError) {
      setUsernameError(false)
    }

    setUsername(event.target.value)
  }

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (passwordError) {
      setPasswordError(false)
    }
    setPassword(event.target.value)
  }

  const passwordConfirmHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (passwordConfirmError) {
      setPasswordConfirmError(false)
    }
    setPasswordConfirm(event.target.value)
  }

  return (
    <div className='h-full flex justify-center items-center'>
      {contextHolder}
      <form className='w-11/12 md:w-2/6 -mt-[200px] md:mt-0'>
        <div className='shadow-2xl p-3 rounded-xl'>
          <div className='flex justify-center'>
            <Image src='/OyaLogo.png' width={150} height={150} alt='Oya Logo' />
          </div>

          <h3 className='text-5xl mb-2 text-center'>
            {' '}
            {signup ? 'Signup' : 'Login'}
          </h3>

          <div className='flex flex-col'>
            <div>
              <div className='flex items-center gap-1'>
                <label className='font-semibold'>Email</label>
                {usernameError ? (
                  <p className='text-red-600 ml-1 text-xs'>
                    required email or username
                  </p>
                ) : null}
              </div>
              <input
                className='w-full h-9 py-1 px-3 accent-[#9b0102]  rounded-2xl my-2 bg-gray-100 focus:bg-white'
                type='email'
                placeholder='email or username'
                value={username}
                onChange={usernameHandler}
              />
            </div>
            <div>
              <div className='flex items-center gap-1'>
                <label className='font-semibold'>Password</label>
                {passwordError ? (
                  <p className='text-red-600 ml-1 text-xs'>required password</p>
                ) : null}
              </div>
              <div className='flex items-center'>
                <input
                  type={type}
                  className='w-full h-9 py-1 px-3  accent-[#9b0102]  rounded-2xl my-2 bg-gray-100  focus:bg-white'
                  value={password}
                  onChange={passwordHandler}
                  placeholder='password'
                />
                {password !== '' && !signup ? (
                  <span
                    className='flex justify-around items-center cursor-pointer'
                    onClick={handleToggle}
                  >
                    {passwordVisible ? (
                      <AiOutlineEyeInvisible
                        size={25}
                        className='absolute mr-10'
                      />
                    ) : (
                      <AiOutlineEye className='absolute mr-10' size={25} />
                    )}
                  </span>
                ) : null}
              </div>
            </div>
            {signup && (
              <div>
                <div className='flex items-center gap-1'>
                  <label className=' font-semibold'>Confirm Password</label>
                  {passwordConfirmError ? (
                    <p className='text-red-600 ml-1 text-xs'>
                      password mismatch
                    </p>
                  ) : null}
                </div>
                <div className='flex items-center'>
                  <input
                    type='password'
                    className='w-full h-9 py-1 px-3 rounded-2xl my-2 bg-gray-100  accent-[#9b0102] focus:bg-white'
                    value={passwordConfirm}
                    onChange={passwordConfirmHandler}
                    placeholder='repeat password'
                  />
                  {password !== '' && !signup ? (
                    <span
                      className='flex justify-around items-center cursor-pointer'
                      onClick={handleToggle}
                    >
                      {passwordVisible ? (
                        <AiOutlineEyeInvisible
                          size={25}
                          className='absolute mr-10'
                        />
                      ) : (
                        <AiOutlineEye className='absolute mr-10' size={25} />
                      )}
                    </span>
                  ) : null}
                </div>
              </div>
            )}

            <Button
              style={{
                height: 50,
                width: '100%',
                borderRadius: 25,
                backgroundColor: '#9b0102',
                marginTop: 8,
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold'
              }}
              onClick={loginHandler}
              loading={loading}
            >
              {signup ? 'Signup' : 'Login'}
            </Button>
          </div>
          {signup ? (
            <p className=' text-xs text-gray-400 mt-3 px-5'>
              Have an account{' '}
              <span
                className='text-red-500 pl-2 cursor-pointer'
                onClick={() => setSignup(false)}
              >
                Login
              </span>
            </p>
          ) : (
            <p className=' text-xs text-gray-400 mt-3 px-5'>
              Don't have an account{' '}
              <span
                className='text-red-500 pl-2 cursor-pointer'
                onClick={() => setSignup(true)}
              >
                Signup
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
