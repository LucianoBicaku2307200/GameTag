import axios from "axios";
import { useEffect, useState } from "react";

export const useGetGames = (endpoint_url, size) => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`${endpoint_url}+${size}`)
      .then((res) => {
        setGame(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return { loading, game };
};
