import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Nom",
    propTarget: "name",
    format: "default",
  },
  {
    name: "Durée",
    propTarget: "durationName",
    format: "default",
  },
  {
    name: "Catégorie",
    propTarget: "categoryName",
    format: "default",
  },
  {
    name: "Bouquet",
    propTarget: "subscriptionTierName",
    format: "default",
  },
  {
    name: "Prix de vente",
    propTarget: "salePrice",
    format: "currency",
  },
  {
    name: "Prix",
    propTarget: "totalPrice",
    format: "currency",
  },
  {
    name: "Bénefice",
    propTarget: "profit",
    format: "currency",
  },
];
