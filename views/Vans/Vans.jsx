import useTitle from "../../hooks/useTitle";
import useVans from "../../hooks/useVans.jsx";

import "../../styles/Vans.css";

import VansCatalog from "./VansCatalog";

export default function VansView() {
  useTitle("Vans | #VANLIFE");

  const { vans, status } = useVans({});

  if (status.loading) {
    return (
      <main className="page loading-page">
        <div className="row">
          <h1>Loading vans...</h1>
        </div>
      </main>
    );
  }

  if (status.error) {
    return (
      <main className="page error-page">
        <div className="row">
          <h1>Failed to load vans...</h1>
          <p>{status.error.message}</p>
        </div>
      </main>
    );
  }

  return <VansCatalog vans={vans} />;
}
