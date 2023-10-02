import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './server'

import Layout from './components/Layout'

import Home from './views/Home'
import About from './views/About'

import Vans from './views/Vans/Vans'
import VanDetail from './views/Vans/VanDetail'

import Host from './views/Host/Host'
import HostDashboard from './views/Host/Dashboard'
import HostIncome from './views/Host/Income'
import HostVans from './views/Host/HostVans'
import HostVanDetail from './views/Host/HostVanDetail'
import HostReviews from './views/Host/Reviews'

import './styles/Index.css'
import SiteHeader from './components/SiteHeader/SiteHeader'
import SiteFooter from './components/SiteFooter/SiteFooter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Vans />} />

          <Route path="host" element={<Host />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
            <Route path="reviews" element={<HostReviews />} />
          </Route>

          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
