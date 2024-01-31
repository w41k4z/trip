import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { Client } from "./type";

const useClient = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setClients).then(() => {
      setLoading(false);
    });
  }, []);

  return { clients, loading };
};

export default useClient;
