import React from "react";
import { getVans, getHostVans } from "../api";

export default function useVans({ vanData = [], hostId = null }) {
  const [vans, setVans] = React.useState(vanData);
  const [status, setStatus] = React.useState({
    ok: false,
    loading: false,
    error: null,
  });

  React.useEffect(() => {
    async function loadVans(hostId) {
      setStatus((prevStatus) => ({ ...prevStatus, loading: true }));
      try {
        if (hostId) {
          const data = await getHostVans(hostId);
          setVans(data);
        } else {
          const data = await getVans();
          setVans(data);
        }
        setStatus({ loading: false, ok: true });
      } catch (error) {
        setStatus({ loading: false, error });
      }
    }

    if (!vans || !vans.length) {
      loadVans(hostId);
    }
  }, []);

  return { vans, status };
}
