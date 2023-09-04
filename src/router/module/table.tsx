import { Navigate, RouteObject } from 'react-router-dom';

import BaseTable from '@/views/table';
import FilterTable from '@/views/table/filter-table';
import App from '@/App';

const table: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          // {
          //   index: true,
          //   title: "Dashboard",
          //   icon: <DashboardOutlined />,
          //   element: <Dashboard />,
          // },
          {
            path: "/table",
            element: <BaseTable />,
          },
          {
            path: "/filter-table",
            element: <FilterTable />,
          },
        ],
      }
    ],
  },
];

export default table;
