import {
  RxActivityLog,
  RxClock,
  RxColumns,
  RxDashboard,
  RxPaperPlane,
} from "react-icons/rx";
import { MdWork } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";
import { MdMultipleStop } from "react-icons/md";
import { GiTeamUpgrade } from "react-icons/gi";

export type NavElement = {
  title: string;
  elements: {
    title: string;
    path: string;
    icon: React.ReactNode;
    onItemClick: () => void;
  }[];
};

export const navConfig: NavElement[] = [
  {
    title: "Table",
    elements: [
      {
        title: "Activité",
        path: "/activité",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
      {
        title: "Bouquet",
        path: "/bouquet",
        icon: <RxDashboard />,
        onItemClick: () => {},
      },
      {
        title: "Activité de bouquet",
        path: "/activités-bouquet",
        icon: <RxDashboard />,
        onItemClick: () => {},
      },
      {
        title: "Durée",
        path: "/durée",
        icon: <RxClock />,
        onItemClick: () => {},
      },
      {
        title: "Catégorie",
        path: "/catégorie",
        icon: <RxColumns />,
        onItemClick: () => {},
      },
      {
        title: "Grade",
        path: "/grade",
        icon: <GiTeamUpgrade />,
        onItemClick: () => {},
      },
      {
        title: "Poste",
        path: "/position",
        icon: <MdWork />,
        onItemClick: () => {},
      },
      {
        title: "Client",
        path: "/client",
        icon: <FaUsers />,
        onItemClick: () => {},
      },
      {
        title: "Reservation client",
        path: "/client-reservation",
        icon: <FaUsers />,
        onItemClick: () => {},
      },
      {
        title: "Stat",
        path: "/genre-stat",
        icon: <FaUsers />,
        onItemClick: () => {},
      },
      {
        title: "Employé",
        path: "/employee",
        icon: <FaUsers />,
        onItemClick: () => {},
      },
      {
        title: "Voyage",
        path: "/voyage",
        icon: <RxPaperPlane />,
        onItemClick: () => {},
      },
      {
        title: "Activité de voyage",
        path: "/activités-voyage",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
      {
        title: "Employé de voyage",
        path: "/employés-voyage",
        icon: <LiaUsersSolid />,
        onItemClick: () => {},
      },
    ],
  },
  {
    title: "Stock",
    elements: [
      {
        title: "Mouvement",
        path: "/movement",
        icon: <MdMultipleStop />,
        onItemClick: () => {},
      },
    ],
  },
];
