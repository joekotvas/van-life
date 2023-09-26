import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './server'

import HomeView from './views/Home'
import AboutView from './views/About'
import VansView from './views/Vans'
import VanDetailView from './views/VanDetail'

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
      <SiteFooter />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
