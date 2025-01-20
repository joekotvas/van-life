import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import useVans from "../../hooks/useVans";

import "../../styles/VanDetail.css";

export default function HostVanDetail() {
  const location = useLocation();

  const { id } = useParams();

  const { vans, status } = useVans({
    vanData: location.state?.vans,
  });

  const van = vans?.filter((van) => van.id === id)[0];

  const type = location.state?.type || "all";

  const title = van?.name ? `${van.name} | #VANLIFE` : "#VANLIFE";
  useTitle(title);

  if (status.loading) {
    return (
      <main className="page loading-page">
        <div className="row">
          <h1>Loading van details...</h1>
        </div>
      </main>
    );
  }

  if (status.error) {
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
              to={
                location.state?.search
                  ? `..${location.state.search}`
                  : "/host/vans"
              }
              relative="path"
              className="van-detail-back-link"
            >
              Back to {type} vans
            </Link>

            {van ? (
              <div className="host-van-detail">
                <div className="host-van-detail-top-row">
                  <img
                    className="host-van-detail-image"
                    src={van.imageUrl}
                    alt={van.name}
                  />
                  <div>
                    <span className={`van-tag van-tag--${van.type}`}>
                      {van.type[0].toUpperCase() + van.type.slice(1)}
                    </span>
                    <h1 className="van-detail-title">{van.name}</h1>
                    <div className="van-detail-price-container">
                      <span className="van-detail-price-amount">
                        ${van.price}
                      </span>
                      <span className="van-detail-price-per-day">/day</span>
                    </div>
                  </div>
                </div>
                <div className="host-van-detail-tabs">
                  <nav className="host-van-detail-tabs-nav">
                    <NavLink to={`/host/vans/${id}`} end>
                      Details
                    </NavLink>
                    <NavLink to={`/host/vans/${id}/pricing`}>Pricing</NavLink>
                    <NavLink to={`/host/vans/${id}/photos`}>Photos</NavLink>
                  </nav>
                  <Outlet context={{ van }} />
                </div>
              </div>
            ) : (
              <h1 className="van-detail-title">Van not found</h1>
            )}
          </div>
        </section>
      </main>
    )
  );
}
