import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";

export const Page404 = lazy(() => import("./pages/Page404"));
export const ActivityPage = lazy(() => import("./pages/Activity"));
export const SubscriptionTierPage = lazy(
  () => import("./pages/SubscriptionTier")
);
export const TierActivityPage = lazy(() => import("./pages/TierActivity"));
export const DurationPage = lazy(() => import("./pages/Duration"));
export const TravelCategoryPage = lazy(() => import("./pages/TravelCategory"));
export const TravelPage = lazy(() => import("./pages/Travel"));
export const TravelActivityPage = lazy(() => import("./pages/TravelActivity"));
export const TravelEmployeePage = lazy(() => import("./pages/TravelEmployee"));
export const MovementPage = lazy(() => import("./pages/Movement"));
export const GradePage = lazy(() => import("./pages/Grade"));
export const PositionPage = lazy(() => import("./pages/Position"));
export const EmployeePage = lazy(() => import("./pages/Employee"));
export const ClientPage = lazy(() => import("./pages/Client"));
export const ClientReservationPage = lazy(
  () => import("./pages/ClientReservation")
);
export const TravelGenreStatisticPage = lazy(
  () => import("./pages/TravelGenreStatistic")
);

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Suspense>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        {
          path: "activité",
          element: <ActivityPage />,
        },
        {
          path: "bouquet",
          element: <SubscriptionTierPage />,
        },
        {
          path: "activités-bouquet",
          element: <TierActivityPage />,
        },
        {
          path: "durée",
          element: <DurationPage />,
        },
        {
          path: "catégorie",
          element: <TravelCategoryPage />,
        },
        {
          path: "voyage",
          element: <TravelPage />,
        },
        {
          path: "activités-voyage",
          element: <TravelActivityPage />,
        },
        {
          path: "employés-voyage",
          element: <TravelEmployeePage />,
        },
        {
          path: "grade",
          element: <GradePage />,
        },
        {
          path: "position",
          element: <PositionPage />,
        },
        {
          path: "employee",
          element: <EmployeePage />,
        },
        {
          path: "client",
          element: <ClientPage />,
        },
        {
          path: "client-reservation",
          element: <ClientReservationPage />,
        },
        {
          path: "genre-stat",
          element: <TravelGenreStatisticPage />,
        },
        {
          path: "movement",
          element: <MovementPage />,
        },
      ],
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
