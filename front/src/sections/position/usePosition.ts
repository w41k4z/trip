import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { PositionType } from "./position";

const usePosition = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [positions, setPositions] = useState<PositionType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setPositions).then(() => {
      setLoading(false);
    });
  }, []);

  const showModal = () => setModalVisibility(true);
  const hideModal = () => setModalVisibility(false);

  return { positions, loading, modalVisibility, showModal, hideModal };
};

export default usePosition;
