import { addClientReservation } from "../logic";
import useClientReservation from "../useClientReservation";

const ClientReservationView = ({ className = "" }: { className?: string }) => {
  const {
    fields,
    append,
    remove,
    register,
    handleSubmit,
    reset,
    clients,
    travels,
    isSubmitting,
    errors,
  } = useClientReservation();

  return (
    <form
      className={className}
      onSubmit={handleSubmit((data) => {
        addClientReservation(data);
        reset();
      })}
    >
      <h2>Réservation</h2>
      {fields.map((field, index) => (
        <section key={field.id}>
          <div className="col-auto col-lg-12 mb-4">
            <label
              className="form-label"
              htmlFor={`reservations[${index}].clientId`}
            >
              Client
            </label>
            <select
              className="form-select"
              id={`reservations[${index}].clientId`}
              {...register(`reservations.${index}.clientId`, {
                required: "Le client est necessaire",
              })}
            >
              <option value="-1">Choose</option>
              {clients.map((client, index) => {
                return (
                  <option key={`client-${index}`} value={client.id}>
                    {client.name + " " + client.firstName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-3 col-auto col-lg-12">
            <label
              className="form-label"
              htmlFor={`reservations[${index}].travelId`}
            >
              Voyage
            </label>
            <select
              className="form-select"
              id={`reservations[${index}].travelId`}
              {...register(`reservations.${index}.travelId`, {
                required: "Le voyage est necessaire",
              })}
            >
              <option value="-1">Choose</option>
              {travels.map((travel, index) => {
                return (
                  <option key={`travel-${index}`} value={travel.id}>
                    {travel.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-3 col-auto col-lg-12">
            <label
              className="form-label"
              htmlFor={`reservations[${index}].reservationDate`}
            >
              Date de reservation
            </label>
            <input
              className="form-control"
              id={`reservations[${index}].reservationDate`}
              type="date"
              {...register(`reservations.${index}.reservationDate`, {
                required: "La date de reservation est nécessaire",
              })}
            />
            {errors[`reservations.${index}.reservationDate`] && (
              <p className="alert alert-danger mt-2" role="alert">
                {errors[
                  `reservations.${index}.reservationDate`
                ]?.message?.toString()}
              </p>
            )}
          </div>
          <div className="mt-3 col-auto col-lg-12">
            <label
              className="form-label"
              htmlFor={`reservations[${index}].quantity`}
            >
              Quantité
            </label>
            <input
              className="form-control"
              id={`reservations[${index}].quantity`}
              type="number"
              {...register(`reservations.${index}.quantity`, {
                required: "La quantité est requise",
                min: {
                  value: 1,
                  message: "La quantité minimum doit etre superieur à 1",
                },
              })}
            />
            {errors[`reservations.${index}.quantity`] && (
              <p className="alert alert-danger mt-2" role="alert">
                {errors[
                  `reservations.${index}.reservationDate`
                ]?.message?.toString()}
              </p>
            )}
          </div>
          <div className="d-flex justify-content-end mt-2">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        </section>
      ))}
      <div className="d-flex justify-content-end mt-5">
        <button
          className="btn btn-outline-primary me-2"
          type="button"
          onClick={() =>
            append({
              clientId: "",
              travelId: "",
              reservationDate: "",
              quantity: "",
            })
          }
        >
          Ajouter plus reservation
        </button>
        <button disabled={isSubmitting} className="btn btn-outline-dark">
          Reserver
        </button>
      </div>
    </form>
  );
};

export default ClientReservationView;
