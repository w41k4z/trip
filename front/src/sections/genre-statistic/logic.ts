import axios from "../../axios";
import { TravelGenreStatistic } from "./type";

export const fetchData = async (
  callBack: (data: TravelGenreStatistic[]) => void,
  currentTravelId?: string
) => {
  await axios
    .get(`/client-reservations/stat/${currentTravelId}`)
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};
