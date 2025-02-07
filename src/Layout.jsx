import React from 'react'
import { Outlet } from 'react-router'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

export default function () {
  return (
      <div>
          <Header />
          <Outlet />
          <Footer />
    </div>
  )
}
