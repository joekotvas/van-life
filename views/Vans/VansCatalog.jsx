import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import '../../styles/VansCatalog.css'

export default function VansCatalog({ vans }) {

  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")

  if (typeFilter) {
    vans = vans.filter(van => van.type === typeFilter)
  }

  const getFilterClassName = (type) => {
    return `van-tag van-tag-filter van-tag--${type} ${typeFilter === type ? 'selected' : ''}`
  }

  return (
    <main className="page vans-page">
      <div className="row">
        <h1>Explore our van options</h1>
        <div className="vans-filters">
          <button 
            className={getFilterClassName('simple')}
            onClick={() => setSearchParams({type:'simple'})}
          >
            Simple
          </button>
          <button
            className={getFilterClassName('luxury')}
            onClick={() => setSearchParams({type:'luxury'})}
          >
            Luxury
          </button>
          <button
            className={getFilterClassName('rugged')}
            onClick={() => setSearchParams({type:'rugged'})}  
          >
            Rugged
          </button>
          {typeFilter && (
            <span className="van-clear-filters"><Link to=".">Clear filters</Link></span>
          )}
        </div> 
      </div>
      <section className="row vans-grid">
        {vans.map(van => (
          <div className="van-card" key={van.id}>
            <Link to={`${van.id}`} state={ {search: searchParams.toString()} }>
              <img className="van-image" src={van.imageUrl} alt={van.title} />
            </Link>
            <div className="van-price-container">
              <span className="van-price-amount">${van.price}</span>
              <span className="van-price-per-day">/day</span>
            </div>
            <h2 className="van-title">
              <Link to={`${van.id}`}>{van.name}</Link>
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
