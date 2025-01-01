import React from "react";
import { Link } from "react-router-dom";

import "../../styles/HostVans.css";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/api/vans");
      const data = await res.json();
      setVans(data.vans.filter(({ hostId }) => hostId === "123"));
    })();
  }, []);

  const vansElements = vans.map(({ id, name, imageUrl, price }) => (
    <li className="host-vans-list-card" key={id}>
      <Link to={`./${id}`}>
        <img className="host-vans-list-card--image" src={imageUrl} alt={name} />
      </Link>
      <div className="host-vans-list-card--info">
        <h2 className="host-vans-list-card--title">
          <Link to={`./${id}`}>{name}</Link>
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
