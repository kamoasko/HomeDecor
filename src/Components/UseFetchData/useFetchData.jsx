import { useState, useEffect } from "react";
import { fetchData } from "./api";

function useFetchData(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        setLoading(true);
        const fetchedData = await fetchData(endpoint);
        setData(fetchedData);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    }

    fetchDataAsync();
  }, [endpoint]);

  return { data, loading, error };
}

export default useFetchData;
