import { Column } from "../../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Billet",
    propTarget: "activityName",
    format: "default",
  },
  {
    name: "Stock",
    propTarget: "remainingQuantity",
    format: "number",
  },
];
