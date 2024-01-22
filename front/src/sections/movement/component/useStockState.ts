import { useEffect, useState } from "react";
import { StockState } from "./type";
import { fetchData } from "../logic";

const useStockState = () => {
  const [stocks, setStocks] = useState<StockState[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setStocks).then(() => {
      setLoading(false);
    });
  }, []);

  return { loading, stocks };
};

export default useStockState;
