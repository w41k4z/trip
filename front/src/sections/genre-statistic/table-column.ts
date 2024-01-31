import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Voyage",
    propTarget: "travelName",
    format: "default",
  },
  {
    name: "Durée",
    propTarget: "duration",
    format: "default",
  },
  {
    name: "Catégorie",
    propTarget: "category",
    format: "default",
  },
  {
    name: "Effectif male (%)",
    propTarget: "maleEffective",
    format: "number",
  },
  {
    name: "Effectif femelle (%)",
    propTarget: "femaleEffective",
    format: "number",
  },
];
