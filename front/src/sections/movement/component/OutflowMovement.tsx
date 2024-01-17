import useOutflowMovement from "./useOutflowMovement";

const OutflowMovement = ({ className = "" }: { className?: string }) => {
  const { handleSubmit, register, reset, travels } = useOutflowMovement();

  let travelOptions: [string, string][] = [];
  // eslint-disable-next-line array-callback-return
  travels.map((travel) => {
    travelOptions.push([travel.id.toString(), travel.name]);
  });

  return (
    <form
      className={className}
      onSubmit={handleSubmit((data) => {
        // addEntryMovement(data);
        reset();
      })}
    >
      <h2>Sortie</h2>
      <div className="col-auto col-lg-12">
        <label className="form-label" htmlFor="travelId">
          Réservation
        </label>
        <select className="form-select" id="travelId" {...register("travelId")}>
          <option value="-1">Choose</option>
          {travelOptions.map((option, index) => {
            return (
              <option key={`option-${index}`} value={option.at(0)}>
                {option.at(1)}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-3 col-auto col-lg-12">
        <label className="form-label" htmlFor="quantity">
          Quantité
        </label>
        <input
          className="form-control"
          type="number"
          id="quantity"
          {...register("quantity")}
        />
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button className="btn btn-outline-dark">Valider</button>
      </div>
    </form>
  );
};

export default OutflowMovement;
