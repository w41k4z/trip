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
export const MovementPage = lazy(() => import("./pages/Movement"));
export const PositionPage = lazy(() => import("./pages/Position"));
export const EmployeePage = lazy(() => import("./pages/Employee"));

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
          path: "position",
          element: <PositionPage />,
        },
        {
          path: "employee",
          element: <EmployeePage />,
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
