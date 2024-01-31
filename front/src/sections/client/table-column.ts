import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Nom",
    propTarget: "name",
    format: "default",
  },
  {
    name: "Prenom",
    propTarget: "firstName",
    format: "default",
  },
  {
    name: "Genre",
    propTarget: "genreString",
    format: "default",
  },
  {
    name: "Date de naissance",
    propTarget: "birthDate",
    format: "date",
  },
];
