import useTitle from "../../hooks/useTitle";
import useVans from "../../hooks/useVans.jsx";

import "../../styles/Vans.css";

import VansCatalog from "./VansCatalog";

export default function VansView() {
  useTitle("Vans | #VANLIFE");

  const { loading, error, vans } = useVans({});

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
