import { TableActionType } from "../../components/datatable/GenericTable";
import { addTravelEmployee } from "./logic";

export const tableAction = (
  travelOptions: [string, string][],
  employeeOptions: [string, string][]
) => {
  const result: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nouveau employé à un voyage",
      fields: [
        {
          name: "travelId",
          label: "Voyage",
          type: "select",
          selectValues: travelOptions,
        },
        {
          name: "employeeId",
          label: "Employée",
          type: "select",
          selectValues: employeeOptions,
        },
        {
          name: "duration",
          label: "Durée (heure)",
          type: "number",
          step: "0.01",
          options: {
            required: "Le nombre d'heure est obligatoire",
            min: {
              value: 0,
              message: "Le nombre d'heure doit etre superieur à 0",
            },
          },
        },
      ],
      onSubmit: async (data) => {
        addTravelEmployee(data);
      },
    },
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return result;
};
