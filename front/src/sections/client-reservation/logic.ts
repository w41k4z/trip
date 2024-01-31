import axios from "../../axios";

export const addClientReservation = async (data: any) => {
  await axios
    .post("/client-reservations", data)
    .then((response) => {
      console.log(response);
      if (response.data) {
        alert(response.data);
      } else {
        alert("Client reservation added");
      }
    })
    .catch((error) => {
      alert(error);
    });
};
