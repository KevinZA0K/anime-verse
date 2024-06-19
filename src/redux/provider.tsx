"use client"
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'


export const AuthProvider = ({children}: {children: React.ReactNode}) => {

  
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
