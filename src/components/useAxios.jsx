import { useEffect, useState } from "react";
import axios from "axios";
export default function useAxios(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000${url}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { data, error, loading };
}
