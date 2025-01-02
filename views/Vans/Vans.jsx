import React from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { getVans } from "../../api.js";

import "../../styles/Vans.css";

import VanDetailView from "./VanDetail";
import VansCatalog from "./VansCatalog";

export default function VansView() {
  useTitle("Vans | #VANLIFE");

  const params = useParams();

  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    async function loadVans() {
      const data = await getVans();
      setVans(data);
    }

    loadVans();
  }, []);

  if (vans?.length > 0) {
    if (params.id) {
      return <VanDetailView vans={vans} vanId={params.id - 1} />;
    }

    return <VansCatalog vans={vans} />;
  }
}
