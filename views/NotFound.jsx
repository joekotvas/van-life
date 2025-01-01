import React from "react";
import { Link } from "react-router-dom";

import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <main className="notfound-page">
      <div class="row">
        <section>
          <h1>Sorry, the page you were looking for was not found.</h1>
          <Link to="/" className="button secondary-button">
            Return to Home
          </Link>
        </section>
      </div>
    </main>
  );
}
