import { TableActionType } from "../../components/datatable/GenericTable";
import { addTravel } from "./logic";

export const tableAction = (
  durationOptions: [string, string][],
  travelCategoryOptions: [string, string][],
  subscriptionTierOptions: [string, string][]
) => {
  const result: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nouveau voyage",
      fields: [
        {
          name: "name",
          label: "Nom",
          type: "text",
          options: {
            required: "Le nom est obligatoire",
          },
        },
        {
          name: "durationId",
          label: "Durée",
          type: "select",
          selectValues: durationOptions,
        },
        {
          name: "travelCategoryId",
          label: "Catégorie",
          type: "select",
          selectValues: travelCategoryOptions,
        },
        {
          name: "subscriptionTierId",
          label: "Bouquet",
          type: "select",
          selectValues: subscriptionTierOptions,
        },
        {
          name: "salePrice",
          label: "Prix de vente",
          type: "number",
          defaultValue: 0,
          step: "0.01",
          options: {
            required: "Le prix de vente est obligatoire",
            min: {
              value: 0,
              message: "Le prix de vente doit etre superieur à 0",
            },
          },
        },
      ],
      onSubmit: async (data) => {
        addTravel(data);
      },
    },
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return result;
};
