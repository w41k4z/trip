import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Voyage",
    propTarget: "travel",
    format: "default",
  },
  {
    name: "Durée",
    propTarget: "duration",
    format: "default",
  },
  {
    name: "Categorie",
    propTarget: "category",
    format: "default",
  },
  {
    name: "Bouquet",
    propTarget: "subscriptionTier",
    format: "default",
  },
  {
    name: "Activité",
    propTarget: "activity",
    format: "default",
  },
  {
    name: "Nombre d'activités",
    propTarget: "activityCount",
    format: "number",
  },
];
