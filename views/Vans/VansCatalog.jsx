import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/VansCatalog.css'

export default function VansCatalog({ vans }) {
  return (
    <main className="page vans-page">
      <div className="row">
        <h1>Explore our van options</h1>
        <div className="vans-filters">
          <span className="van-tag van-tag-filter">Simple</span>
          <span className="van-tag van-tag-filter">Luxury</span>
          <span className="van-tag van-tag-filter">Rugged</span>
          <span className="van-clear-filters">Clear filters</span>
        </div>
      </div>
      <section className="row vans-grid">
        {vans.map(van => (
          <div className="van-card" key={van.id}>
            <Link to={`/vans/${van.id}`}>
              <img className="van-image" src={van.imageUrl} alt={van.title} />
            </Link>
            <div className="van-price-container">
              <span className="van-price-amount">${van.price}</span>
              <span className="van-price-per-day">/day</span>
            </div>
            <h2 className="van-title">
              <Link to={`/vans/${van.id}`}>{van.name}</Link>
            </h2>
            <span className={`van-tag van-tag--${van.type}`}>
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </span>
          </div>
        ))}
      </section>
    </main>
  )
}
