import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/VanDetail.css'

export default function VanDetailView({ vans, vanId }) {
  const van = vans[vanId]
  return (
    <main className={`page van-detail-page ${!van ? 'not-found' : ''}`}>
      <section className="van-detail-section">
        <div className="row">
          <Link to="/vans" className="van-detail-back-link">
            Back to all Vans
          </Link>

          {van ? (
            <>
              <img
                className="van-detail-image"
                src={van.imageUrl}
                alt={van.name}
              />
              <span className={`van-tag van-tag--${van.type}`}>
                {van.type[0].toUpperCase() + van.type.slice(1)}
              </span>
              <h1 className="van-detail-title">{van.name}</h1>
              <div className="van-detail-price-container">
                <span className="van-detail-price-amount">${van.price}</span>
                <span className="van-detail-price-per-day">/day</span>
              </div>
              <div className="van-detail-description">
                <p>{van.description}</p>
              </div>
              <Link to="/vans" className="button van-detail-cta-button">
                Rent this van
              </Link>
            </>
          ) : (
            <h1 className="van-detail-title">Van not found</h1>
          )}
        </div>
      </section>
    </main>
  )
}
