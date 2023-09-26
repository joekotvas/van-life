import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.css'

export default function HomeView() {

  React.useEffect(() => {
    document.title = "#VANLIFE"
  }, [])

  return (
    <main className="page home-page">
      <section className="hero-section">
        <div className="row">
          <h1 className="hero-title">
            You got the travel plans, we got the travel vans.
          </h1>
          <div className="hero-content">
            <p>
              Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
          </div>
          <Link to="/vans" className="hero-cta button">Find your van</Link>
        </div>
      </section>
    </main>
  )
}