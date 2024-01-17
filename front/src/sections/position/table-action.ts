import { TableActionType } from "../../components/datatable/GenericTable";
import { addPosition } from "./logic";

export const tableAction: TableActionType = {
  addAction: {
    formTitle: "Ajouter une nouvelle poste",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Nom",
        options: {
          required: "Le nom d'une nouvelle poste est obligatoire",
        },
      },
    ],
    onSubmit: async (data) => {
      addPosition(data);
    },
  },
  hasFeature: {
    hasExportPdf: true,
  },
};
