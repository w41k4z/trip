import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { ActivityType } from "./activity";

const useActivity = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setActivities).then(() => {
      setLoading(false);
    });
  }, []);

  const showModal = () => setModalVisibility(true);
  const hideModal = () => setModalVisibility(false);

  return { activities, loading, modalVisibility, showModal, hideModal };
};

export default useActivity;
