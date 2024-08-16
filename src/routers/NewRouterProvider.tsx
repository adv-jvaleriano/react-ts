import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NewsPage from "../pages/HomePage/NewsPage/NewsPage";
import FriendsPage from "../pages/HomePage/FriendsPage/FriendsPage";
import ContextPage from "../pages/ContextPage/ContextPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import MainPage from "../pages/MainPage/MainPage";
import Layout from "../commons/Layout/Layout";
import AchievementsPage from "../pages/MainPage/AchievementsPage/AchievementsPage";
import ContactPage from "../pages/MainPage/ContactPage/ContactPage";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    children:[
      {
        path: '/',
        element: <NewsPage />
      },
      {
        path: 'friends',
        element: <FriendsPage />
      },
    ]
  },
  {
    path:'app',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MainPage />,
        children: [
          {
            path: 'achievements',
            element: <AchievementsPage />,
          },
          {
            path: 'contact',
            element: <ContactPage />,
          },
        ]
      },
      {
        path: 'context',
        element: <ContextPage />
      },
    ]
  },
  {
    path: 'error/:code',
    element: <ErrorPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
]

// SEGURIDAD PARA LA RUTA APP
debugger;
const hasPermission: boolean = true;

const finalRoutes = createBrowserRouter(
  hasPermission ?
  routes
  :
  routes.filter(route => route.path != 'app')
);

const NewRouterProvider = () => {
  return <RouterProvider router={finalRoutes} />
}

export default NewRouterProvider;
