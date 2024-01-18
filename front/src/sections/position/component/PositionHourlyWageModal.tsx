import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addPositionHourlyWage } from "../logic";

type ModalProps = {
  hideModal: () => void;
  positionOptions: [string, string][];
};

const PositionHourlyWageModal = ({
  hideModal,
  positionOptions,
}: ModalProps) => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
    reset,
  } = useForm();

  return (
    <Modal show onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un nouveau salaire horaire à un poste</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit((data) => {
            addPositionHourlyWage(data);
            reset();
          })}
          className="row g-3 px-3 pt-3"
        >
          <div className="col-auto col-lg-12">
            <label className="form-label" htmlFor="positionId">
              Poste
            </label>
            <select
              className="form-select"
              id="positionId"
              {...register("positionId")}
            >
              {positionOptions.map((option, index) => {
                return (
                  <option key={`option-${index}`} value={option.at(0)}>
                    {option.at(1)}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-auto col-lg-12">
            <label className="form-label" htmlFor="hourlyWage">
              Salaire horaire de base
            </label>
            <input
              className="form-control"
              type="number"
              step="0.01"
              id="hourlyWage"
              {...register("salary")}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary">Ajouter</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default PositionHourlyWageModal;
