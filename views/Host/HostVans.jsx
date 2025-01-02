import React from "react";
import { Link } from "react-router-dom";

import { getHostVans } from "../../api.js";

import "../../styles/HostVans.css";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadHostVans() {
      try {
        setLoading(true);
        const data = await getHostVans();
        setVans(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadHostVans();
  }, []);

  if (loading) {
    return (
      <section className="host-vans-section">
        <h1>Loading your vans...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="host-vans-section">
        <h1>Failed to load your vans...</h1>
        <p>{error.message}</p>
      </section>
    );
  }

  const vansElements = vans.map(({ id, name, imageUrl, price }) => (
    <li className="host-vans-list-card" key={id}>
      <Link to={`./${id}`} state={{ type: "your", vans: vans }}>
        <img className="host-vans-list-card--image" src={imageUrl} alt={name} />
      </Link>
      <div className="host-vans-list-card--info">
        <h2 className="host-vans-list-card--title">
          <Link to={`./${id}`} state={{ type: "your", vans: vans }}>
            {name}
          </Link>
        </h2>
        <p className="host-vans-list-card--price">${price} / day</p>
      </div>
    </li>
  ));

  return (
    <section className="host-vans-section">
      <h1>Your listed vans</h1>
      <ul className="host-vans-list">{vansElements}</ul>
    </section>
  );
}
