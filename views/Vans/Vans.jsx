import React from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

import "../../styles/Vans.css";

import VanDetailView from "./VanDetail";
import VansCatalog from "./VansCatalog";

export default function VansView() {
  useTitle("Vans | #VANLIFE");

  const params = useParams();

  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/api/vans");
      const data = await res.json();
      setVans(data.vans);
    })();
  }, []);

  if (vans?.length > 0) {
    if (params.id) {
      return <VanDetailView vans={vans} vanId={params.id - 1} />;
    }

    return <VansCatalog vans={vans} />;
  }
}
