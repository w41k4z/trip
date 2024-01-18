import { TableActionType } from "../../components/datatable/GenericTable";
import { addPositionGrade } from "./logic";

export const tableAction = (positionOptions: [string, string][]) => {
  const result: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nouveau grade à un poste",
      fields: [
        {
          name: "positionId",
          label: "Poste",
          type: "select",
          selectValues: positionOptions,
        },
        {
          name: "grade",
          label: "Grade",
          type: "text",
          options: {
            required: "Le grade est requis",
          },
        },
        {
          name: "increase",
          label: "Majoration (x 100%)",
          type: "number",
          step: "0.01",
        },
      ],
      onSubmit: async (data) => {
        addPositionGrade(data);
      },
    },
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return result;
};
