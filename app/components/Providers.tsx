'use client'
import React, { createContext, useState } from 'react'

type FeatureProps = {
  feature: number
  changeFeature: React.Dispatch<React.SetStateAction<number>>
}

type AuthProps = {
  user: null | {
    username: string
    password: string
  }
  setUser: React.Dispatch<
    React.SetStateAction<{
      username: string
      password: string
    }>
  >
}

type ProvidersProps = {
  children: React.ReactNode
}

export const FeatureContext = createContext<FeatureProps | null>(null)
export const AuthConstext = createContext<AuthProps | null>(null)

export default function Providers({ children }: ProvidersProps) {
  const [section, setSection] = useState(0)
  const [user, setUser] = useState({ username: '', password: '' })

  return (
    <AuthConstext.Provider value={{ user: user, setUser }}>
      <FeatureContext.Provider
        value={{ feature: section, changeFeature: setSection }}
      >
        {children}
      </FeatureContext.Provider>
    </AuthConstext.Provider>
  )
}
