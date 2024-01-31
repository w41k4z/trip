import { Helmet } from "react-helmet-async";
import { ClientReservationView } from "../sections/client-reservation/view";

const ClientReservation = () => {
  return (
    <>
      <Helmet>
        <title>Clients</title>
      </Helmet>
      <ClientReservationView />
    </>
  );
};

export default ClientReservation;
