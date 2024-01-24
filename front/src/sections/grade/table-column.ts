import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Nom",
    propTarget: "name",
    format: "default",
  },
  {
    name: "Majoration (%)",
    propTarget: "increase",
    format: "number",
  },
  {
    name: "EXP minimum",
    propTarget: "fromDuration",
    format: "number",
  },
  {
    name: "EXP maximum",
    propTarget: "toDuration",
    format: "number",
  },
];
