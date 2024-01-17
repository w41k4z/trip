import { TableActionType } from "../../components/datatable/GenericTable";
import { addEmployee } from "./logic";

export const tableAction = (gradeOptions: [string, string][]) => {
  const tableAction: TableActionType = {
    addAction: {
      formTitle: "Ajouter une nouvelle durée",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nom",
          options: {
            required: "Le nom d'un nouveau grade est obligatoire",
          },
        },
        {
          name: "firstName",
          type: "text",
          label: "Prenom",
        },
        {
          name: "gradeId",
          label: "Grade",
          type: "select",
          selectValues: gradeOptions
        },
      ],
      onSubmit: async (data) => {
        addEmployee(data);
      },
    },
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableAction;
};
