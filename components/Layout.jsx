import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import Header from './SiteHeader/SiteHeader'
import Footer from './SiteFooter/SiteFooter'

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
