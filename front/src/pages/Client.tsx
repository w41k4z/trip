import { Helmet } from "react-helmet-async";
import { ClientView } from "../sections/client/view";

const Client = () => {
  return (
    <>
      <Helmet>
        <title>Clients</title>
      </Helmet>
      <ClientView />
    </>
  );
};

export default Client;
