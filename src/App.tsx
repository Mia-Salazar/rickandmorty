import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import { Layout } from './components';
import { Home, Detail } from './pages';

const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/characters" />,
        },
        {
          path: '/characters',
          element: <Home />,
        },
        {
          path: '/characters/:id',
          element: <Detail />,
        },
      ],
    },
  ];

const App = () => <RouterProvider router={createBrowserRouter(routes)} />;

export default App;
