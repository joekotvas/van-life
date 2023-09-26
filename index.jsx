import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './server'

import Layout from './components/Layout'

import HomeView from './views/Home'
import AboutView from './views/About'
import VansView from './views/Vans/Vans'
import VanDetailView from './views/Vans/VanDetail'

import './styles/Index.css'
import SiteHeader from './components/SiteHeader/SiteHeader'
import SiteFooter from './components/SiteFooter/SiteFooter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/vans" element={<VansView />} />
          <Route path="/vans/:id" element={<VansView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
