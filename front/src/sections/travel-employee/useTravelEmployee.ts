import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import useTravel from "../travel/useTravel";
import { TravelEmployeeType } from "./travelEmployee";
import useEmployee from "../employee/useEmployee";

const useTravelEmployee = () => {
  const { travels } = useTravel();
  const { employees } = useEmployee();
  const [currentTravelId, setCurrentTravelId] = useState<string>();
  const [travelEmployees, setTravelEmployees] =
    useState<TravelEmployeeType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(currentTravelId, setTravelEmployees).then(() => {
      setLoading(false);
    });
  }, [currentTravelId]);

  return {
    travels,
    employees,
    setCurrentTravelId,
    travelEmployees,
    loading,
  };
};

export default useTravelEmployee;
