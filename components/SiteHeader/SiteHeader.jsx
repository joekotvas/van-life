import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/SiteHeader.css'

export default function SiteHeader() {
    return (
    <nav className="site-nav">
        <Link to="/" className="site-nav-link logo">#VANLIFE</Link>
        <Link to="/about" className="site-nav-link">About</Link>
        <Link to="/vans" className="site-nav-link">Vans</Link>
    </nav>
    )
}