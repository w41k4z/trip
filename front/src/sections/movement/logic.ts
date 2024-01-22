import axios from "../../axios";
import { StockState } from "./component/type";

export const fetchData = async (callback: (data: StockState[]) => void) => {
  await axios
    .get("/stock-movements/stock-states")
    .then((response) => {
      const data = response.data;
      data.forEach((element: StockState) => {
        element.activityName = element.activity.name;
      });
      callback(data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addEntryMovement = async (data: any) => {
  await axios
    .post("/stock-movements/in", data)
    .then((response) => {
      alert("Mouvement d'entrée ajouté");
    })

    .catch((error) => {
      alert(error);
    });
};

export const addOutflowMovement = async (data: any) => {
  await axios
    .post("/stock-movements/out", data)
    .then((response) => {
      alert("Mouvement de sortie ajouté");
    })
    .catch((error) => {
      alert(error);
    });
};
