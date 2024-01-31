import axios from "../../axios";
import { Client } from "./type";

export const fetchData = async (callBack: (data: Client[]) => void) => {
  await axios
    .get("/clients")
    .then((response) => {
      const data = response.data;
      data.forEach((value: Client) => {
        value.genreString = value.genre === 1 ? "Femme" : "Homme";
      });
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addClient = async (data: any) => {
  await axios
    .post("/clients", data)
    .then((response) => {
      alert("Client added");
    })
    .catch((error) => {
      alert(error);
    });
};
