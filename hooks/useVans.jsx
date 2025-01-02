import React from "react";
import { getVans, getHostVans } from "../api";

export default function useVans({ vanData = [], hostId = null }) {
  const [vans, setVans] = React.useState(vanData);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVans(hostId) {
      setLoading(true);
      try {
        if (hostId) {
          const data = await getHostVans(hostId);
          setVans(data);
        } else {
          const data = await getVans();
          setVans(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    if (!vans || !vans.length) {
      loadVans(hostId);
    }
  }, []);

  return { vans, loading, error };
}
