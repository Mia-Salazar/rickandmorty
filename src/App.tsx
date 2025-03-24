import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import { Layout } from './components';

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
      ],
    },
  ];

const App = () => <RouterProvider router={createBrowserRouter(routes)} />;

export default App;
