import { useState, useEffect } from "react";
import axios from "axios";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios('./appData.json')
      .then(response => setApps(response.data)) // response.data নিতে হবে
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { apps, loading, error };
}

export default useApps;
