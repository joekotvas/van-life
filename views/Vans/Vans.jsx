import React from "react";

import useTitle from "../../hooks/useTitle";
import { getVans } from "../../api.js";

import "../../styles/Vans.css";

import VansCatalog from "./VansCatalog";

export default function VansView() {
  useTitle("Vans | #VANLIFE");

  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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

    loadVans();
  }, []);

  if (loading) {
    return (
      <main className="page loading-page">
        <div className="row">
          <h1>Loading vans...</h1>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page error-page">
        <div className="row">
          <h1>Failed to load vans...</h1>
          <p>{error.message}</p>
        </div>
      </main>
    );
  }

  return <VansCatalog vans={vans} />;
}
