import { TableActionType } from "../../components/datatable/GenericTable";
import { addGrade } from "./logic";

export const tableAction: TableActionType = {
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
    ],
    onSubmit: async (data) => {
      addGrade(data);
    },
  },
  hasFeature: {
    hasExportPdf: true,
  },
};
