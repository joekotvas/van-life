import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/About.css'
import StarryNightImg from '../images/starry-night.png'

export default function AboutView() {

  React.useEffect(() => {
    document.title = "About | #VANLIFE"
  }, [])

  return (
    <main className="about-page">
      <div class="row">
        <img className="about-page-header-image" src={StarryNightImg} alt="Relaxing on the roof of a travel van beneath a starry sky." />
        <section className="about-intro-section">
            <h1 className="about-intro-title">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <div className="about-intro-content">
            <p>
              Our mission is to enliven your road trip with the perfect travel van rental. 
              Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br />
              (Hitch costs extra 😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            </div>
        </section>
        <section className="about-cta-section">
            <h2 className="about-cta-title">
                Your destination is waiting.<br/>
                Your van is ready.
            </h2>
            <Link to="/vans" className="about-cta-button">Explore our vans</Link>
        </section>
      </div>
    </main>
  )
}