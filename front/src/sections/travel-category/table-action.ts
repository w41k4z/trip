import { TableActionType } from "../../components/datatable/GenericTable";
import { addTravelCategory } from "./logic";

export const tableAction: TableActionType = {
  addAction: {
    formTitle: "Ajouter une nouvelle categorie de voyage",
    fields: [
      {
        name: "category",
        type: "text",
        label: "Categorie",
        options: {
          required:
            "Le categorie d'une nouvelle categorie de voyage est obligatoire",
        },
      },
    ],
    onSubmit: async (data) => {
      addTravelCategory(data);
    },
  },
  hasFeature: {
    hasExportPdf: true,
  },
};
