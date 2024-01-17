import axios from "../../axios";

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
