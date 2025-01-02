import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { getVans } from "../../api.js";

import "../../styles/VanDetail.css";

export default function VanDetailView() {
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const location = useLocation();

  const { id } = useParams();

  console.log(vans, id - 1);
  const van = vans?.filter((van) => van.id === id)[0];

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    if (location.state?.vans) {
      setVans(location.state.vans);
    } else {
      loadVans();
    }
  }, []);

  const type = location.state?.type || "all";

  const title = van?.name ? `${van.name} | #VANLIFE` : "#VANLIFE";
  useTitle(title);

  if (loading) {
    return (
      <main className="page loading-page">
        <div className="row">
          <h1>Loading van details...</h1>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page error-page">
        <div className="row">
          <h1>Failed to load van...</h1>
          <p>{error.message}</p>
        </div>
      </main>
    );
  }

  return (
    vans && (
      <main className={`page van-detail-page ${!van ? "not-found" : ""}`}>
        <section className="van-detail-section">
          <div className="row">
            <Link
              to={location.state?.search ? `..${location.state.search}` : ".."}
              relative="path"
              className="van-detail-back-link"
            >
              Back to {type} vans
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
  );
}
